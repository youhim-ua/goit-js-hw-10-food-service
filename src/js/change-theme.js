const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const bodyRef = document.querySelector("body");
const themeToggleRef = document.getElementById("theme-switch-toggle");

themeToggleRef.addEventListener("change", themeToggleHandler);

loadTheme();

function themeToggleHandler() {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
    saveThemeInLS();
}

function saveThemeInLS() {
    if (bodyRef.classList.contains(Theme.LIGHT)) { 
        localStorage.setItem("theme", Theme.LIGHT);
    } else if (bodyRef.classList.contains(Theme.DARK)) { 
        localStorage.setItem("theme", Theme.DARK);
    }
}

function loadTheme() {
    if (localStorage.getItem("theme") === Theme.DARK) {
        themeToggleRef.setAttribute("checked", "true");
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    } else if (localStorage.getItem("theme") === Theme.LIGHT) {
        themeToggleRef.removeAttribute("checked");
        bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    };
}
