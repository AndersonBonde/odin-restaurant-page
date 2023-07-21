import "./style.css";
import pageLoad from "./pageLoad.js";
import menuLoad from "./menuLoad.js";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

const homeLink = document.querySelector("#home-link");
const menuLink = document.querySelector("#menu-link");

homeLink.addEventListener("click", loadHomePage);
menuLink.addEventListener("click", loadMenuPage);

function loadHomePage() {
    unloadAll();
    pageLoad();
}
loadHomePage();

function loadMenuPage() {
    unloadAll();
    menuLoad();    
}

function unloadAll() {
    const content = document.querySelector(".content");
    content.innerHTML = "";    
}
