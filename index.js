let board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

document.addEventListener("DOMContentLoaded", init);

let player1;
let player2;

function reset() {
  window.location.reload();
}

function init() {
  const gameboard = document.getElementById("gameboard");
  document.querySelector("button").addEventListener("click", reset);
  player1 = true;
  player2 = false;

  for (let i = 0; i < board.length; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("column");
    gameboard.appendChild(rowDiv);

    for (let j = board[i].length - 1; j >= 0; j--) {
      const fieldDiv = document.createElement("div");
      fieldDiv.classList.add("field");
      fieldDiv.value = 0;
      fieldDiv.addEventListener("click", e => enterCoin(e.target, i, j));
      rowDiv.appendChild(fieldDiv);
    }
  }
}

function getFields(rowIndex) {
  const className = Array.from(document.getElementsByClassName("column"))[
    rowIndex
  ];
  const divFields = Array.from(className.children).reverse();
  return divFields;
}

function enterCoin(node, rowIndex, fieldIndex) {
  let i = 0;
  while (board[rowIndex][i] < 6) {
    if (board[rowIndex][i] === 0) {
      const divFields = getFields(rowIndex);
      const { value, className } = checkWhosPlaying();
      // setting the board value
      board[rowIndex][i] = value;
      // setting the value of the field itself
      divFields[i].value = value;
      // adding class to the field
      divFields[i].classList.add(className);
      changePlayer();
      break;
    }
    i++;
  }
}

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
