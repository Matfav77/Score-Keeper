const numberOfGamesInput = document.querySelector("#numberGamesToWin");
const targetScoreForm = document.querySelector(".max-score-form");
const newPlayerForm = document.querySelector(".new-player-form");
const nameInput = document.querySelector("#new-player-form__input");
const submitBtn = document.querySelector(".new-player-form__btn");
const removePlayerBtn = document.querySelector(".new-player-form__remove-btn")


const scoreTable = document.querySelector(".score-table");
const playerBtnsDisplay = document.querySelector(".player-btns");

const resetBtn = document.querySelector(".reset-btn");

const maxNumbPlayers = 8;
const playerList = [];

let targetScore = 11;
let numberOfGamesToWin = 1;
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

// Functions to create DOM elements for new players

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

// Creation of a new player

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

// Making all buttons interactive

numberOfGamesInput.addEventListener("change", (e) => {
    numberOfGamesToWin = parseInt(e.target.value);
})

targetScoreForm.addEventListener('submit', function (e) {
    e.preventDefault();
    targetScore = parseInt(targetScoreForm.elements["targetScore"].value);
})

playerBtnsDisplay.addEventListener('click', (e) => {
    for (let player of playerList) {
        if (e.target === player.button) {
            player.score++;
            player.display.innerText = player.score;
        }
    }
})

removePlayerBtn.addEventListener('click', () => {
    let removedPlayer = playerList.pop();
    removedPlayer.display.remove();
    removedPlayer.button.remove();
    submitBtn.classList.remove("hide");
    nameInput.classList.remove("hide");
})

resetBtn.addEventListener('click', () => {
    for (let player of playerList) {
        player.score = 0;
        player.display.innerText = player.score;
    }
})