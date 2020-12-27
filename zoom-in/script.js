const container = document.querySelector("div");
const image = document.querySelector("img");


container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y)

    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(2)";
})

container.addEventListener("mouseleave", () => {
    image.style.transformOrigin = "center center";
    image.style.transform = "scale(1)";
})