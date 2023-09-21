// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the success message element
    const successMessage = document.getElementById("booking-success");

    // Check if the booking was successful (you can modify this condition)
    const bookingSuccessful = true;

    // If the booking was successful, display the success message
    if (bookingSuccessful) {
        successMessage.classList.remove("hidden");
    }
});
