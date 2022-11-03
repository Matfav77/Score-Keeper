const newPlayerForm = document.querySelector(".new-player-form");
const nameInput = document.querySelector("#new-player-form__input");
const submitBtn = document.querySelector(".new-player-form__btn");
const removePlayerBtn = document.querySelector(".new-player-form__remove-btn")

const scoreTable = document.querySelector(".score-table");
const playerBtnsDisplay = document.querySelector(".player-btns");

const resetBtn = document.querySelector(".reset-btn");

const maxNumbPlayers = 8;
const playerList = [];

newPlayerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (playerList.length < maxNumbPlayers) {
        let playerInput = newPlayerForm.elements["playerName"];
        newPlayerDisplay = document.createElement("span");
        newPlayerDisplay.innerText = 0;
        newPlayerDisplay.classList.add("score-display");
        scoreTable.append(newPlayerDisplay);
        let newScoreBtn = document.createElement("button");
        newScoreBtn.classList.add("button");
        newScoreBtn.innerText = `+1 ${playerInput.value}`;
        playerBtnsDisplay.append(newScoreBtn);
        let newPlayer = {
            score: 0,
            name: playerInput.value,
            display: newPlayerDisplay,
            button: newScoreBtn
        }
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
    removedPlayer.display.classList.add("hide");
    removedPlayer.button.classList.add("hide");
})

resetBtn.addEventListener('click', function () {
    for (let i = 0; i < playerList.length; i++) {
        playerList[i].score = 0;
        playerList[i].display.innerText = playerList[i].score;
    }
})