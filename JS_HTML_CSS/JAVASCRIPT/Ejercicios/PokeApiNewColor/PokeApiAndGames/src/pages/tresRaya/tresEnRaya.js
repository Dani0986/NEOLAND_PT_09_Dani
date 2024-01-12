import "./tresEnRaya.css";
import { init } from "../../utils/TresRaya/FuncionTresRaya";

export const template = () => `
<h1 id="ticTac">POKE - TIC TAC TOE</1>
<h2 id="descripcion">Consigue ser el primero en colocar tres imágenes en línea</h2>
<div class="containerButton">
    <div class="buttonsSquare" id="1"></div>
    <div class="buttonsSquare" id="2"></div>
    <div class="buttonsSquare" id="3"></div>
    <div class="buttonsSquare" id="4"></div>
    <div class="buttonsSquare" id="5"></div>
    <div class="buttonsSquare" id="6"></div>
    <div class="buttonsSquare" id="7"></div>
    <div class="buttonsSquare" id="8"></div>
    <div class="buttonsSquare" id="9"></div>
</div>
    <div>
        <div id="message-container"></div>
        <p id="winner-container"></p>
        <button id="button-restart" style="display: none;">Volver a Jugar</button>
        </div>    
    `;
/*
const init = () => {
    
    let turno = 0;
    const tablero = [];
    
const btnPulsado = (e, pos) => {
    turno ++;
    const div = e.target;
    const characters = turno % 2 ? 'Charizard' : 'Blastoise'; 
    const imagen = `public/img/${characters}.JPG`; 
    div.style.backgroundImage = `url(${imagen})`;
    tablero[pos] = characters;
    if (haGanado()) {
        endgame({ winner: characters });
    } else if (turno === 9) {
        // Si el tablero está lleno y no hay ganador, es un empate
        endgame({ winner: 'Empate' });
    }
};

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

    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    }
    return false;
};


document.querySelectorAll('.buttonsSquare').forEach((div, i) => div.addEventListener('click', (e) => btnPulsado(e, i)));

};

const endgame = (results) => {
    const TicTacToeElement = document.querySelector('#ticTac');
    const descripcionToeElement = document.querySelector('#descripcion');
    const containerButton = document.querySelector('.containerButton');
    
    TicTacToeElement.style.display = 'none';
    descripcionToeElement.style.display = 'none'
    containerButton.style.display = 'none';  

    const restartButton = document.querySelector('#button-restart');

    const messageContainer = document.querySelector('#message-container');
    const finalScoreContainer = document.querySelector('#winner-container');

    const gameOverMessage = document.createElement('h2');
    gameOverMessage.textContent = 'Game Over!';
    gameOverMessage.style.fontSize = '2rem';
    gameOverMessage.id = 'game-over-message';

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = 'Winner is: ' + results.winner;
    scoreMessage.style.color = 'red';

    if (results.winner === 'Empate') {
        scoreMessage.textContent = '¡Empate!';
    } else {
        scoreMessage.textContent = `Ganador: Team ${results.winner}`;
    }

    finalScoreContainer.appendChild(gameOverMessage);
    finalScoreContainer.appendChild(scoreMessage);

    restartButton.style.display = 'block';
    restartButton.addEventListener('click', restart);
};


const restart = () => {
    document.querySelector('main').innerHTML = template();
    init();

};*/
export const printTresEnRaya = () => { // Función que inicializa el juego al cargar la página
    console.log("Iniciando juego Tres en Raya");
    document.querySelector("#buttonDashboard").style.display = "block";
    document.querySelector('main').innerHTML = template(); // Establecer el contenido principal con el template del jueg
    init();  // Iniciar el juego
    console.log(document.querySelector('main').innerHTML);
};