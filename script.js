const selecBox = document.querySelector(".select-box"),
  selectXBtn = selecBox.querySelector(".playerX"),
  selectOBtn = selecBox.querySelector(".playerO"),
  playBoard = document.querySelector(".play-board"),
  allBox = document.querySelectorAll("section span"),
  player = document.querySelector(".players");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }

  selectXBtn.onclick = () => {
    selecBox.classList.add("hide");
    playBoard.classList.add("show");
  };
  selectOBtn.onclick = () => {
    selecBox.classList.add("hide");
    playBoard.classList.add("show");
    player.setAttribute("class", "player active players");
  };
};

let playerXicon = "fas fa-times";
let playerOicon = "far fa-circle";
let playerSing = "X";

function clickedBox(element) {
  if (player.classList.contains("player")) {
    playerSing = "O";
    element.innerHTML = `<i class="${playerOicon}"></i>`;
    player.classList.add("active");
    element.setAttribute("id", playerSing);
  } else {
    playerSing = "X";
    element.innerHTML = `<i class="${playerXicon}"></i>`;
    player.classList.add("active");
    element.setAttribute("id", playerSing);
  }
  element.style.pointerEvents = "none";
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot();
  }, randomDelayTime);
}

function bot() {
  let array = [];
  playerSing = "O";
  for (let i = 0; i < allBox.length; i++) {
    if (allBox[i].childElementCount == 0) {
      array.push(i);
    }
  }

  let randomBox = array[Math.floor(Math.random() * array.length)];

  if (array.length > 0) {
    if (player.classList.contains("player")) {
      playerSing = "X";
      allBox[randomBox].innerHTML = `<i class="${playerXicon}"></i>`;
      player.classList.add("active");
      allBox[randomBox].setAttribute("id", playerSing);
    } else {
      playerSing = "O";
      allBox[randomBox].innerHTML = `<i class="${playerOicon}"></i>`;
      player.classList.remove("active");
      allBox[randomBox].setAttribute("id", playerSing);
    }
  }
  allBox[randomBox].style.pointerEvents = "none";
}
