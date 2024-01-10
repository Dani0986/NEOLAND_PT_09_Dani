export const guionesHangman = (array) => {
    array.forEach((element) => {
        let p = document.createElement("p");
        p.setAttribute("class", "hangmanP");
        p.setAttribute("id", `${element}`);
        const guionesDiv = document.querySelector(".guiones");
        guionesDiv.appendChild(p);
    });
};
