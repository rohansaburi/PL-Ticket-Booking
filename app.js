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