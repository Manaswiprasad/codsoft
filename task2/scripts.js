document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
