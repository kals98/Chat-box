from flask import Flask, redirect, url_for, render_template, request, jsonify, session, json

app = Flask(__name__)
app.secret_key = "a"

texts = [{'type':"agent",'srno':1,'msg':"hello"},{'type':"agent",'srno':1,'msg':"How may I help You?"},{'type':"user",'srno':1,'msg':"Hi pls help"}]
confibean = [{'type':"chat"}]
@app.route("/", methods=["POST", "GET"])
def home():
    return render_template("index.html", texts=texts, confibean=confibean)


if __name__ == "__main__":
	app.run(debug=True)