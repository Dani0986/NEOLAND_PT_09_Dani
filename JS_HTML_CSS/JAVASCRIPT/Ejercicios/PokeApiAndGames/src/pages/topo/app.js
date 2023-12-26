import "./style.css"


const template = () =>  `
    <section id="encuadrar">
        <div id="customCursor"></div>    
        <h1 id="topo">Dale al Topo</h1>
        <h2 id="punto">puntuacion:</h2>
        <h2 id="puntuacion">0</h2>
        <div id="tiempo">tiempo restante:</div>
        <h2 id="time-left">5</h2>
        <div class="grid">
            <div class="square" id="1"></div>
            <div class="square mole" id="2"></div>
            <div class="square" id="3"></div>
            <div class="square" id="4"></div>
            <div class="square" id="5"></div>
            <div class="square" id="6"></div>
            <div class="square" id="7"></div>
            <div class="square" id="8"></div>
            <div class="square" id="9"></div>        
        </div>  
        <div>
            <div id="message-container"></div>
            <p id="final-score-container"></p>
            <button id="restart-button" style="display: none;">Volver a Jugar</button>
        </div>    
    </section>
`;

let gameOver = false;
let timerId = null;

const init = () => {
    const square = document.querySelectorAll('.square');
    const score = document.querySelector('#puntuacion');

    let results = 0;
    let currentTime = document.querySelector('#time-left').textContent;

    const randomSquare = () => {
        if (!gameOver) {
            square.forEach((className) => {
                className.classList.remove('mole');
            });
            let randomPosition = square[Math.floor(Math.random() * 9)];
            randomPosition.classList.add('mole');
        }
    }

    square.forEach(squareElement => {
        squareElement.addEventListener('click', () => {
            if (!gameOver && squareElement.classList.contains('mole')) {
                results = results + 1;
                score.textContent = results;
            }
        });
    });

    const moveMole = () => {
        timerId = setInterval(() => {
            randomSquare();
        }, 1000);
    }

    moveMole();

    const countdown = () => {
        if (!gameOver) {
            currentTime--;

            if (currentTime <= 0) {
                clearInterval(timerId);
                gameOver = true;
                endGame(results);
            }


            document.querySelector('#time-left').textContent = Math.max(currentTime, 0);
        }
    };

    timerId = setInterval(countdown, 1000);
};

const endGame = (results) => {
    // Ocultar el grid y otros elementos
    const grid = document.querySelector('.grid');
    grid.style.display = 'none'; // Ajusta según tu estructura HTML

    const topoElement = document.querySelector('#topo');
    const puntoElement = document.querySelector('#punto');
    const puntuacionElement = document.querySelector('#puntuacion');
    const tiempoElement = document.querySelector('#tiempo');
    const timeLeftElement = document.querySelector('#time-left');

    topoElement.style.display = 'none';
    puntoElement.style.display = 'none';
    puntuacionElement.style.display = 'none';
    tiempoElement.style.display = 'none';
    timeLeftElement.style.display = 'none';
    
    // Mostrar el contenido de endGame
    const messageContainer = document.querySelector('#message-container');
    const restartButton = document.querySelector('#restart-button');

    const gameOverMessage = document.createElement('h2');
    gameOverMessage.textContent = 'Game Over!';
    gameOverMessage.style.fontSize = '2rem';
    gameOverMessage.id = 'game-over-message';

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = 'Tu Puntuacion es de: ' + results + ' puntos';
    scoreMessage.id = 'score-message';

    messageContainer.innerHTML = '';
    messageContainer.appendChild(gameOverMessage);
    messageContainer.appendChild(scoreMessage);

    restartButton.style.display = 'block';
    restartButton.addEventListener('click', restartGame);
};

const restartGame = () => {

        document.querySelector('main').innerHTML = template();
        gameOver = false; 
        clearInterval(timerId);
        init();       
    
};

export const prinTopo = () => {
    document.querySelector('main').innerHTML = template(); init();}