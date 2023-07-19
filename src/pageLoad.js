import backgroundImage from "./images/coffee.jpg";

export default function pageLoad() {
    let content = document.querySelector(".content");

    loadBackground(content);
}

function loadBackground(target) {
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.classList.add("background")

    target.appendChild(bgImage);
}