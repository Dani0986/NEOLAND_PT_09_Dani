import "./Footer.css";

const template = () => `
<footer id="neoFooter">
  <h3><span>Proyecto para</span> Neoland</h3>
  <Div id="hrefs">
   <a href="https://neoland.es/">
   <img id="logoNeo" src="./../../public/img/n2.png" alt="Neoland">
   </a>
  </div>
</footer>
`;


export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};

export const hello = () => console.log("hello");


