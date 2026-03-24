from flask import Flask

app = Flask(__name__)

@app.route('/')

def home():
    return "Backend is running! ... hopefully"

@app.route('/test')
def test():
    return jsonify({
        "message" : "API is working!"

    })

if __name__ == '__main__':
    app.run(debug=True)
