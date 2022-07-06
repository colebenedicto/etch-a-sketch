
function createGrid(size = 24) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        let pixel = document.createElement("div");
        pixel.style.backgroundColor = "pink";
        board.insertAdjacentElement("beforeend", pixel);
    }
}

createGrid();