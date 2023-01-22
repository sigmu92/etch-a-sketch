
let gridLength = 16;
const drawing = document.querySelector('.drawing')

function fillIn(e) {
    e.target.classList.remove('empty')
    e.target.classList.add('full')
}

function emptyGrid() {

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

window.addEventListener("load", makeGrid)