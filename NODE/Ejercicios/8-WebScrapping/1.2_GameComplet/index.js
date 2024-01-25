import fs from "fs";
import inquirer from "inquirer";
import puppeteer from "puppeteer";

const scrapping = async (keyWord) => {
  const BASE_URL = "https://www.game.es/";

  // Creamos el navegador
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  // vamos a abrir una nueva página

  const page = await browser.newPage();

  // Una vez una abierto el navegador vamos a la URL

  await page.goto(BASE_URL);

  // Esperamos 6 segundos a que cargue la página
  await page.waitForTimeout(6000);


  await page.click("#searchinput"); // Clickamos en el input mediante su id

  // Le damos indicaciones de lo que tiene que hacer

  await page.type("#searchinput", keyWord);

  // Una vez introducida la palabra pulsamos enter

  await page.keyboard.press("Enter");

  // Vamos a esperar a que carguen los datos

  await page.waitForTimeout(6000);

  // Vamos a hacer scroll varias veces para coger más datos

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  await page.waitForTimeout(6000);

  // Vamos a decirle que espere a que tenga caragdos unos items de la página

  await page.waitForTimeout(".search-item");



  const gameProduct = await page.$$eval("div.search-item", (nodos) =>
    nodos.map((nodo) => ({
      title: nodo.querySelector("a.cm-txt")?.innerText,
      image: nodo.querySelector(".img-responsive")?.src,
      price: nodo.querySelector("div.buy--price")?.innerText,
    }))
  );

  // Borramos el ultimo elemento del objeto

  gameProduct.pop();

  console.log("elementos", gameProduct);

  // Convertimos los datos a typo string

  const dataString = JSON.stringify(gameProduct);

  fs.writeFile(
    `${keyWord.replace(" ", "").toLowerCase()}.json`,
    dataString,
    () => console.log("Archivo creado")
  );

  await browser.close();
};

inquirer
  .prompt([
    {
      name: "busqueda",
      message: "Que quieres buscar?",
    },
  ])
  .then((answer) => {
    console.log(answer);
    let kewWord = answer.busqueda;
    scrapping(kewWord);
  });
