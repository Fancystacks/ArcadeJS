import { LEVEL, OBJECT_TYPE } from './setup';
import GameBoard from './GameBoard';
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

}

function startGame() {

}