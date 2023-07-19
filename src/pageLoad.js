import backgroundImage from "./images/coffee.jpg";

export default function pageLoad() {
    loadBackground();
}

function loadBackground() {
    let container = document.querySelector(".content");

    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.classList.add("background")

    container.appendChild(bgImage);
}