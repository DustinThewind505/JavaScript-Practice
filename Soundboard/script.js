const sounds = ["seinfeld", "pikachu", "finalFantasyVictory"];

const soundsContainer = document.querySelector("section");


sounds.forEach((sound) => {
    const soundButton = document.createElement("button");

    soundButton.innerText = sound;

    soundsContainer.appendChild(soundButton)

    soundButton.addEventListener("click", () => {
        document.getElementById(sound).play()
    })
})