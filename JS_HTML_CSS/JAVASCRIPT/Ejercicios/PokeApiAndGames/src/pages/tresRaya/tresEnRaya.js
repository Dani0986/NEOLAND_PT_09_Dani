import "./tresEnRaya.css";


const template = () => `
<div class="container">
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    </div>
    `;

const init = () => {
    
    let juegoGanado = false;
    let turno = 0;
    const tablero = [];
    
const btnPulsado = (e, pos) => {
    turno ++;
    const btn = e.target;
    const color = turno % 2 ? 'Salmon':'paleGreen';
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    if(haGanado())alert('enorabuena player' + color) 
    }

const haGanado = () => {
      // Verificar filas
      for (let i = 0; i < 3; i++) {
        if (tablero[i * 3] && tablero[i * 3] === tablero[i * 3 + 1] && tablero[i * 3] === tablero[i * 3 + 2]) {
            return true;
        }
    }

    // Verificar columnas
    for (let i = 0; i < 3; i++) {
        if (tablero[i] && tablero[i] === tablero[i + 3] && tablero[i] === tablero[i + 6]) {
            return true;
        }
    }

    
    
    if(tablero[0] == tablero [1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }  else if (tablero[3] == tablero [4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    }  else if (tablero[6] == tablero [7] && tablero[6] == tablero[8] && tablero[6]) {
        return true
    }  else if (tablero[0] == tablero [3] && tablero[0] == tablero[6] && tablero[0]) {
        return true
    }  else if (tablero[1] == tablero [4] && tablero[1] == tablero[7] && tablero[1]) {
        return true
    }   else if (tablero[2] == tablero [5] && tablero[2] == tablero[8] && tablero[2]) {
        return true
    }   else if (tablero[0] == tablero [4] && tablero[0] == tablero[8] && tablero[0]) {
        return true
    }   else if (tablero[2] == tablero [4] && tablero[2] == tablero[6] && tablero[2]) {
        return true
    }
    return false
}



document.querySelectorAll('button').forEach((obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)));

}

export const printTresEnRaya = () => { // Función que inicializa el juego al cargar la página
    console.log("Iniciando juego Tres en Raya");
    document.querySelector('main').innerHTML = template(); // Establecer el contenido principal con el template del jueg
    init();  // Iniciar el juego
};