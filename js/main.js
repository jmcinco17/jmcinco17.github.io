//Alert message
  alert("Welcome to John Cinco's Portfolio! Please note that this website is still under development. Some features may be incomplete. Thank you for your patience!");

// LiveUpdate Year
const Year = document.getElementById("Year");
const d = new Date();
Year.innerText = d.getFullYear();

//// conditionals (if-else)
const btn = document.getElementById("btn alert");
btn.addEventListener("click", () => {
    greeting();
    console.log("Button Clicked");
});

const greeting = () => {
    if (d.getHours() <= 11) {
        alert(`Good morning!`);
    } else if (d.getHours() < 18) {
        alert(`Good afternoon!`);
    } else {
        alert(`Good evening!`);
    }
}
