console.log("Sketchpad 13/09/23")

// Each grid box is 22px wide/tall.
const BOX_SIZE = 22;
const GRID_SIZE = 16;

let drawEnabled = 0;
let eraseEnabled = 0;

function adjustGridSize(grid, boxSize, gridSize)
{
    grid.style.width = grid.style.height = (boxSize * gridSize + "px");
    console.log("Calculated width: " + grid.style.width + " height: " + grid.style.height);
}

function setupGrid()
{
    const gridContainer = document.querySelector("#grid-container");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    adjustGridSize(grid, BOX_SIZE, GRID_SIZE);

    gridContainer.appendChild(grid);

    for(let i = 0; i < Math.pow(GRID_SIZE, 2); i++)
    {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        grid.appendChild(gridBox);
    }
}

addEventListener("mousedown", (event) => {

    if(event.target.classList.contains('grid-box')) {
        switch (event.button)
        {
            case 0: // Mouse 1
                drawEnabled = !drawEnabled;
                eraseEnabled = 0;
                break;
            case 1: // Mouse 3
                eraseEnabled = !eraseEnabled;
                drawEnabled = 0;
                break;
        }

    }

});

addEventListener("mouseover", (event) => {

    if(event.target.classList.contains('grid-box') && drawEnabled) {
        event.target.style.backgroundColor = 'black';
    } 
    else if(event.target.classList.contains('grid-box') && eraseEnabled) {
        event.target.style.backgroundColor = 'white';
    }

});

setupGrid();