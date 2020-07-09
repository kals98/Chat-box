from flask import Flask, redirect, url_for, render_template, request, jsonify, session

app = Flask(__name__)
app.secret_key = "a"

texts = [{'type':"agent",'srno':1,'msg':"hello"},{'type':"agent",'srno':1,'msg':"How may I help You?"},{'type':"user",'srno':1,'msg':"Hi pls help"}]

@app.route("/", methods=["POST", "GET"])
def home():
    session["chat"] = texts
    return render_template("index.html", content=texts)

@app.route("/chat-messages", methods=["GET"])
def send_messages():
    return jsonify(texts)

if __name__ == "__main__":
	app.run(debug=True)