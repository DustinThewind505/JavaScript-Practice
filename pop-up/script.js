const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const popUpContainer = document.getElementById("container");



openButton.addEventListener("click", () => {
    popUpContainer.classList.add("active")
})

closeButton.addEventListener("click", () => {
    popUpContainer.classList.remove("active")
})