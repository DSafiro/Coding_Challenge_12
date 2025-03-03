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
dashboardDiv.appendChild(revenueCard); // Adds revenue card to dashboard container