import "./Footer.css";

const template = () => `
<h3 id="neoFooter"><span>Project for</span> Neoland</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};

export const hello = () => console.log("hello");