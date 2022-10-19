import csv
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
    order = request.get_json()

    orderData = []

    # make the order writable for a csv file
    # make every individual item a key value pair with the table number
    for key in order:
        if key != "orderNumber":
            for i in range(int(order[key])):
                item = []
                item.append(order["orderNumber"])
                item.append(key)
                orderData.append(item)

    # writing the order in a csv file
    write_order(orderData)

    return redirect('/complete')

@app.route('/complete')
def complete():
    return render_template('complete.html')

@app.route('/staff')
def staff():
    order = read_order()

    return render_template('luigi.html', order=order)

@app.route('/order-ready')
def order_ready():
    order = read_order()


    

def write_order(order):
    with open('orders.csv', 'a', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(order)

    return "File has been written"

def read_order():
    order = []

    with open("orders.csv", 'r') as filevar :
        reader = csv.reader(filevar)
        for row in reader :
            order.append(row)

    return order

def update_file(updatedList):
    with open("fakefacebook.txt","w",newline="") as f:
        Writer=csv.writer(f)
        Writer.writerows(updatedList)

    return "File has been updated"