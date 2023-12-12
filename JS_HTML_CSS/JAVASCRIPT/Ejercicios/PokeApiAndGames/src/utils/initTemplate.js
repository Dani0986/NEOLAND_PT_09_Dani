
export const initTemplate = () => {
    const app = document.getElementById("#app");

    const header = document.createElement("header");
    const main = document.getElementById("main");
    const footer = document.createElement("footer");

    app.append(header, main, footer);
};