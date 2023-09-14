// Get references to the nodes and the line

window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});
const mappedNumber = {
    "rock": 0,
    "paper": 1,
    "scissor": 2,
}
const data = {
    "0": {"name": "rock", "image": "https://img.icons8.com/ios-filled/50/angry-fist.png"},
    "1": {"name": "paper", "image": "https://img.icons8.com/glyph-neue/64/hand.png"},
    "2": {"name": "scissor", "image": "https://img.icons8.com/ios-filled/50/two-fingers.png"},


}

function createLine(c1, c2, Line) {
    const node1 = document.getElementById(c1);
    const node2 = document.getElementById(c2);
    const line = document.getElementById(Line);

// Calculate the positions of the nodes
    const node1Rect = node1.getBoundingClientRect();
    const node2Rect = node2.getBoundingClientRect();

// Calculate the coordinates for the line
    const x1 = node1Rect.left + node1Rect.width / 2;
    const y1 = node1Rect.top + node1Rect.height / 2;
    const x2 = node2Rect.left + node2Rect.width / 2;
    const y2 = node2Rect.top + node2Rect.height / 2;

// Set the line position and dimensions
    line.style.left = x1 + 'px';
    line.style.top = y1 + 'px';
    line.style.width = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + 'px';
    line.style.transformOrigin = '0 0';
    line.style.transform = 'rotate(' + Math.atan2(y2 - y1, x2 - x1) + 'rad)';
    line.style.borderTop = '14px solid #333';
}

function RuleBox() {
    const rulesButton = document.querySelector(".rules");
    const closeButton = document.querySelector(".close-button");
    const rulesBox = document.querySelector('.game-rules');
    rulesButton.addEventListener('click', () => {
        rulesBox.style.display = 'block';
    })
    closeButton.addEventListener('click', () => {
        rulesBox.style.display = 'none'
    })
}

function backToChoice() {
    location.reload();
    document.querySelector('#match-section').style.display = 'none';
    document.querySelector('#choice-section').style.display = 'flex';
}

function nextToMatchSection() {
    document.querySelector('#choice-section').style.display = 'none';
    document.querySelector('#match-section').style.display = 'flex';
}

function getTheMatchResult(humanChoiceString) {
    nextToMatchSection();



    try {
        const computerChoice = Math.floor(Math.random() * 3);
        const humanChoice = mappedNumber[humanChoiceString];

        const humanPickURL = data[humanChoice].image;
        const computerChoiceURL = data[computerChoice].image;



        document.querySelector("#humanChoiceURL").src = humanPickURL;
        document.querySelector("#computerChoiceURL").src = computerChoiceURL;
        console.log(humanChoice, computerChoice);

        document.querySelector("#human-choice").classList.add(data[humanChoice].name);
        document.querySelector("#computer-choice").classList.add(data[computerChoice].name);


        let winner = "";

        if ((humanChoice === 2 && computerChoice === 0) || (computerChoice === 2 && humanChoice === 0)) {
            winner = humanChoice === computerChoice ? "draw" : humanChoice > computerChoice ? "computer" : "human";
        } else {
            winner = humanChoice === computerChoice ? "draw" : humanChoice > computerChoice ? "human" : "computer";
        }


        if (winner === "draw") {
            document.querySelector(".game-result").innerHTML = `<span>TIE UP</span><br><button id="play-again">REPLAY</button>`
            document.querySelector('#play-again').addEventListener('click', () => {
                backToChoice();
            })
        } else {
            document.querySelector('.match-result-text').innerText = (winner === "human" ? "WON" : "LOST")
        }
    } catch (e) {
        console.log("error");
    }
}

createLine('rock', 'paper', 'line1');
createLine('paper', 'scissor', 'line2')
createLine('rock', 'scissor', 'line3')

RuleBox();


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
rockButton.addEventListener('click', () => {
    getTheMatchResult('rock');
})
paperButton.addEventListener('click', () => {
    getTheMatchResult('paper');
})
scissorButton.addEventListener('click', () => {
    getTheMatchResult('scissor');
})


document.querySelector('#play-again').addEventListener('click', () => {
    backToChoice();
})




