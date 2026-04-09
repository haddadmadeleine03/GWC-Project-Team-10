from flask import Blueprint, request, jsonify
from datetime import datetime
from models import ratings_col
from users import verify_token

ratings_bp = Blueprint("ratings", __name__)

@ratings_bp.route("/", methods=["POST"])
def add_rating():
    user = verify_token()
    if not user:
        return jsonify({"error": "Unauthorized!"}), 401

    data = request.get_json()
    rating = {
        "user_id": user["uid"],
        "album_name": data.get("album_name", ""),
        "artist": data.get("artist", ""),
        "rating": data.get("rating", 0),
        "description": data.get("description", ""),
        "created_at": datetime.utcnow()
    }
    ratings_col.insert_one(rating)
    return jsonify({"message": "Rating uploaded!"}), 201

@ratings_bp.route("/<user_id>", methods=["GET"])
def get_ratings(user_id):
    ratings = list(ratings_col.find({"user_id": user_id}))
    for r in ratings:
        r["_id"] = str(r["_id"])
    return jsonify(ratings), 200