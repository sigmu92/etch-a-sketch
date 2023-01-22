
let gridLength = 16;
const drawing = document.querySelector('.drawing')

function fillIn(e) {
    e.target.classList.remove('empty')
    e.target.classList.add('full')
}

function emptyGrid() {
   while (drawing.firstChild) {
        drawing.removeChild(drawing.firstChild)
   }
}

function makeGrid() {
    
    for (let i = 0; i < gridLength; i++)
    {
        const row = document.createElement('div');
        row.classList.add('row')
        for (let j = 0; j < gridLength; j++){
            const tile = document.createElement('div');
            tile.classList.add('tile','empty');
            tile.style.width = `${(100/gridLength)}%`
            tile.addEventListener("mouseenter", fillIn);
            row.appendChild(tile);
        }
        drawing.appendChild(row);
    }
}

function rebuildGrid() {
    newSize = 0;
    while ((newSize < 1) || (newSize > 100)){
        newSize = prompt("Enter grid size(1-100): ")
    }
    gridLength = newSize;
    emptyGrid();
    makeGrid();

}

window.addEventListener("load", makeGrid);

const button = document.querySelector('button');
button.addEventListener("click", rebuildGrid);