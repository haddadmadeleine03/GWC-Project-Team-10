from flask import Blueprint, request, jsonify
from datetime import datetime
from models import users_collection, shows_collection 
from users import verify_token  

artist_bp = Blueprint("artist", __name__)

@artist_bp.route("/shows", methods=["POST"])
def add_show():
    user = verify_token()
    if not user:
        return jsonify({"error": "Unauthorized!"}), 401

    db_user = users_collection.find_one({"email": user.get("email")}) # restricting event upload to artists' accounts
    if not db_user or db_user.get("role") != "artist":
        return jsonify({"error": "Sorry, only artists can upload shows!"}), 403

    data = request.get_json()
    show = {
        "artist_id": db_user["_id"],
        "title": data.get("title", ""),
        "date": data.get("date", ""),
        "venue": data.get("venue", ""),
        "description": data.get("description", ""),
        "created_at": datetime.utcnow()
    }

    shows_collection.insert_one(show)
    return jsonify({"message": "Congrats, show uploaded"}), 201

@artist_bp.route("/shows", methods=["GET"])
def get_my_shows():
    user = verify_token()
    if not user:
        return jsonify({"error": "Unauthorized!"}), 401

    db_user = users_collection.find_one({"email": user.get("email")})
    shows = list(shows_collection.find({"artist_id": db_user["_id"]}))
    for s in shows:
        s["_id"] = str(s["_id"])
    return jsonify(shows), 200