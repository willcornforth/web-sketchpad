console.log("Sketchpad 13/09/23")

// Each grid box is 22px wide/tall.
const BOX_SIZE = 22;

let gridSize = 16;
let drawEnabled = 0;
let eraseEnabled = 0;

function adjustGridSize(grid, boxSize, gridSize)
{
    grid.style.width = grid.style.height = (boxSize * gridSize + "px");
    console.log("Calculated width: " + grid.style.width + " height: " + grid.style.height);
}

function randomColour()
{
    let color = '#';
    const digits = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) 
    {
      const randomDigit = Math.floor(Math.random() * 16);
      color += digits[randomDigit];
    }

    return color;
}

function setupGrid(gridSize = 16)
{
    const gridContainer = document.querySelector("#grid-container");
    const grid = document.createElement("div");

    grid.id = "grid";
    grid.classList.add("grid");
    adjustGridSize(grid, BOX_SIZE, gridSize);

    gridContainer.appendChild(grid);

    for (let i = 0; i < Math.pow(gridSize, 2); i++)
    {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        grid.appendChild(gridBox);
    }
}

function removeGrid()
{
    // Clears contents of container.
    let gc = document.querySelector("#grid-container");
    gc.textContent = "";
}

addEventListener("mousedown", (event) => 
{
    if (event.target.classList.contains('grid-box')) {
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

addEventListener("mouseover", (event) => 
{
    if (event.target.classList.contains('grid-box') && drawEnabled) 
    {
        const enableRGB = document.querySelector("#enable-rgb")
        
        if(enableRGB.checked) 
        {
            event.target.style.backgroundColor = randomColour();
            event.target.style.opacity = '1.0';
        }
        else 
        {    
            event.target.style.backgroundColor = 'black';
            event.target.style.opacity -= '-0.1';
        }
    } 
    else if (event.target.classList.contains('grid-box') && eraseEnabled) {
        event.target.style.backgroundColor = 'white';
    }

});

document.querySelector("#btn-grid-size").onclick = () => 
{
   gridSize = parseInt( prompt("Type a grid size in the box below. (16 by default)") );

   if (gridSize > 0 && Number.isInteger(gridSize) && gridSize < 100)
   {
    // Reinitialise grid with new size.
    removeGrid();
    setupGrid(gridSize);
   }
}

setupGrid();