from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu.html')
def menu():
    return render_template('menu.html')

@app.route('/pay.html')
def pay():
    return render_template('pay.html')