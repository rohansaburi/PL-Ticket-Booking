
// Reusable Toast Notification Function

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "25px";
    toast.style.right = "25px";
    toast.style.backgroundColor = "#142850";
    toast.style.color = "white";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "16px";
    toast.style.zIndex = "1000";

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);

}


// Smooth Scrolling to Booking Form

document.querySelectorAll(".book-btn").forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Redirecting to Booking Form!");

    });

});


// Activity 7: Selector Forms and Live Interaction


// Selecting Booking Form Elements

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");


// Selecting Booking Summary Elements

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");


// Ticket Prices for Different Matches and Stand Categories

const ticketPrices = {

    "SRH vs RCB": {
        "General": 800,
        "Premium": 2000,
        "VIP": 5000
    },

    "CSK vs MI": {
        "General": 1000,
        "Premium": 2500,
        "VIP": 6000
    },

    "SRH vs MI": {
        "General": 900,
        "Premium": 2200,
        "VIP": 5500
    }

};


// Function to Update Booking Summary

function updateBookingSummary() {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;
    const quantity = Number(quantityInput.value) || 0;

    let price = 0;
    let total = 0;

    // Get Ticket Price

    if (selectedMatch && selectedStand) {

        price = ticketPrices[selectedMatch][selectedStand] || 0;

    }

    // Calculate Total Amount

    if (quantity >= 1 && quantity <= 10) {

        total = price * quantity;

    }

    // Update Booking Summary Card

    summaryMatch.textContent = selectedMatch || "Not Selected";

    summaryStand.textContent = selectedStand || "Not Selected";

    summaryPrice.textContent = "₹" + price;

    summaryQuantity.textContent = quantity;

    summaryTotal.textContent = "₹" + total;

    // Display Toast Notification

    showToast("Booking Summary Updated!");

}


// Add Change Event Listeners

matchSelect.addEventListener("change", updateBookingSummary);

standSelect.addEventListener("change", updateBookingSummary);

quantityInput.addEventListener("change", updateBookingSummary);
