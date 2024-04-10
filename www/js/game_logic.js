function checkGameStatus() {
    const winner = checkWinning(gameState);

    if (winner === 'X' || winner === 'O') {
        // Show alert indicating the winner
        messageElement.innerText = `${winner} wins!`;

        // Reset the game after a brief delay
        setTimeout(() => {
            resetGame();
        }, 2000); // Adjust the delay as needed (in milliseconds)
    } else if (winner === 'tie') {
        // Show alert indicating a tie
        messageElement.innerText = "It's a tie!";

        // Reset the game after a brief delay
        setTimeout(() => {
            resetGame();
        }, 2000); // Adjust the delay as needed (in milliseconds)
    }
}


// let currentPlayer = 'X';
// let gameActive = true;
// let gameState = ['', '', '', '', '', '', '', '', ''];
// let scoreX = 0;
// let scoreO = 0;
// let winningCombination = null;
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
// const scoreElementX = document.getElementById('score-x');
// const scoreElementO = document.getElementById('score-o');
// const winningLine = document.getElementById('winning-line');
// const levelDropdown = document.getElementById('level');
// const singlePlayerCheckbox = document.getElementById('singlePlayerCheckbox');
// const resetBtn = document.getElementById('resetBtn');
// const cells = document.querySelectorAll('.cell');

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
//         document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
//         if (checkWin()) {
//             messageElement.innerText = `${currentPlayer} wins!`;
//             gameActive = false;
//             updateScore();
//             displayWinningLine();
//         } else if (!gameState.includes('')) {
//             messageElement.innerText = "It's a tie!";
//             gameActive = false;
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//             messageElement.innerText = `${currentPlayer}'s turn`;
//             if (singlePlayerCheckbox.checked && currentPlayer === 'O') {
//                 makeCPUMove();
//             }
//         }
//     }
// }


// function checkWin() {
//     for (let condition of winningConditions) {
//         const [a, b, c] = condition;
//         if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
//             winningCombination = condition;
//             return true;
//         }
//     }
//     return false;
// }

// function updateScore() {
//     if (currentPlayer === 'X') {
//         scoreX++;
//         scoreElementX.innerText = scoreX;
//     } else {
//         scoreO++;
//         scoreElementO.innerText = scoreO;
//     }
// }

// function displayWinningLine() {
//     if (winningCombination) {
//         const [a, b, c] = winningCombination;
//         const cells = document.getElementsByClassName('cell');
//         const lineCoords = [
//             cells[a].getBoundingClientRect(),
//             cells[c].getBoundingClientRect()
//         ];
//         const [x1, y1] = [lineCoords[0].left + lineCoords[0].width / 2, lineCoords[0].top + lineCoords[0].height / 2];
//         const [x2, y2] = [lineCoords[1].left + lineCoords[1].width / 2, lineCoords[1].top + lineCoords[1].height / 2];
//         const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
//         const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//         winningLine.style.width = `${length}px`;
//         winningLine.style.transform = `translate(${x1}px, ${y1}px) rotate(${angle}deg)`;
//         winningLine.classList.add('active');
//     }
// }

// function resetGame() {
//     currentPlayer = 'X';
//     gameActive = true;
//     gameState = ['', '', '', '', '', '', '', '', ''];
//     cells.forEach(cell => cell.innerText = '');
//     messageElement.innerText = `${currentPlayer}'s turn`;
// }

// function makeCPUMove() {
//     const level = levelDropdown.value;
//     if (level === 'easy') {
//         // Pick a random empty cell
//         const emptyCells = gameState.map((cell, index) => cell === '' ? index : -1).filter(index => index !== -1);
//         const randomIndex = Math.floor(Math.random() * emptyCells.length);
//         const randomCell = emptyCells[randomIndex];
//         gameState[randomCell] = 'O';
//         cells[randomCell].innerText = 'O';
//     } else if (level === 'hard') {
//         // Check if the user has made a mistake
//         const userMove = gameState.indexOf(currentPlayer);
//         const opponentMove = gameState.indexOf('O');
//         if (userMove !== -1 && opponentMove !== -1 &&
//             winningConditions.some(combination => combination.includes(userMove) && combination.includes(opponentMove))) {
//             const combination = winningConditions.find(combination => combination.includes(userMove) && combination.includes(opponentMove));
//             const [a, b, c] = combination.filter(index => index !== userMove && index !== opponentMove);
//             gameState[a] = 'O';
//             cells[a].innerText = 'O';
//         } else {
//             // Block the user from winning
//             for (let i = 0; i < winningConditions.length; i++) {
//                 const [a, b, c] = winningConditions[i];
//                 if (gameState[a] === 'X' && gameState[b] === 'X' && gameState[c] === '') {
//                     gameState[c] = 'O';
//                     cells[c].innerText = 'O';
//                     return;
//                 } else if (gameState[a] === 'X' && gameState[c] === 'X' && gameState[b] === '') {
//                     gameState[b] = 'O';
//                     cells[b].innerText = 'O';
//                     return;
//                 } else if (gameState[b] === 'X' && gameState[c] === 'X' && gameState[a] === '') {
//                     gameState[a] = 'O';
//                     cells[a].innerText = 'O';
//                     return;
//                 }
//             }
//             // If no winning move or blocking move, pick a random empty cell
//             const emptyCells = gameState.map((cell, index) => cell === '' ? index : -1).filter(index => index !== -1);
//             const randomIndex = Math.floor(Math.random() * emptyCells.length);
//             const randomCell = emptyCells[randomIndex];
//             gameState[randomCell] = 'O';
//             cells[randomCell].innerText = 'O';
//         }
//     }
// }
