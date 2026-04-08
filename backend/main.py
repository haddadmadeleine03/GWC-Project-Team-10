import token
from dotenv import load_dotenv
import os
import base64
from requests import post, get
import json

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

def get_token():
    auth_string = client_id + ":" + client_secret
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization" : "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {"grant_type": "client_credentials"}
    result = post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    token = json_result["access_token"]
    return token

def get_auth_header(token):
    return{"Authorization" : "Bearer " + token}

def search_for_artist(token, artist_name):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"?q={artist_name}&type=artist&limit=1"

    query_url = url + query
    result = get(query_url, headers=headers)
    json_result = json.loads(result.content)["artists"]["items"]

    if len(json_result) == 0:
        print("No artist with this name exists...")
        return None
    
    return json_result[0]

def search_for_top_50_playlist(token):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = "?q=Top+50+US&type=playlist&limit=1"

    query_url = url + query
    result = get(query_url, headers=headers)
    json_result = json.loads(result.content)

    return json_result



def get_songs_by_artist(token, artists_id):
    headers = get_auth_header(token)
    # Get artist's albums
    albums_url = f"https://api.spotify.com/v1/artists/{artist_id}/albums?include_groups=album,single&limit=5"
    albums_res = get(albums_url, headers=headers).json()

    songs = []

    for album in albums_res["items"]:
        album_id = album["id"]
        tracks_url = f"https://api.spotify.com/v1/albums/{album_id}/tracks"
        tracks_res = get(tracks_url, headers=headers).json()

        for track in tracks_res["items"]:
            songs.append({
                "name": track["name"],
                "id": track["id"]
            })

    return songs[:10]  # limit results


token = get_token()
print ("TOKEN: " + token)
# result = search_for_artist(token, "ACDC")
# artist_id = result["id"]
# print(result["name"])
# songs = get_songs_by_artist(token, artist_id)
# print(songs)
top_50 = search_for_top_50_playlist(token)
print (top_50)
