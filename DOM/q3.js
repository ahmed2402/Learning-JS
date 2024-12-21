// Qs. Create a new button element. Give it a text “click me”, background color of red & text colorof white.
// Insert the button as the first element inside the body tag.

let btn = document.createElement("button");
btn.style.backgroundColor="red";
btn.style.color="white";
btn.innerText = "click me!";

let body = document.querySelector("body");
body.prepend(btn);
