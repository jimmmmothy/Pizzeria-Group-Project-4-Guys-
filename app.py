from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/pay', methods = ['POST'])
def pay():
    temp = request.get_json()
    print(temp)
    return redirect('/complete')

@app.route('/complete')
def complete():
    return render_template('complete.html')