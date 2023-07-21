const MenuCard = (parent, title, description, price, img, caption) => {
    const section = document.createElement("section");
    
    section.classList.add("card-container");

    addTitle(section, title);
    addWrapper(section, img, caption, description, price);

    parent.appendChild(section);
}

function addTitle(parent, title) {
    const header = document.createElement("header");
    header.textContent = title;
    
    parent.appendChild(header);
}

function addWrapper(parent, img, caption, description, price) {
    const wrapper = document.createElement("div");
    
    wrapper.appendChild(addImage(img, caption));
    wrapper.appendChild(addDescription(description, price));
    wrapper.classList.add("card-wrap");
    
    parent.appendChild(wrapper);
}

function addImage(img, caption) {
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

function addDescription(description, price) {
    const div = document.createElement("div")
    const para = document.createElement("p");
    const para2 = document.createElement("p");

    para.textContent = description;
    para2.textContent = `$ ${price}`;
    
    div.classList.add("description");
    div.appendChild(para);
    div.appendChild(para2);

    return div;
}

export default MenuCard;