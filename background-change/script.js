const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const random1 = document.getElementById("random1");
const random2 = document.getElementById("random2");

const header = document.querySelector("h1");

const setColors = [
    "green",
    "yellow",
    "blue",
    "purple",
    "red",
    "white",
    "brown",
    "grey"
]

green.addEventListener("click", () => {
    document.body.style.backgroundColor = "green"
})

yellow.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow"
})

blue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue"
})

random1.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColors(setColors)
})

random2.addEventListener("click", () => {
    document.body.style.backgroundColor = randomBg()
})



function randomColors(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function randomBg() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
