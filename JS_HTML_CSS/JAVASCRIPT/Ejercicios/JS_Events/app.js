//?- 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//?- evento click que ejecute un console log con la información del evento del click

const button = document.getElementById("btnToClick");
button.addEventListener("click", function(event) {
    console.log("informacion de click", event);
});


//?- 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusin = document.querySelector(".focus");
focusin.addEventListener("focus", function(event) {
    const inputFocus = focusin.value;
    console.log(inputFocus);
});


//?- 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValor = document.querySelector(".value");
inputValor.addEventListener("input", function(event) {
    const valorInput = inputValor.value;
    console.log("Valor del input:", valorInput);
});
