document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("ANCHURI MANASWIPRASAD").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("responseMessage").innerText = "Message Sent Successfully!";
    
    this.reset();
});
