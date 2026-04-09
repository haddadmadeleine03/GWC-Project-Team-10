from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["gwc_db"]

users_col = db["users"]
ratings_col = db["ratings"]
shows_col = db["shows"]