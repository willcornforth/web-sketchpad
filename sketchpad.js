console.log("Sketchpad 13/09/23")

// Each grid box is 22px wide/tall.
const gridSize = 16 * 16;
const gridContainer = document.querySelector("#grid-container");

for(let i = 0; i < gridSize; i++)
{
    const divRow = document.createElement("div");

    divRow.id;
    divRow.classList.add("grid-box");

    gridContainer.appendChild(divRow);
}