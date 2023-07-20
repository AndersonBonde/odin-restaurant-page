import backgroundImage from "./images/coffee.jpg";
import iceCoffee from "./images/iceCoffee.jpg";
import capuchino from "./images/capuchino.jpg";
import blackCoffee from "./images/blackCoffee.jpg";
import MenuCard from "./menuCard.js";

export default function menuLoad() {
    let content = document.querySelector(".content");

    loadBackground(content);
    loadContainer(content);
}

function loadBackground(parent) {
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.classList.add("background");
    bgImage.style.cssText = "transform: scaleX(-1);";

    parent.appendChild(bgImage);
}

function loadContainer(parent) {
    const container = document.createElement("div");
    container.classList.add("container");

    parent.appendChild(container);

    addTitle(container);
    MenuCard(container, "Ice Coffee", "A cold beverage to make the hottest days tolerable.", iceCoffee, 'Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/ice-coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>');
}

function addTitle(parent) {
    const title = document.createElement("h1");
    const icon = document.createElement("i");

    title.textContent = "Menu ";
    icon.classList.add("fa-solid", "fa-mug-saucer");

    title.appendChild(icon);
    parent.appendChild(title);
}

