
let gridLength = 16;
const drawing = document.querySelector('.drawing');
const r = document.querySelector(':root');

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

function eraseDrawing() {
    tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.classList.remove('full'))
    tiles.forEach(tile => tile.classList.add('empty'))
}

function rebuildGrid() {
    newSize = 0;
    while ((newSize < 1) || (newSize > 100)){
        newSize = prompt("Enter Grid Size (1-100): ")
    }
    gridLength = newSize;
    emptyGrid();
    makeGrid();

}

function changeColor(e) {
    r.style.setProperty('--fill-color', e.target.value);
    drawing.style.setProperty('outline-color', e.target.value);
}

window.addEventListener("load", makeGrid);

const changeGrid = document.querySelector('.input');
changeGrid.addEventListener("click", rebuildGrid);

const eraseGrid = document.querySelector('.erase');
eraseGrid.addEventListener("click", eraseDrawing);

const colorForm = document.querySelector('#colors');
colorForm.addEventListener('input', changeColor);