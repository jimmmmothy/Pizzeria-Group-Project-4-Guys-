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

function renderOrder() {
    inForm = document.getElementById("inForm")
    inForm.innerHTML = ""

    for (let key in order) {
        let listItem = document.createElement('li')
        listItem.textContent = `${order[key]}x ${key} - ${(order[key] * prices[key]).toFixed(2)}.`

        inForm.appendChild(listItem)
    }
}

function addOrder(orderName) {
    if (order[orderName] == null) {
        order[orderName] = 1
    } else {
        order[orderName] += 1
    }

    renderOrder()
}

function removeOrder(orderName) {
    if (order[orderName] > 1) {
        order[orderName] -= 1
    } else if (order[orderName] == 1) {
        delete order[orderName]
    }

    renderOrder()
}

function pay() {
    order["orderNumber"] = Math.floor(Math.random() * 10) + 1 // random order number between 1 and 10

    // posting to the flask server
    fetch("/pay", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(order)
    }).then(res => {
        console.log("Request complete! response:", res)

        window.location.replace('complete')
    });
}

// all the onclick functions for the items in the menu
$(document).ready(function(){
    $("#margherita").click(function () {
        addOrder("Margherita")
    });
    $("#margherita2").click(function () {
        removeOrder("Margherita")
    });

    $("#pepperoni").click(function () {
        addOrder("Pepperoni")
    });
    $("#pepperoni2").click(function () {
        removeOrder("Pepperoni")
    });
            
    $("#cheese").click(function () {
        addOrder("Cheese")
    });
    $("#cheese2").click(function () {
        removeOrder("Cheese")
    });

    $("#meat").click(function () {
        addOrder("Meat")
    });
    $("#meat2").click(function () {
        removeOrder("Meat")
    });

    $("#bbq").click(function () {
        addOrder("BBQ Chicken")
    });
    $("#bbq2").click(function () {
        removeOrder("BBQ Chicken")
    });

    $("#hawaii").click(function () {
        addOrder("Hawaii")
    });
    $("#hawaii2").click(function () {
        removeOrder("Hawaii")
    });

    $("#tonno").click(function () {
        addOrder("Tonno")
    });
    $("#tonno2").click(function () {
        removeOrder("Tonno")
    });
    
    $("#funghi").click(function () {
        addOrder("Funghi")
    });
    $("#funghi2").click(function () {
        removeOrder("Funghi")
    });

    $("#calzone").click(function () {
        addOrder("Calzone")
    });
    $("#calzone2").click(function () {
        removeOrder("Calzone")
    });

    $("#fanta").click(function () {
        addOrder("Fanta")
    });
    $("#fanta2").click(function () {
        removeOrder("Fanta")
    });

    $("#coca").click(function () {
        addOrder("Coca Cola")
    });
    $("#coca2").click(function () {
        removeOrder("Coca Cola")
    });

    $("#sprite").click(function () {
        addOrder("Sprite")
    });
    $("#sprite2").click(function () {
        removeOrder("Sprite")
    });

    $("#cassis").click(function () {
        addOrder("Cassis")
    });
    $("#cassis2").click(function () {
        removeOrder("Cassis")
    });

    $("#drpepper").click(function () {
        addOrder("Dr. Pepper")
    });
    $("#drpepper2").click(function () {
        removeOrder("Dr. Pepper")
    });

    $("#pepsi").click(function () {
        addOrder("Pepsi")
    });
    $("#pepsi2").click(function () {
        removeOrder("Pepsi")
    });

    $("#lipton").click(function () {
        addOrder("Lipton")
    });
    $("#lipton2").click(function () {
        removeOrder("Lipton")
    });

    $("#coffee").click(function () {
        addOrder("Coffee")
    });
    $("#coffee2").click(function () {
        removeOrder("Coffee")
    });

    $("#cappuccino").click(function () {
        addOrder("Capuccino")
    });
    $("#cappuccino2").click(function () {
        removeOrder("Capuccino")
    });
});