console.log("Sketchpad 13/09/23")

// Each grid box is 22px wide/tall.
const BOX_SIZE = 22;
const GRID_SIZE = 16;

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

setupGrid();