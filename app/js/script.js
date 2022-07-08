let canvas = document.querySelector(".canvas");
let indPix;
let color;
let canvasColor;

function createGrid(size = 21) {
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute("class", "individualPixel");
        if (i % size === 0) { // scans for left corner pixels
            pixel.classList.add("leftCornerPixel");
        } 
        if (i >= (size * size) - size) { // scans for bottom corner pixel
            pixel.classList.add("bottomCornerPixel");
        }
        canvas.insertAdjacentElement("beforeend", pixel);
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
    canvas.innerHTML = '';
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
    canvas.childNodes.forEach(chlNode => {
        chlNode.style.backgroundColor = '#C0D6DF'; //change transparent to current background, if none to default background
    });
});

// Background Color Picker

let bgColorPicker = document.getElementById('colorPickerBG');
bgColorPicker.addEventListener('input', () => {
    bgColorPicker.style.setProperty('--color',bgColorPicker.value)
});