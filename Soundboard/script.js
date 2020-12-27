const sounds = ["seinfeld", "pikachu", "final-fantasy-victory"];

const soundsContainer = document.querySelector("section");


sounds.forEach((sound) => {
    const soundButton = document.createElement("button");

    soundButton.classList.add(sound)

    soundsContainer.appendChild(soundButton)

    soundButton.addEventListener("click", () => {
        document.getElementById(sound).play()
    })
})