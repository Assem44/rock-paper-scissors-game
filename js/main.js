const choiceBtns = document.querySelectorAll(".triangle-box .choice-btn")
const step2Sec = document.querySelector(".step-2")
const triangleBox = document.querySelector(".triangle-box")
const againBtn = document.getElementById("playAgain")
const userChoiceBox = document.querySelector(".user-choice")
const houseChoiceBox = document.querySelector(".house-choice")
const resultDiv = document.querySelector(".result-announce")
const scoreValEl = document.getElementById("scoreValue")
const rulesModal = document.querySelector(".rules-modal")
const rulesBtn = document.getElementById("rulesBtn")
let score = Number(localStorage.getItem("score")) || 0
let isAdvancedMode = false

const winningCompo = {
    normal: {
        "paper": "rock",
        "scissors": "paper",
        "rock": "scissors"
    },
    advanced: {
        "paper": ["rock", "spock"],
        "scissors": ["paper", "lizard"],
        "rock": ["scissors", "lizard"],
        "lizard": ["paper", "spock"],
        "spock": ["scissors", "rock"]
    }
}

function updateScore(points=0){
    score += points;
    if (score < 0) score = 0; 
    
    scoreValEl.innerText = score;
    localStorage.setItem("score", score); 
}

function houseRandomChoice(){
    const choices = isAdvancedMode ? 
    [
        "paper",
        "scissors",
        "rock",
        "lizard",
        "spock"
    ]
    :
    [
        "paper",
        "scissors",
        "rock"
    ]
    return choices[Math.trunc(Math.random() * choices.length)]
}

function createGameButton(type, obj) {
    const target = document.querySelector(`.${obj}-choice`)
    const btn = document.createElement('button');
    btn.className = `choice-btn ${type} step-2-btn`; 
    btn.innerHTML = `<img src="assets/images/icon-${type}.svg" alt="${type}">`;
    target.innerHTML = ''
    target.appendChild(btn)
}

choiceBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        advancedCheckbox.parentElement.classList.add("not-allow")
        triangleBox.classList.add("hidden")
        step2Sec.classList.remove("hidden")
        const userChoice = btn.dataset.type
        createGameButton(userChoice, "user")
        step2Sec.classList.add("grid-while-choosing")
        setTimeout(()=>{
            const houseChoice = houseRandomChoice()
            houseTurn(houseChoice)
            endGame(userChoice, houseChoice)
            step2Sec.classList.remove("grid-while-choosing")


            console.log(userChoice, houseChoice)


        }, 500)
    })
})

function houseTurn(choice){
    document.querySelector(".house-choice").classList.remove("empty-circle")
    createGameButton(choice, "house")
}

function endGame(userChoice, houseChoice){
    const rules = isAdvancedMode ? winningCompo.advanced : winningCompo.normal 
    let result = ""
    if (userChoice == houseChoice){
        result = "draw"
    }else if (rules[userChoice].includes(houseChoice)){
        result = "you win"
        handleWinner("user")
        updateScore(2)
    }else{
        result = "you lose"
        handleWinner("house")
        updateScore(-2)

    }

    document.getElementById("resultText").innerText = result
    resultDiv.classList.remove("hidden")
}

function handleWinner(winner){
    document.querySelector(`.${winner}-choice`)?.classList.add("winner")
}

function playAgain(){
    advancedCheckbox.parentElement.classList.remove("not-allow")
    step2Sec.classList.add("hidden")
    triangleBox.classList.remove("hidden")
    resultDiv.classList.add("hidden")

    userChoiceBox.classList.remove("winner")
    houseChoiceBox.classList.remove("winner")
    houseChoiceBox.classList.add("empty-circle")


    userChoiceBox.innerHTML = ''
    houseChoiceBox.innerHTML = ''

}

updateScore()
againBtn.addEventListener("click", playAgain)

rulesBtn.addEventListener("click", ()=>{
    rulesModal.classList.remove("hidden")
})

window.addEventListener("click", (e)=>{
    if (e.target.classList.contains("close")){

        rulesModal.classList.add("hidden")
    }
})
