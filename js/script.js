console.log("Hello from script.js!");

// Example: Add a click event to all buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });
});