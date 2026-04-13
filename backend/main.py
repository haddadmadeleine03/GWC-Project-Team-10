import token
from dotenv import load_dotenv
import os
import base64
from requests import post, get
import json
import sys

load_dotenv()
sys.stdout.reconfigure(encoding='utf-8')

#Note: Two APIs were used during this project. Please assume most functions will use the Spotify API apart from the trending songs

#======================
#   SPOTIFY AND HELPERS 
#======================
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

#======================
#   lASTFM AND HELPERS 
#======================
lastfm_id = os.getenv("LASTFM_ID")
lastfm_base_url = "https://ws.audioscrobbler.com/2.0/"

def lastfm_get(params: dict) -> dict:
    """Base request wrapper for Last.fm. Injects API key and JSON format automatically."""
    params.update({
        "api_key": lastfm_id,
        "format": "json"
    })
    response = get(lastfm_base_url, params=params)
    response.raise_for_status()
    return response.json()

#======================
#   TICKET MASTER API
#======================
ticketmaster_id = os.getenv("TICKETMASTER_ID")
ticketmaster_base_url = "https://app.ticketmaster.com/discovery/v2/"

#======================
#   RETRIVAL FUNCTIONS
#======================

#Spotify
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

def get_songs_by_artist(token, artist_id):
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

def search_songs_by_name(token, names_of_songs: list):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    list_of_song_ids = []

    for name in names_of_songs:
        query = f"?q={name}&type=track&limit=1"
        query_url = url + query
        result = get(query_url, headers=headers)
        json_result = json.loads(result.content)["tracks"]["items"][0]["id"]
        list_of_song_ids.append(json_result)
        
    return list_of_song_ids

def get_songs_by_id(token, list_of_song_ids: list):
    headers = get_auth_header(token)
    #Get songs
    songs = []

    for song_id in list_of_song_ids:
        song_url = f"https://api.spotify.com/v1/tracks/{song_id}"
        song_res = get(song_url, headers=headers).json()

        images = song_res.get("album", {}).get("images", [])

        songs.append({
            "name":       song_res["name"],
            "artist":     song_res["artists"][0]["name"],
            "id":         song_res["id"],
            "image":      images[0]["url"] if images else None,  # largest image
            "preview_url": song_res.get("preview_url"),             # 30s clip URL
            "popularity": song_res.get("popularity"),
        })

    return songs

#Treding utilizing lastfm for songs and spotify for image information
def get_trending_songs(token):
    data = lastfm_get ({"method" : "chart.getTopTracks"})

    tracks = data.get("tracks", {}).get("track", [])
    songs_ids = []
    songs = []
                            
    names = [t["name"] for t in tracks]
    songs_ids = search_songs_by_name(token, names)
    songs = get_songs_by_id(token, songs_ids)
    
    return songs

def get_upcoming_shows_artist(artist_name: str) -> list:
    url = "https://app.ticketmaster.com/discovery/v2/events.json"
    response = get(url, params={
        "apikey": ticketmaster_id, 
        "keyword": artist_name, 
        "classificationName": "music"
    })
    events = response.json().get("_embedded", {}).get("events", [])

    return[
        {
            "name": e["name"],
            "date": e["dates"]["start"]["localDate"],
            "venue": e["_embedded"]["venues"][0]["name"],
            "city": e["_embedded"]["venues"][0]["city"]["name"],
            "url": e["url"]
        }
        for e in events
    ]


def get_upcoming_shows_city(city_name: str) -> list:
    url = "https://app.ticketmaster.com/discovery/v2/events.json"
    
    response = get(url, params={
        "apikey": ticketmaster_id,
        "city": city_name,
        "classificationName": "music",
        "sort": "date,asc"
    })

    response.raise_for_status()  # surface any HTTP errors early

    events = response.json().get("_embedded", {}).get("events", [])

    return [
        {
            "name": e["name"],
            "date": e["dates"]["start"]["localDate"],
            "venue": e["_embedded"]["venues"][0]["name"],
            "city": e["_embedded"]["venues"][0]["city"]["name"],
            "url": e["url"]
        }
        for e in events
    ]

#Probably wont be used do to name being accessible but contents are not
def search_playlists(token, playlist_name):
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = '?q="playlist_name"&type=playlist&limit=1'

    query_url = url + query
    result = get(query_url, headers=headers).json()

    # Check if the search actually returned items
    playlists = result.get("playlists", {}).get("items", [])
    if not playlists:
        print("No Top 50 playlist found!")
        return None

    return playlists[0]["id"]




token = get_token()
print ("TOKEN: " + token)
# result = search_for_artist(token, "ACDC")
# artist_id = result["id"]
# print(result["name"])
# songs = get_songs_by_artist(token, artist_id)
# print(songs)
# treding_id = search_trending_playlist(token)
# songs_trending = get_songs_from_playlist(token, treding_id) - did not work because we can look up playlist but they are locked
#print(get_trending_songs(token))

print(get_upcoming_shows_artist("Bad Suns: ACCELERATOUR USA 2026"))