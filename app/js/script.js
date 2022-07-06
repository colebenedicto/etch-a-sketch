let board = document.querySelector(".board");

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
}

createGrid();

// slider

let slider = document.querySelector("#myRange");
let sliderValue = document.querySelector(".sliderValue");
sliderValue.textContent = "Grid size: " + slider.value + " x " + slider.value;

slider.oninput = function() {
    sliderValue.innerHTML = textContent = "Grid size: " + this.value + " x " + this.value;
}

let gridSize = slider.value;

slider.addEventListener('change', () => {
    deleteGrid();
    createGrid(slider.value);
});

function deleteGrid() {
    board.innerHTML = '';
}