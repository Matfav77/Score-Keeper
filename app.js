const newPlayerForm = document.querySelector(".new-player-form");
const submitBtn = document.querySelector(".new-player-form__btn");
const nameInput = document.querySelector("#new-player-form__input");

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

// for (i = 0; i < playerList.length; i++) {
//     playerList[i].button.addEventListener('click', function () {
//         playerList[i].score++;
//         this.innerText = playerList[i].score;
//     })
// }

playerBtnsDisplay.addEventListener('click', function (e) {
    for (let i = 0; i < playerList.length; i++)
        if (e.target === playerList[i].button) {
            playerList[i].score++;
            playerList[i].display.innerText = playerList[i].score;
        }
})

resetBtn.addEventListener('click', function () {
    for (let i = 0; i < playerList.length; i++) {
        playerList[i].score = 0;
        playerList[i].display.innerText = playerList[i].score;
    }
})