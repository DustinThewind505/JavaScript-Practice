function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s";

    emoji.innerText = "❄";

    document.body.appendChild(emoji);
}

setInterval(createEmoji, 300)






function createRain() {
    const rain = document.createElement("div");
    rain.classList.add("emoji");

    rain.innerText = "💧"

    rain.style.fontSize = "1.5rem"
    rain.style.right = Math.random() * 100 + "vw";

    document.body.appendChild(rain)
}

setInterval(createRain, 300)