import backgroundImage from "./images/coffee.jpg";
import iceCoffee from "./images/iceCoffee.jpg";
import capuccino from "./images/capuchino.jpg";
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
    icedCoffeeCard(container);
    capuccinoCard(container);
    blackCoffeeCard(container);
}

function addTitle(parent) {
    const title = document.createElement("h1");
    const icon = document.createElement("i");

    title.textContent = "Menu ";
    icon.classList.add("fa-solid", "fa-mug-saucer");

    title.appendChild(icon);
    parent.appendChild(title);
}

const icedCoffeeCard = (container) => {
    MenuCard(container, "Iced Coffee", "A cold beverage to make the hottest days tolerable.", 4, iceCoffee, 'Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/ice-coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>');
};

const capuccinoCard = (container) => {
    MenuCard(container, "Capuccino", "Hot capuccino to give your mornings more energy.", "3.50", capuccino, 'Photo by <a href="https://unsplash.com/@kgadia87?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristian Angelo</a> on <a href="https://unsplash.com/s/photos/capuccino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>');
};

const blackCoffeeCard = (container) => {
    MenuCard(container, "Black Coffee", "Pure black coffee to warm your day.", "2.50", blackCoffee, 'Photo by <a href="https://unsplash.com/@alecros?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alessandro Crosato</a> on <a href="https://unsplash.com/s/photos/espresso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>');
}