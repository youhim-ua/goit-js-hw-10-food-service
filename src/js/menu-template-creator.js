import menuTemplates from "../templates/menu.hbs";
import menuJSON from "../json/menu.json";

const dishListRef = document.querySelector(".js-menu");

const menuMarkup = menuJSON.map(item => menuTemplates(item));

function creatorMenuMarkup(list) { 
    return list.forEach(element => {
        dishListRef.insertAdjacentHTML("beforeend", element);
    });
}

creatorMenuMarkup(menuMarkup);