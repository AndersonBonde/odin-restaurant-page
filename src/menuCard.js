const MenuCard = (parent, title, description, img, caption) => {
    const section = document.createElement("section");
    const wrapper = document.createElement("div");

    section.classList.add("card-container");

    addTitle(section, title);

    wrapper.appendChild(addImage(section, img, caption));
    wrapper.appendChild(addDescription(section, description));
    wrapper.classList.add("card-wrap");

    section.appendChild(wrapper);
    parent.appendChild(section);
}

function addTitle(parent, title) {
    const header = document.createElement("header");
    header.textContent = title;

    parent.appendChild(header);
}

function addImage(parent, img, caption) {
    const figure = document.createElement("figure");
    const image = new Image();
    const figCaption = document.createElement("figcaption");

    image.src = img;
    image.classList.add("card-image");

    figCaption.innerHTML = caption;

    figure.appendChild(image);
    figure.appendChild(figCaption);

    return figure;
}

function addDescription(parent, description) {
    const para = document.createElement("p");
    para.textContent = description;

    return para;
}

export default MenuCard;