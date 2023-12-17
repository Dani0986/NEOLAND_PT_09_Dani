import "./style.css"

const template = () =>  `
    <section id="encuadrar">
    <div id="customCursor"></div>    
    <h1 id="topo">Dale al Topo</h1>
    <h2 id="punto">puntuacion:</h2>
    <h2 id="puntuacion">0</h2>
    <div id="tiempo">tiempo restante:</div>
    <h2 id="time-left">60</h2> 
    <div class="grid">
        <div class="square" id="1"></div>
        <div class="square mole" id="2"></div>
        <div class="square" id="3"></div>
        <div class="square" id="4"></div>
        <div class="square" id="5"></div>
        <div class="square" id="6"></div>
        <div class="square" id="7"></div>
        <div class="square" id="1"></div>
        <div class="square" id="1"></div>        
    </div> 
    </section>    
`;


const init = () => {
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const tiempo = document.querySelector('#mole');
const score = document.querySelector('#puntuacion');


let results = 0;
let currentTime = document.querySelector('#time-left').textContent;
let hitPosicion = null;

function randomSquare() {
    square.forEach((className, index) => {
        className.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random() *9)];
    randomPosition.classList.add('mole');

    hitPosicion = randomPosition.id;
}

square.forEach(squareElement => {
    squareElement.addEventListener('mouseup', () => {
        const currentHitPosicion = hitPosicion;
        if (squareElement.id === hitPosicion) {
            results = results + 1;
            score.textContent = results;
        }
    });
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countdown() {
    currentTime--;
    document.querySelector('#time-left').textContent = currentTime;
    if(currentTime===0){
        clearInterval(timerId);
        alert('Game Over! your score: '+ results);

    }
}

let timerId = setInterval(countdown, 1000);


};

export const prinTopo = () => { document.querySelector('main').innerHTML = template(); init()};