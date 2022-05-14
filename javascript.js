const body = document.querySelector('body');
const container = document.querySelector('#container');
const slider = document.querySelector('#gridSize');
const reset = document.querySelector('#reset');

let gridSize = 16;

slider.addEventListener('change', () => {
    gridSize = slider.value;
    removeGrid();
    generateGrid(gridSize);
});

reset.addEventListener('click', () => {
    removeGrid();
    generateGrid(gridSize);
});

// body.prepend(button);
// button.textContent = 'Change Size';
// button.addEventListener('click', changeSize);

container.style.display = 'grid';
container.style.width = '500px';
container.style.height = '500px';

function generateGrid(gridSize) {
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseenter', () => {
            greyScale(grid);
        });
        container.appendChild(grid);
    }
}

function changeColor(grid) {
    randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    grid.style.backgroundColor = randColor;
}

function greyScale(grid) {
    if (grid.style.backgroundColor) {
        let shade = Number(grid.style.backgroundColor.slice(-4,-1));
        if (shade < 1.0) {
            grid.style.backgroundColor = `rgba(0, 0, 0, ${shade + 0.1})`;
        }
    }
    else {
        grid.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }
}

// function changeSize() {
//     let userInput = prompt('Select size of grid. Max 64.');
//     let n = parseInt(userInput);
//     if (isNaN(n)) {
//         alert('Please enter a number.');
//     }
//     else if (n > 64 || n < 0) {
//         alert('Please enter a number between 0 and 64.');
//     }
//     else {
//         removeGrid();
//         generateGrid(n);
//     }
// }

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

generateGrid(16);