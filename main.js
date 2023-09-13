// Get references to the nodes and the line

window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});

function createLine(c1,c2,Line){
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


createLine('rock','paper','line1');
createLine('paper','scissor','line2')
createLine('rock','scissor','line3')


const rulesButton = document.querySelector(".rules");
const closeButton = document.querySelector(".close-button");
const rulesBox = document.querySelector('.game-rules');
rulesButton.addEventListener('click',()=> {
    rulesBox.style.display = 'block';
})
closeButton.addEventListener('click',() => {
    rulesBox.style.display = 'none'
})

