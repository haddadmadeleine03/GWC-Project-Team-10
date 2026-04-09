from flask import Flask
from routes.users import users_bp
from routes.ratings import ratings_bp
from routes.event_upload import event_bp

app = Flask(__name__)

app.register_blueprint(users_bp, url_prefix="/users")
app.register_blueprint(ratings_bp, url_prefix="/ratings")
app.register_blueprint(event_bp, url_prefix="/event_upload")

@app.route("/")
def home():
    return {"status": "Backend Running"}, 200

if __name__ == "__main__":
    app.run(debug=True)