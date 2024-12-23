// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-modewhen clicked again.

let btn = document.querySelector(".btn");
let body = document.querySelector("body");
let currMode = "light";

btn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});