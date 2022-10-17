let order = {}
let prices = {
    "Margherita": 3.99,
    "Pepperoni": 4.99,
    "Cheese": 2.99,
    "Meat": 3.50,
    "BBQ Chicken": 6.50,
    "Hawaii": 4.50,
    "Tonno": 4.50,
    "Funghi": 4.50,
    "Calzone": 6.99,
    "Fanta": 2.99,
    "Coca Cola": 2.99,
    "Sprite": 2.99,
    "Cassis": 2.99,
    "Dr. Pepper": 2.99,
    "Pepsi": 2.99,
    "Lipton": 2.99,
    "Coffee": 3.50,
    "Cappuccino": 3.50
}

function addOrder(orderName) {
    if (order[orderName] == null) {
        order[orderName] = 1
    } else {
        order[orderName] += 1
    }

    inForm = document.getElementById("inForm")
    inForm.innerHTML = ""

    for (let key in order) {
        let listItem = document.createElement('li')
        listItem.textContent = `${order[key]}x ${key} - ${order[key] * prices[key]}`

        inForm.appendChild(listItem)
    }
}

$(document).ready(function(){
    $("#margherita").click(function () {
        addOrder("Margherita")
    });

    $("#pepperoni").click(function () {
        addOrder("Pepperoni")
    });
            
    $("#cheese").click(function () {
        addOrder("Cheese")
    });

    $("#meat").click(function () {
        addOrder("Meat")
    });

    $("#bbq").click(function () {
        addOrder("BBQ Chicken")
    });

    $("#hawaii").click(function () {
        addOrder("Hawaii")
    });

    $("#tonno").click(function () {
        addOrder("Tonno")
    });
    
    $("#funghi").click(function () {
        addOrder("Funghi")
    });

    $("#calzone").click(function () {
        addOrder("Calzone")
    });

    $("#fanta").click(function () {
        addOrder("Fanta")
    });

    $("#coca").click(function () {
        addOrder("Coca Cola")
    });

    $("#sprite").click(function () {
        addOrder("Sprite")
    });

    $("#cassis").click(function () {
        addOrder("Cassis")
    });

    $("#drpepper").click(function () {
        addOrder("Dr. Pepper")
    });

    $("#pepsi").click(function () {
        addOrder("Pepsi")
    });

    $("#lipton").click(function () {
        addOrder("Lipton")
    });

    $("#coffee").click(function () {
        addOrder("Coffee")
    });

    $("#cappuccino").click(function () {
        addOrder("Capuccino")
    });
});