// Task 1: Created Revenue Metric Card
const dashboardDiv = document.getElementById("dashboard"); // Selects dashboard container using getElementById
const dashboardQuery = document.querySelector("#dashboard"); // Selects dashboard container using querySelector
const revenueCard = document.createElement("div"); // Creates new div element to reperesent metric card
const profitCard = document.createElement("div")
const expensesCard = document.createElement("div")

revenueCard.setAttribute("class", "metric-card"); // Assigns class of metric-card style
revenueCard.setAttribute("id", "revenueCard"); // Assigns ID of revenue card

profitCard.setAttribute("class", "metric-card"); // Assigns class of metric-card style
profitCard.setAttribute("id", "profitCard"); // Assigns ID of profit card

expensesCard.setAttribute("class", "metric-card"); // Assigns class of metric-card style
expensesCard.setAttribute("id", "expensesCard"); // Assigns ID of expenses card

function createRevenueCard () {
    const title = document.createElement("h3"); // Creates heading element with a title of "Revenue"
    title.textContent = "Revenue"; 
    const value = document.createElement("p"); // Creates paragraph element with a place holder value of "$0"
    value.textContent = "$0";
    revenueCard.appendChild(title); // Populates revenue card with title
    revenueCard.appendChild(value); // Populates revenue card with value
}; // Function to create revenue card

function createProfitCard () {
    const title = document.createElement("h3"); // Creates heading element with a title of "Profit"
    title.textContent = "Profit"; 
    const value = document.createElement("p"); // Creates paragraph element with a place holder value of "$150"
    value.textContent = "$150";
    profitCard.appendChild(title); // Populates profit card with title
    profitCard.appendChild(value); // Populates profit card with value
}; // Function to create profit card

function createExpensesCard () {
    const title = document.createElement("h3"); // Creates heading element with a title of "Expenses"
    title.textContent = "Expenses"; 
    const value = document.createElement("p"); // Creates paragraph element with a place holder value of "$90"
    value.textContent = "$80";
    expensesCard.appendChild(title); // Populates expenses card with title
    expensesCard.appendChild(value); // Populates expenses card with value
}; // Function to create expenses card

createRevenueCard(); // Calls revenue card function
createProfitCard();  // Calls profit card function
createExpensesCard(); // Calls expenses card function
dashboardDiv.appendChild(revenueCard); // Appends revenue card to dashboard container
dashboardDiv.appendChild(profitCard); // Appends profits card to dashboard container
dashboardDiv.appendChild(expensesCard); // Appends expenses card to dashboard container

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

// Task 4: Demonstrated Event Bubbling in Customer Section
const customerSection = document.getElementById("customerSection"); // Selects customer selection using gemElementById
const customerCards = document.querySelectorAll(".customer-card"); // Selects all elements with the class "customer-card"

customerSection.addEventListener("click", () => {
    console.log("Customer section has been clicked."); // If customer section is clicked -> outputs "Customer section has been clicked"
});
customerCards.forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("Customer card has been clicked."); // If customer cards is clicked -> outputs "Customer card has been clciked"
        event.stopPropagation(); // Clicking a customer card logs only "Customer card has been clicked."
    });
}); // Applies event listener to all customer cards


