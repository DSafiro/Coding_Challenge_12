// Task 1: Created Revenue Metric Card
const dashboardDiv = document.getElementById("dashboard"); // Selects dashboard container using getElementById
const dashboardQuery = document.querySelector("#dashboard"); // Selects dashboard container using querySelector
const revenueCard = document.createElement("div"); // Creates new div element to reperesent metric card

revenueCard.setAttribute("class", "metric-card"); // Assigns class of metric-card style
revenueCard.setAttribute("id", "revenueCard"); // Assigns ID of revenue card

function createRevenueCard () {
    const title = document.createElement("h3"); // Creates heading element with a title of "Revenue"
    title.textContent = "Revenue"; 
    const value = document.createElement("p"); // Creates paragraph element with a place holder value of "$0"
    value.textContent = "$0";
    revenueCard.appendChild(title); // Populates revenue card with title
    revenueCard.appendChild(value); // Populates revenue card with value
}; // Function to create revenue card

createRevenueCard(); // Calls create revenue card function
dashboardDiv.appendChild(revenueCard); // Appends revenue card to dashboard container

// Task 2: Updated Metric Cards via Array Conversions
const metricCards = document.querySelectorAll(".metric-card"); // Selects all elements with the class "metric-card"
const metricCardsArray = [...metricCards]; // Converts metric cards into an array

metricCardsArray.forEach(card => {
    card.innerText += " - Updated"; // Adds updated to each card's inner text
    card.style.backgroundColor = "teal"; // Changes background color to teal
}); // Method to modify each metric card in the array

// Task 3: Implemented Dynamic Inventory List
const inventoryList = document.getElementById("inventoryList"); // Selects inventory list using getElementId

function addInventoryItem (productName) {
    const productItem = document.createElement("li"); // Creates new list element
    productItem.setAttribute("class", "product-item"); // Assigns class of product-item style
    productItem.setAttribute("data-product", productName); // Assigns custom data attribute
    productItem.innerText = productName; // Sets inner text to product name
    productItem.addEventListener("click", () => {
        inventoryList.removeChild(productItem); // If click is recorded -> removes product item from list
    }); // Function to add and remove product items from list
    
    inventoryList.appendChild(productItem); // Appends productItem to list
};
