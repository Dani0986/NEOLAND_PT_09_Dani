export { template } from "../../pages/tresRaya/tresEnRaya";

export const init = () => {
    
    let turno = 0;
    const tablero = [];
    
const btnPulsado = (e, pos) => {
    turno ++;
    const div = e.target;
    const characters = turno % 2 ? 'Charizard' : 'Blastoise'; 
    const imagen = `../../../public/img/${characters}.JPG`; 
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

};