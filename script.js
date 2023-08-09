console.log("Welcome to tictactoe");
let music = new Audio("super-mario-.mp3");

// music.setAttribute('autoplay','autoplay');

let audioTurn = new Audio("ding.mp3");
let gameover = new Audio("success-fanfare-trumpets.mp3");
let turn = "X";
let isgameover = false;
//Function to chane the turn
const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
            gameover.play();
        }
    })
}

//Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
})

// document.getElementsByClassName("fa-volume-high").onclick = function() {myFunction()};

function playaudio() {
  music.play();
  music.loop=true;
  music.muted=false;
  // music.setAttribute('autoplay','autoplay');
  
}
function pauseaudio() {
    music.muted=true;
//   music.pause();
}