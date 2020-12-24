const topPhrase = document.querySelector(".top-text");

const bottomPhrase = document.querySelector(".bottom-text");


// ========== TOP AUTOWRITE TEXT ==========
const topText = "Hi! My name is Dustin ";

let topIndex = 0;

function writeTopText() {
    
    
    topPhrase.innerText = topText.slice(0, topIndex);

    topIndex++

    if (topIndex > topText.length) {
        topIndex = 0
    }

}

setInterval(writeTopText, 150)


// ========== BOTTOM AUTOWRITE TEXT ==========
const bottomText = "I'm a software developer ";

let bottomIndex = 0;

function writeBottomText() {
    
    
    bottomPhrase.innerText = bottomText.slice(0, bottomIndex);

    bottomIndex++

    if (bottomIndex > bottomText.length) {
        bottomIndex = 0
    }

}

setInterval(writeBottomText, 150)