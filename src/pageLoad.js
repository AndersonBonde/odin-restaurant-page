import backgroundImage from "./images/coffee.jpg";

export default function pageLoad() {
    let content = document.querySelector(".content");

    loadBackground(content);
    loadContainer(content);
}

function loadBackground(parent) {
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.classList.add("background")

    parent.appendChild(bgImage);
}

function loadContainer(parent) {
    const container = document.createElement("div");
    container.classList.add("container");

    parent.appendChild(container);

    addTitle(container);
    addAboutUsSection(container);
    addOpenAtSection(container);
}

function addTitle(parent) {
    const title = document.createElement("h1");
    const icon = document.createElement("i");

    title.textContent = "Three Coffees Kiosk ";
    icon.classList.add("fa-solid", "fa-mug-saucer");

    title.appendChild(icon);
    parent.appendChild(title);
}

function addAboutUsSection(parent) {
    const section = document.createElement("section");
    const header = document.createElement("header");
    const para = document.createElement("p");

    header.textContent = "About Us";
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium soluta tempore est ipsum optio voluptas officiis perferendis magnam, voluptatibus veniam iusto? Natus, vitae doloremque mollitia accusantium neque officia aut molestias est earum.";

    section.appendChild(header);
    section.appendChild(para);
    parent.appendChild(section);
}

function addOpenAtSection(parent) {
    const section = document.createElement("section");
    const header = document.createElement("header");

    header.textContent = "Open At";

    section.appendChild(header);
    parent.appendChild(section);

    addOpenDays(section);
}

function addOpenDays(parent) {
    const ul = document.createElement("ul");
    const weekMap = new Map();

    weekMap
        .set("Monday", { day: "Monday", message: "Closed"})
        .set("Tuesday", { day: "Tuesday", message: "8am - 16pm"})
        .set("Wednesday", { day: "Wednesday", message: "8am - 16pm"})
        .set("Thursday", { day: "Thursday", message: "8am - 16pm"})
        .set("Friday", { day: "Friday", message: "8am - 16pm"})
        .set("Saturday", { day: "Saturday", message: "8am - 16pm"})
        .set("Sunday", { day: "Sunday", message: "8am - 16pm"});

    weekMap.forEach(curr => {
        const li = document.createElement("li");
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");

        para1.textContent = curr.day;
        para2.textContent = curr.message;
        
        li.appendChild(para1);
        li.appendChild(para2);

        ul.appendChild(li);
    });

    parent.appendChild(ul);
}