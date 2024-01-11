import "./Footer.css";
const template = `
<footer>Primer proyecto de crear una api con vite</footer>
`;

export const PrintFooter = () =>
  (document.querySelector("#app").innerHTML += template);
