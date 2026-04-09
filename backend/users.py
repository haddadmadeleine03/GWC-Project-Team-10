from flask import Blueprint, request, jsonify
from models import users_col
from firebase_admin import auth
from datetime import datetime
import os
from dotenv import load_dotenv
import base64
import requests

load_dotenv("secrets.env") 
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")

users_bp = Blueprint("users", __name__)

def firebase_required(f):
    from functools import wraps
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get("Authorization") # token required to access protected info
        if not auth_header:
            return jsonify({"error": "Unauthorized!"}), 401
        try:
            token = auth_header.split(" ")[1] if " " in auth_header else auth_header
            user = auth.verify_id_token(token)
            request.user = user
        except Exception as e:
            print("Token error:", e)
            return jsonify({"error": "Unauthorized!"}), 401
        return f(*args, **kwargs)
    return decorated

@users_bp.route("/signup", methods=["POST"]) # User / Artist signup
def signup():
    data = request.get_json()
    required_fields = ["uid", "username", "email", "role"]
    if not all(f in data for f in required_fields):
        return jsonify({"error": "Missing fields!"}), 400

    if users_col.find_one({"uid": data["uid"]}):
        return jsonify({"error": "User already exists!"}), 400

    new_user = {
        "uid": data["uid"],
        "username": data["username"],
        "email": data["email"],
        "role": data["role"],  
        "created_at": datetime.utcnow()
    }
    users_col.insert_one(new_user)
    return jsonify({"message": f"{data['role'].capitalize()} created successfully"}), 201

@users_bp.route("/login", methods=["POST"]) # Login - email + password through Firebase or login with Spotify
def login():
    data = request.get_json()
    required_fields = ["uid", "email"]
    if not all(f in data for f in required_fields):
        return jsonify({"error": "Missing fields!"}), 400

    user = users_col.find_one({"uid": data["uid"]})
    if user:
        return jsonify({
            "message": f"{user['role'].capitalize()} logged in successfully",
            "username": user["username"],
            "role": user["role"]
        })
    return jsonify({"error": "User not found!"}), 404

@users_bp.route("/spotify-login", methods=["POST"]) # Login with Spotify -  token allows access to user's Spotify data
def spotify_login():
    data = request.get_json()
    code = data.get("code")
    redirect_uri = data.get("redirect_uri")
    if not code or not redirect_uri:
        return jsonify({"error": "Missing code or redirect_uri"}), 400

    url = "https://accounts.spotify.com/api/token"
    auth_header = base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode()
    headers = {"Authorization": f"Basic {auth_header}"}
    payload = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": redirect_uri
    }
    r = requests.post(url, headers=headers, data=payload)
    if r.status_code != 200:
        return jsonify({"error": "Failed to get Spotify token"}), 400

    tokens = r.json()
    access_token = tokens.get("access_token")
    if not access_token:
        return jsonify({"error": "No access token returned"}), 400

    user_resp = requests.get("https://api.spotify.com/v1/me", headers={"Authorization": f"Bearer {access_token}"})
    spotify_user = user_resp.json()
    spotify_id = spotify_user["id"]

    user = users_col.find_one({"spotify_id": spotify_id}) # Storing user in MongoDB database
    if not user:
        new_user = {
            "spotify_id": spotify_id,
            "username": spotify_user.get("display_name", spotify_id),
            "email": spotify_user.get("email"),
            "role": "user",
            "created_at": datetime.utcnow()
        }
        users_col.insert_one(new_user)
        user = new_user

    return jsonify({
        "message": "Spotify login successful",
        "username": user["username"],
        "role": user["role"]
    })

@users_bp.route("/profile", methods=["GET"]) # Access user profile once authorized (token required)
@firebase_required
def get_profile():
    user_id = request.user["uid"]
    profile = users_col.find_one({"uid": user_id}, {"_id": 0})
    if not profile:
        return jsonify({"message": "No profile found!"}), 404
    return jsonify(profile), 200

@users_bp.route("/profile", methods=["PUT"])
@firebase_required
def update_profile():
    user_id = request.user["uid"]
    data = request.json
    allowed_fields = ["display_name", "biography", "avatar_url"]
    updates = {k: v for k, v in data.items() if k in allowed_fields}
    if not updates:
        return jsonify({"error": "Nothing to update!"}), 400
    users_col.update_one({"uid": user_id}, {"$set": updates}, upsert=True)
    return jsonify({"message": "Profile updated!"}), 200
