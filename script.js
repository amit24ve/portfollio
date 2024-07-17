// Add any interactivity you want here
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded");
});

document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactButton");
    const contactSection = document.getElementById("Contact");

    contactButton.addEventListener("click", function() {
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});