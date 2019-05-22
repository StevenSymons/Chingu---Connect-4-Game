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

const player1 = false;
const player2 = true;

function init() {
  const gameboard = document.getElementById("gameboard");

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
      // checkWhosPlaying(board[rowIndex][i], divFields[i]);

      //In andere functie zetten dat checkt of het speler 1 of 2 is?
      //if(player === player1){value = 1 & geel} else {value = 2 & rood}
      board[rowIndex][i] = 1;
      divFields[i].value = 1;
      divFields[i].classList.add("field__insert-coin-1");
      break;
    }
    i++;
  }
}

// function changePlayer(player) {}

// function checkWhosPlaying(boardValue, field) {
//   if (player1) {
//     boardValue = 1;
//     field.value = 1;
//     field.classList.add("field__insert-coin-1");
//     // changePlayer()
//   } else {
//     boardValue = 2;
//     field.value = 2;
//     field.classList.add("field__insert-coin-2");
//     // changePlayer()
//   }
// }
