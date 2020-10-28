import { LEVEL, OBJECT_TYPE } from './setup';
import { randomMovement } from './ghostMoves';
// Classes
import GameBoard from './GameBoard';
import Ghost from './Ghost';
import Pacman from './Pacman';

const gameGrid = document.querySelector('#game');
const scoreBox = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

// game constant variables
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// initial setup
let score = 0;
let timer = null;
let winGame = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {

}

function checkCollision(pacman, grid) {

}

function gameLoop(pacman, ghosts) {
gameBoard.moveCharacter(pacman);
}

function startGame() {
    winGame = false;
    powerPillActive = false;
    score = 0;

    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

    const pacman = new Pacman(2, 287);
    gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
    document.addEventListener('keydown', (event) => 
    pacman.handleKeyInput(event, gameBoard.objectExists));
    
    const ghosts = [
        new Ghost(4, 204, randomMovement, OBJECT_TYPE.BLINKY),
        new Ghost(5, 188, randomMovement, OBJECT_TYPE.PINKY),
        new Ghost(2, 240, randomMovement, OBJECT_TYPE.INKY),
        new Ghost(3, 251, randomMovement, OBJECT_TYPE.CLYDE)
    ];

    timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);
}


// initialize game
startButton.addEventListener('click', startGame);