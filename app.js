const newPlayerForm = document.querySelector(".new-player-form");
const nameInput = document.querySelector("#new-player-form__input");
const submitBtn = document.querySelector(".new-player-form__btn");
const removePlayerBtn = document.querySelector(".new-player-form__remove-btn")

const scoreTable = document.querySelector(".score-table");
const playerBtnsDisplay = document.querySelector(".player-btns");

const resetBtn = document.querySelector(".reset-btn");

const maxNumbPlayers = 8;
const playerList = [];

let maxScore = 1;
let numberGamesToWin = 1;
let isGameOver = false;

class Player {
    constructor(name, display, button) {
        this.score = 0;
        this.wins = 0;
        this.name = name;
        this.display = display;
        this.button = button;
    }
}

function createPlayerDisplay() {
    newPlayerDisplay = document.createElement("span");
    newPlayerDisplay.innerText = 0;
    newPlayerDisplay.classList.add("score-display");
    scoreTable.append(newPlayerDisplay);
    return newPlayerDisplay;
}

function createPlayerBtn(playerName) {
    let newScoreBtn = document.createElement("button");
    newScoreBtn.classList.add("button");
    newScoreBtn.innerText = `+1 ${playerName}`;
    playerBtnsDisplay.append(newScoreBtn);
    return newScoreBtn;
}

newPlayerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (playerList.length < maxNumbPlayers) {
        let playerInput = newPlayerForm.elements["playerName"];
        const playerName = playerInput.value;
        let newPlayerDisplay = createPlayerDisplay();
        let newScoreBtn = createPlayerBtn(playerName);
        let newPlayer = new Player(playerName, newPlayerDisplay, newScoreBtn);
        playerList.push(newPlayer);
        playerInput.value = "";
        if (playerList.length === maxNumbPlayers) {
            document.querySelector(".new-player-form__label").innerText = "Max number of players reached";
            submitBtn.classList.add("hide");
            nameInput.classList.add("hide");
        }
    }
})

playerBtnsDisplay.addEventListener('click', function (e) {
    for (let i = 0; i < playerList.length; i++)
        if (e.target === playerList[i].button) {
            playerList[i].score++;
            playerList[i].display.innerText = playerList[i].score;
        }
})

removePlayerBtn.addEventListener('click', function () {
    let removedPlayer = playerList.pop();
    removedPlayer.display.remove();
    removedPlayer.button.remove();
    submitBtn.classList.remove("hide");
    nameInput.classList.remove("hide");
})

resetBtn.addEventListener('click', function () {
    for (let player of playerList) {
        player.score = 0;
        player.display.innerText = player.score;
    }
})