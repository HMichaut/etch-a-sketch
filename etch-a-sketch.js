// Selection of the html elements.
const gridDiv = document.querySelector("#grid-div");
const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener('click', () => updateGrid());

// prompt for a new reolution, clear the grid and create a new grid.
function updateGrid() {
    gridResolution = prompt("Enter grid resolution");
    if (0 < gridResolution < 100) {
        while (gridDiv.firstChild) {
            gridDiv.removeChild(gridDiv.firstChild);
        }
        addGridOfSquares(gridResolution);
    }
    else {
        alert("Grid resolution must be an integer between 0 and 100");
    }
}

// Number -> DOM elements
// Consumes a number num and returns a grid of num x num squares.
function addGridOfSquares(num) {
    iterator = 0;
    squareSize = (960 / num).toString();
    while (iterator < (num * num)) {
        let newDiv = document.createElement("div");
        newDiv.className += "gridSquare";
        newDiv.style.width = squareSize;
        newDiv.style.height = squareSize;
        newDiv.addEventListener("mouseover", changeColor);
        gridDiv.appendChild(newDiv);
        iterator += 1;
    }
}

// Event -> backgroundColor
// Consumes an event a returns a random background color.
function changeColor(event) {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb( ${randomRed}, ${randomGreen}, ${randomBlue})`;
}

// Initialization of the grid
addGridOfSquares(50);