import "./style.css"
import { init } from "../../utils/Topo/FuncionDeTopo";

export const template = () =>  `
    <section id="encuadrar">
        <div id="customCursor"></div>    
        <h1 id="topo">WACKA-DIGLETT</h1>
        <p id="descripcion">Captura a muchos Digletts antes de que se agote el tiempo</p>
        <div id="contenedorFlex">
        <h2 id="punto">Puntuación:</h2>
        <h2 id="puntuacion">0</h2>
        </div>
        <div id="tiempo">Tiempo restante:</div>
        <h2 id="time-left">10</h2>
        <button id="iniciar">Iniciar Juego</button> 
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
/*
let gameOver = false; //  variable para indicar que el juego termino
let timerId = 0; // identifica el temporizador del juego

const init = () => { // funcion principal
    const iniciarButton = document.querySelector('#iniciar'); //obetner boton inicial
    iniciarButton.addEventListener('click', () => { // agregar el evento click
    const square = document.querySelectorAll('.square'); //agregar las casillas del juego square y puntos
    const score = document.querySelector('#puntuacion');
 
    let results = 0;  // Inicializar variables del juego
    let currentTime = document.querySelector('#time-left').textContent;

    const randomSquare = () => { // Función que coloca el Diglett en una casilla aleatoria
        if (!gameOver) { // aqui negamos el valor, asi que solo se ejecuta si el juego no a terminado
            square.forEach((className) => { // Ocultar Diglett en todas las casillas
                className.classList.remove('mole');
            });
            let randomPosition = square[Math.floor(Math.random() * 9)];  // Seleccionar una casilla aleatoria y mostrar Diglett
            randomPosition.classList.add('mole');
        }
    }

    square.forEach(squareElement => {   // Agregar eventos de clic a las casillas
        squareElement.addEventListener('click', () => {  
            if (!gameOver && squareElement.classList.contains('mole')) { // Si no ha terminado el juego y se hizo clic en Diglett, aumentar la puntuación
                results = results + 1;
                score.textContent = results;
            }
        });
    });

    const moveMole = () => {  // Función que mueve al Diglett a una casilla aleatoria a intervalos regulares
        timerId = setInterval(() => {
            randomSquare();
        }, 700);
    }

    moveMole(); // Iniciar movimiento del Diglett

    const countdown = () => {      // Función que realiza la cuenta regresiva del tiempo
        if (!gameOver) {  // si el juego a finalizado no hace mas opreciones de de cuenta hacia atras
            currentTime --;   // Reducir el tiempo
            const timeLeftElement = document.querySelector('#time-left'); // Obtener el elemento de tiempo restante y actualizar el contenido
            console.log(timeLeftElement); 
            timeLeftElement.textContent = Math.max(currentTime, 0);
            if (currentTime <= 0) {  // Si se agota el tiempo, finalizar el juego
                gameOver = true;
                endGame(results); // muestra el endgame al finalizar
            }
        }
    };

    timerId = setInterval(countdown, 1000);  // Iniciar temporizador de la cuenta regresiva
});

const endGame = (results) => { // Función que se ejecuta al finalizar el juego
    // Ocultar el grid y otros elementos
    const grid = document.querySelector('.grid');
    grid.style.display = 'none'; // Ajusta según tu estructura HTML

    const topoElement = document.querySelector('#topo');     // apunta a los elementos del juego
    const descripcionElement = document.querySelector('#descripcion')
    const puntoElement = document.querySelector('#punto');
    const puntuacionElement = document.querySelector('#puntuacion');
    const tiempoElement = document.querySelector('#tiempo');
    const timeLeftElement = document.querySelector('#time-left');
    const botonInicioElement = document.querySelector('#iniciar');

    topoElement.style.display = 'none';     // Ocultar otros elementos del juego
    descripcionElement.style.display = 'none'
    puntoElement.style.display = 'none';
    puntuacionElement.style.display = 'none';
    tiempoElement.style.display = 'none';
    timeLeftElement.style.display = 'none';
    botonInicioElement.style.display = 'none';

    const messageContainer = document.querySelector('#message-container');  // Mostrar el contenido del final del juego
    const restartButton = document.querySelector('#restart-button');

    const gameOverMessage = document.createElement('h2');
    gameOverMessage.textContent = 'Game Over!';
    gameOverMessage.style.fontSize = '2rem';
    gameOverMessage.id = 'game-over-message';

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = 'Has capturado: ' + results + ' Digletts';
    scoreMessage.id = 'score-message';
    scoreMessage.style.color = 'red';

    messageContainer.innerHTML = '';
    messageContainer.appendChild(gameOverMessage);
    messageContainer.appendChild(scoreMessage);

    restartButton.style.display = 'block';
    restartButton.addEventListener('click', restartGame);
    iniciarButton.disabled = false; // Habilitar el botón de iniciar después de finalizar el juego
};
};
const restartGame = () => { // Función que reinicia el juego
        document.querySelector('main').innerHTML = template(); // Restablecer el contenido principal con el template del juego
        gameOver = false;  // Restablecer variables del juego
        clearInterval(timerId);
        init();     // Volver a iniciar el juego      
};
*/
export const prinTopo = () => { // Función que inicializa el juego al cargar la página
    document.querySelector("#buttonDashboard").style.display = "block";
    document.querySelector('main').innerHTML = template(); // Establecer el contenido principal con el template del jueg
    init();  // Iniciar el juego
};