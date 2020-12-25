const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");

green.addEventListener("click", () => {
    document.body.style.backgroundColor = "green"
})

yellow.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow"
})

blue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue"
})