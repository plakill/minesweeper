const gameContainer = document.querySelector("div.game-container");
const height = 20;
const width = 21;
const pixelSize = 25;
gameContainer.style.width = width * pixelSize + "px";
gameContainer.style.height = height * pixelSize + "px";

for (let i = 0; i < height*width; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.width = pixelSize + "px";
    pixel.style.height = pixelSize + "px";
    (i % 2 == 1) ? pixel.style.backgroundColor = "green"
    : pixel.style.backgroundColor = "lightgreen";
    gameContainer.appendChild(pixel);
}

let bombs = 32;
const pixels = document.querySelectorAll("div.pixel");
pixels.forEach((pixel) => {
    if (Math.random() < 0.078 && bombs > 0) {
        pixel.classList.add("bomb");
        pixel.style.background = "linear-gradient(45deg, black, red)";
        bombs -= 1;
    }
});
bombs = 32 - bombs;

for (let i = 0; i < height*width; i++) {
    let bombNeighbours = 0;
    if (!pixels[i].classList.contains("bomb")) {

    }
}
