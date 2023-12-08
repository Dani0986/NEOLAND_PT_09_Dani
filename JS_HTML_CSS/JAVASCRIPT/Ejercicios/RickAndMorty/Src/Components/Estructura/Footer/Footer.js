import "./Footer.css";
const template = `
<footer>Cartoon Network Studios</footer>
`;

export const PrintFooter = () =>
  (document.querySelector("#app").innerHTML += template);
