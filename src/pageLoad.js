import backgroundImage from "./images/coffee.jpg";

export default function pageLoad() {
    let content = document.querySelector(".content");

    loadBackground(content);
    loadContainer(content);
}

function loadBackground(target) {
    const bgImage = new Image();
    bgImage.src = backgroundImage;
    bgImage.classList.add("background")

    target.appendChild(bgImage);
}

function loadContainer(target) {
    const container = document.createElement("div");
    container.classList.add("container");

    target.appendChild(container);

    addTitle(container);
    addAboutUsSection(container);
    addOpenAtSection(container);
}

function addTitle(target) {
    const title = document.createElement("h1");
    const icon = document.createElement("i");

    title.textContent = "Three Coffees Kiosk ";
    icon.classList.add("fa-solid", "fa-mug-saucer");

    title.appendChild(icon);
    target.appendChild(title);
}

function addAboutUsSection(target) {
    const section = document.createElement("section");
    const header = document.createElement("header");
    const para = document.createElement("p");

    header.textContent = "About Us";
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium soluta tempore est ipsum optio voluptas officiis perferendis magnam, voluptatibus veniam iusto? Natus, vitae doloremque mollitia accusantium neque officia aut molestias est earum.";

    section.appendChild(header);
    section.appendChild(para);
    target.appendChild(section);
}

function addOpenAtSection(target) {
    const section = document.createElement("section");
    const header = document.createElement("header");

    header.textContent = "Open At";

    section.appendChild(header);
    target.appendChild(section);

    addOpenDays(section);
}

function addOpenDays(target) {
    const ul = document.createElement("ul");
    const weekObj = {
        day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        message: ["Closed", "8am - 16pm", "8am - 16pm", "8am - 16pm", "8am - 16pm", "8am - 16pm", "8am - 16pm"],
    }

    weekObj.day.forEach((_, index) => {
        const li = document.createElement("li");
        li.textContent = weekObj.day[index] + ": " + weekObj.message[index];

        ul.appendChild(li);
    });

    target.appendChild(ul);
}