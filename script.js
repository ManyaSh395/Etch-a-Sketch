const container = document.querySelector(".container");
const newPageBtn = document.querySelector(".newPageBtn");
const resetPageBtn = document.querySelector(".resetPageBtn");

let currentGridSize = 16;

const createGrid = (size) => {
    container.innerHTML = "";
    const squareSize = 592 / size;

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor = "rgb(231, 27, 231)";
        });

        container.appendChild(square);
    }
}

createGrid(16);

newPageBtn.addEventListener("click", () => {
    let noOfSquares = parseInt(prompt("Enter the number of squares per side:"));
    if(noOfSquares > 100 || noOfSquares < 1){
        alert("Please enter a valid number between 1 and 100");
    } 
    currentGridSize = noOfSquares;
    createGrid(currentGridSize);
});

resetPageBtn.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(currentGridSize);
});






