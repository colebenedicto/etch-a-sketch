let board = document.querySelector(".board");
let indPix;
let color;
let boardColor;

function createGrid(size = 21) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        let pixel = document.createElement("div");
        if (i % size === 0) { // scans for left corner pixels
            pixel.setAttribute("id", "leftCornerPixel");
        } 
        if (i >= (size * size) - size) { // scans for bottom corner pixel
            pixel.setAttribute("id", "bottomCornerPixel");
        }
        pixel.setAttribute("class", "individualPixel");
        board.insertAdjacentElement("beforeend", pixel);
    }
    indPix = document.querySelectorAll('.individualPixel');
}

createGrid();

// slider

let slider = document.querySelector("#myRange");
let sliderValue = document.querySelector(".sliderValue");
sliderValue.innerHTML = "Grid size: " + slider.value + " x " + slider.value;

slider.oninput = function() {
    sliderValue.innerHTML = this.textContent = "Grid size: " + this.value + " x " + this.value;
}

slider.addEventListener('change', () => {
    deleteGrid();
    createGrid(slider.value);
});

// slider.value does not return to default at refresh

function deleteGrid() {
    board.innerHTML = '';
}

// Buttons

const solidColor = document.querySelector('.solid-color');
const RGBColor = document.querySelector('.rgb-color');
const shading = document.querySelector('.shading');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');


// Solid color


indPix.forEach((pixNum) => {
    pixNum.addEventListener('mousedown', () => {
        pixNum.style.backgroundColor = 'black';
    });
});

eraser.addEventListener('click', e => {
    console.log(e.target); 
});

clear.addEventListener('click', () => {
    board.childNodes.forEach(chlNode => {
        chlNode.style.backgroundColor = 'transparent'; //change transparent to current background, if none to default background
    });
});