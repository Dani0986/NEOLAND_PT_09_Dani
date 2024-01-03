import "./Footer.css";

const template = () => `
<footer id="neoFooter">
  <h3><span>Proyecto para</span> Neoland</h3>
</footer>
`;


export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};

export const hello = () => console.log("hello");
