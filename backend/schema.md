# Database Schema (MVP)

## Users Collection
- _id
- username
- email
- password (hashed)
- created_a

Example:
{
  "_id": "123",
  "username": "john_doe",
  "email": "john@email.com",
  "password": "hashed_password",

## Ratings
- _id
- user_id (reference to Users)
- album_name
- artist
- rating (1–5 stars)
- created_at
