// let currentPlayer = 'X';
// let gameActive = true;
// let gameState = ['', '', '', '', '', '', '', '', ''];
// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// const messageElement = document.getElementById('message');
// const cells = document.querySelectorAll('.cell');
// const resetBtn = document.getElementById('resetBtn');
// // JavaScript
// document.getElementById('resetBtn').addEventListener('click', resetGame);


// cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         const cellIndex = parseInt(cell.dataset.index);
//         placeMark(cellIndex);
//     });
// });

// resetBtn.addEventListener('click', resetGame);

// function placeMark(cellIndex) {
//     if (gameState[cellIndex] === '' && gameActive) {
//         gameState[cellIndex] = currentPlayer;
//         cells[cellIndex].innerText = currentPlayer;
//         if (checkWin()) {
//             messageElement.innerText = `${currentPlayer} wins!`;
//             gameActive = false;
//         } else if (!gameState.includes('')) {
//             messageElement.innerText = "It's a tie!";
//             gameActive = false;
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//             messageElement.innerText = `${currentPlayer}'s turn`;
//         }
//     }
// }

// function checkWin() {
//     return winningConditions.some(condition => {
//         return condition.every(index => {
//             return gameState[index] === currentPlayer;
//         });
//     });
// }

// function resetGame() {
//     currentPlayer = 'X';
//     gameActive = true;
//     gameState = ['', '', '', '', '', '', '', '', ''];
//     cells.forEach(cell => cell.innerText = '');
//     messageElement.innerText = `${currentPlayer}'s turn`;
// }

// --------------------------------------------------------------------------------
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
let scoreX = 0;
let scoreO = 0;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageElement = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('resetBtn');
const scoreElementX = document.getElementById('score-x');
const scoreElementO = document.getElementById('score-o');

document.getElementById('resetBtn').addEventListener('click', resetGame);

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const cellIndex = parseInt(cell.dataset.index);
        placeMark(cellIndex);
    });
});

resetBtn.addEventListener('click', resetGame);

function placeMark(cellIndex) {
    if (gameState[cellIndex] === '' && gameActive) {
        gameState[cellIndex] = currentPlayer;
        cells[cellIndex].innerText = currentPlayer;
        if (checkWin()) {
            messageElement.innerText = `${currentPlayer} wins!`;
            gameActive = false;
            updateScore();
        } else if (!gameState.includes('')) {
            messageElement.innerText = "It's a tie!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageElement.innerText = `${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function updateScore() {
    if (currentPlayer === 'X') {
        scoreX++;
        scoreElementX.innerText = scoreX;
    } else {
        scoreO++;
        scoreElementO.innerText = scoreO;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.innerText = '');
    messageElement.innerText = `${currentPlayer}'s turn`;
}
//----------------------------------------------------

