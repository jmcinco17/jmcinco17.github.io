//Generated List
let improvement = ["Layout","CSS","JavaSCript"];
console.log(improvement);

const interestsEl = document.getElementById("improvement");
improvement.forEach((i) => {
    const li= document.createElement("li");
    li.innerText = i;
    interestsEl.appendChild(li);
});

//Alert message
  alert("Welcome to John Cinco's Portfolio! Please note that this website is still under development. Some features may be incomplete. Thank you for your patience!");

// LiveUpdate Footer Year
const Year = document.getElementById("Year");
const d = new Date();
Year.innerText = d.getFullYear();

// Portfolio Greeing - Alert Button
const btn = document.getElementById("btnalert");
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

//Hover Button
btn.onmouseover = () => {
    btn.innerText = "Click Me!";
};
btn.onmouseout = () => {
    btn.innerText = "Hello!"
}
