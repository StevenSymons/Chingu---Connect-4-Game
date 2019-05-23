let player1;
let player2;
const board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

document.addEventListener("DOMContentLoaded", init);

// Initialize the game

function init() {
  const gameboard = document.getElementById("gameboard");
  document.querySelector("button").addEventListener("click", reset);
  player1 = true;
  player2 = false;

  for (let i = 0; i < board.length; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    gameboard.appendChild(columnDiv);

    for (let j = board[i].length - 1; j >= 0; j--) {
      const fieldDiv = document.createElement("div");
      fieldDiv.classList.add("field");
      fieldDiv.value = 0;
      fieldDiv.addEventListener("click", e => enterCoin(e.target, i, j));
      columnDiv.appendChild(fieldDiv);
    }
  }
}

// Retrieving all fields/nodes from a column

function getAllFields() {
  const className = Array.from(document.getElementsByClassName("field"));
  for (let i = 0; i < className.length; i++) {
    if (className[i].value === 0) {
      console.log(className[i]);

      className[i].classList.add("field__insert-coin-finish");
    }
  }
}

function getFields(columnIndex) {
  const className = Array.from(document.getElementsByClassName("column"))[
    columnIndex
  ];
  const divFields = Array.from(className.children).reverse();
  return divFields;
}

// Enter a coin into the gameboard

function enterCoin(node, columnIndex, fieldIndex) {
  let i = 0;
  while (board[columnIndex][i] < 6) {
    if (board[columnIndex][i] === 0) {
      const divFields = getFields(columnIndex);
      const { value, className } = checkWhosPlaying();
      // setting the board value
      board[columnIndex][i] = value;
      // setting the value of the field/node itself
      divFields[i].value = value;
      // adding class to the field/node
      divFields[i].classList.add(className);
      changePlayer();
      checkForWinner();
      break;
    }
    i++;
  }
}

// Change player

function changePlayer() {
  const p = document.querySelector("p");

  if (player1) {
    player1 = false;
    player2 = true;
    p.textContent = "Player 2, please select a coin spot";
  } else {
    player1 = true;
    player2 = false;
    p.textContent = "Player 1, please select a coin spot";
  }
}

// Check who is currently play to get the appropriate value & class for the clicked field

function checkWhosPlaying() {
  if (player1) {
    return {
      value: 1,
      className: "field__insert-coin-1"
    };
  } else {
    return {
      value: 2,
      className: "field__insert-coin-2"
    };
  }
}

// Checking to see if there is a winner (vertical, horizontal, diagonal)

function checkForWinner() {
  const p = document.querySelector("p");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        if (
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i][j + 2] &&
          board[i][j] === board[i][j + 3]
        ) {
          p.textContent = "We have a winner!";
          getAllFields();
          return;
        }
        if (i + 3 < 7) {
          if (
            board[i][j] === board[i + 1][j] &&
            board[i][j] === board[i + 2][j] &&
            board[i][j] === board[i + 3][j]
          ) {
            p.textContent = "We have a winner!";
            getAllFields();
            return;
          } else if (
            board[i][j] === board[i + 1][j + 1] &&
            board[i][j] === board[i + 2][j + 2] &&
            board[i][j] === board[i + 3][j + 3]
          ) {
            p.textContent = "We have a winner!";
            getAllFields();
            return;
          }
          if (i - 3 >= 0) {
            if (
              board[i][j] === board[i - 1][j + 1] &&
              board[i][j] === board[i - 2][j + 2] &&
              board[i][j] === board[i - 3][j + 3]
            ) {
              p.textContent = "We have a winner!";
              getAllFields();
              return;
            }
          }
        }
      }
    }
  }
}

// Reset the game

function reset() {
  window.location.reload();
}

function endGame() {}
