//Iteration 1 - Setting everything up.
const vegetarian = "vegetarian"
const hawaiian = "hawaiian"
const pepperoni = "pepperoni"
const calzone = "calzone"
const kebab = "kebab"

// Iteration 4 - Finalize the order
const calculateTotalCost = (event) => {
    event.preventDefault();
    //get nr of pizzas
    let orderQuantity = document.getElementById("nrOfPizzas").value;
    //get pizza sort
    let orderName = document.getElementById("pizzaSort").value;
    let pizzaPrice = pricePerPizza(orderName);
    // calculate totalcost for pizza
    const orderTotal = orderQuantity * pizzaPrice
    //Print out message to customer
    let orderTime = calculateCookingTime(orderQuantity)
    let pizzaImg = pizzaImages(orderName)
    document.getElementById("pizzaImg").src = pizzaImg;
    let info = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`;

    //Set pizza picture to display block
    var x = document.getElementById("pizzaImg");
    x.style.display = "block";

    document.getElementById("submitInfo").innerHTML = info;

};
const form = document.getElementById("form");
form.onsubmit = calculateTotalCost;

//Sets the pizza image 
const pizzaImages = (orderName) => {
    let img;
    if (orderName == `${vegetarian}`) {
        img = "./Vegetariana.jpg"
        return img;
    } else if (orderName == `${hawaiian}`) {
        img = "./Hawaiian.jpg"
        return img;
    } else if (orderName == `${pepperoni}`) {
        img = "./Pepperoni.jpg"
        return img;
    } else if (orderName == `${calzone}`) {
        img = "./Calzone.jpg"
        return img;
    } else if (orderName == `${kebab}`) {
        img = "./Kebab.jpg"
        return img;
    }

}
//Sets the pizza price
const pricePerPizza = (orderName) => {
    let pizzaPrices = 0;
    if ((orderName == `${vegetarian}`) || (orderName == `${hawaiian}`) || (orderName == `${pepperoni}`)) {
        pizzaPrices = 80
        return pizzaPrices;

    } else {
        pizzaPrices = 100
        return pizzaPrices;
    }

}
//Add conditonals (Iteration 5)
const calculateCookingTime = (orderQuantity) => {
    let orderTime = 0;
    if (orderQuantity <= 2) {
        orderTime = 10
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        orderTime = 15

    } else if (orderQuantity >= 6) {
        orderTime = 20
    }
    return orderTime;
}



//Below code is from the itterations in blue level
/*
const pizzaPrice = 80

//Greet the customer (Iteration 2)
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`)

//Ask the customer (Iteration 3)
let orderTotal
let orderTime
let orderName = prompt("Enter the name of the pizza you want to order today: ")
let validation = validateOrderName(orderName);
if (validation === true) {
    const orderQuantity = prompt(`How many of ${orderName} do you want?`)
    console.log(orderQuantity)
    orderTotal= calculateTotalCost(orderQuantity, pizzaPrice)
    orderTime=calculateCookingTime(orderQuantity)
} else {
    orderName = prompt("Enter the name of the pizza you want to order today: ")
    console.log(orderName)
    validateOrderName(orderName)
}

/*const validateOrderName = (orderName) => {
   
    console.log(orderName)
    if ((orderName == `${vegetarian}`) || (orderName == `${hawaiian}`) || (orderName == `${pepperoni}`)) {
        return true;

    } else {
        alert("Select a pizza from the menu")
        return false;
    }
}*/

//alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza(s) will take ${orderTime} minutes.`)