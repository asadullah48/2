// =========== part-1 :BASIC ARRAY ============
/*
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.*/
// ============================================= STEP # 2 ====================================================================
var products = [
    {
        name: "Smartphone",
        price: 60000,
        inventory: {
            stock: 50,
            colorOption: ["Black", "Blue"],
        }
    },
    {
        name: "Headphone",
        price: 9000,
        inventory: {
            stock: 100,
            colorOption: ["Red", "Black"]
        }
    },
    {
        name: "laptop",
        price: 65000,
        inventory: {
            stock: 150,
            colorOption: ["Black", "Silver"]
        }
    }
];
// ======================================================= STEP # 3 ====================================================
function changeColor(products, newColor) {
    products.inventory.colorOption.push(newColor);
    if (newColor === "Black") {
        products.price += products.price * 0.15;
    }
    else if (newColor === "Red") {
        products.price -= products.price * 0.05;
    }
    else if (newColor === "Blue") {
        products.price += products.price * 0.95;
    }
    else if (newColor === "Silver") {
        products.price -= products.price * 0.10;
    }
    else {
        console.log("Sorry! this ".concat(newColor, " is not available "));
    }
    ;
}
;
function displayProductDetails(products) {
    products.forEach(function (products) {
        console.log("Name: ".concat(products.name));
        console.log("Price: ".concat(products.price));
        console.log("Stock: ".concat(products.inventory.stock));
        console.log("Available colors: ".concat(products.inventory.colorOption));
    });
}
changeColor(products[0], "Black");
changeColor(products[1], 'Red');
changeColor(products[2], "Silver");
displayProductDetails(products);
