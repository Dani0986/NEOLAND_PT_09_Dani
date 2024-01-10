

export const endGame = (results) => { // Función que se ejecuta al finalizar el juego
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