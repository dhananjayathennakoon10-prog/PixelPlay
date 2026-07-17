// Login Button
const loginBtn = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
    alert("Welcome to PixelPlay!");
});

// Download Buttons
const downloadButtons = document.querySelectorAll(".card button");

downloadButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Your download will start soon...");
    });
});

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});

// Smooth Page Load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

window.onload=function(){

let user = localStorage.getItem("username");

if(user){

document.getElementById("loginBtn").innerHTML="Profile";

document.getElementById("loginBtn").onclick=function(){

location.href="profile.html";

}

}

}