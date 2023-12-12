import "./Footer.css";
const template = `
<footer></footer>
`;

export const PrintFooter = () =>
  (document.querySelector("#app").innerHTML += template);
