import csv
import oven
from flask import Flask, render_template, request, redirect

app = Flask(__name__)
setupDone = False
drinks = [
    "Fanta",
    "Coca Cola",
    "Sprite",
    "Cassis",
    "Dr. Pepper",
    "Pepsi",
    "Lipton",
    "Coffee",
    "Cappuccino"
]

pizzas = [
    "Margherita",
    "Pepperoni",
    "Cheese",
    "Meat",
    "BBQ Chicken",
    "Hawaii",
    "Tonno",
    "Funghi",
    "Calzone"]

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
                if key in pizzas:
                    item.append('pizza')
                elif key in drinks:
                    item.append('drink')
                orderData.append(item)

    # writing the order in a csv file
    append_file("pending_orders.csv", orderData)

    return redirect('/complete')

@app.route('/complete')
def complete():
    return render_template('complete.html')

@app.route('/staff')
def staff():
    pendingOrders = read_file("pending_orders.csv")
    readyOrders = read_file("ready_orders.csv")

    global setupDone
    if not setupDone:
        oven.setup()
        setupDone = True

    return render_template('luigi.html', pendingOrders=pendingOrders, readyOrders=readyOrders)

@app.route('/pizza-ready', methods=["POST"])
def pizza_ready():
    item = request.json
    itemAsList = [item["tableNumber"], item["item"], item["type"]]

    order = read_file("pending_orders.csv")

    oven.cook()

    order.remove(itemAsList)
    update_file("pending_orders.csv", order)
    append_file("ready_orders.csv", [itemAsList])

    oven.buzz()

    return redirect('/staff')

@app.route('/drink-ready', methods=["POST"])
def drink_ready():
    item = request.json
    itemAsList = [item["tableNumber"], item["item"], item["type"]]

    order = read_file("pending_orders.csv")

    order.remove(itemAsList)
    update_file("pending_orders.csv", order)
    append_file("ready_orders.csv", [itemAsList])
    return redirect('/staff')

def append_file(file, order):
    with open(file, 'a', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(order)
    
    return "File has been written"

def read_file(file):
    order = []

    with open(file, 'r') as filevar :
        reader = csv.reader(filevar)
        for row in reader :
            order.append(row)

    return order

def update_file(file, updatedList):
    with open(file,"w",newline="") as f:
        Writer=csv.writer(f)
        Writer.writerows(updatedList)

    return "File has been updated"