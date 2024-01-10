
export const endgame = (results) => {
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