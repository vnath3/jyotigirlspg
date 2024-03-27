document.addEventListener('DOMContentLoaded', function () {
    var phoneLink = document.getElementById('phone-link');
    var phoneNumber = "+919922333305";// Replace with your phone number

    phoneLink.href = 'tel:' + phoneNumber;
});


// Function to open WhatsApp with a predefined message
function openWhatsApp() {
    // Get the user's phone number (replace with your own)
    var phoneNumber = "+919922333305";

    // Get the message you want to send (replace with your own)
    var message = "Hi, is room available?";

    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp link with the phone number and message
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    // Set the href attribute of the WhatsApp link
    document.getElementById("whatsapp-link").href = whatsappLink;
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", openWhatsApp);