const container = document.querySelector(".container");
const newPageBtn = document.querySelector(".newPageBtn");
const resetPageBtn = document.querySelector(".resetPageBtn");
const colorPicker = document.querySelector(".colorPicker");
const discoBtn = document.querySelector(".discoBtn");

let currentGridSize = 16;
let penDown = false; // Variable to track if the mouse button is pressed
let discoMode = false; // Variable to track if disco mode is active

const createGrid = (size) => {
    container.innerHTML = "";
    const squareSize = 592 / size;      // Calculate square size based on container width (592px)

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square); // Append the square to the container
    }
}

createGrid(16); // Initial grid size

newPageBtn.addEventListener("click", () => {
    let noOfSquares = parseInt(prompt("Enter the number of squares per side:"));
    if(noOfSquares > 100 || noOfSquares < 1){
        alert("Please enter a valid number between 1 and 100");
    } 
    currentGridSize = noOfSquares;
    createGrid(currentGridSize);
    discoMode = false; // Disable disco mode
});

resetPageBtn.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(currentGridSize);
    discoMode = false; // Disable disco mode
});

discoBtn.addEventListener("click", () => {
    discoMode = true; // Enable disco mode
})

container.addEventListener("mousedown", (e) => { 
    if(e.button === 0) {                              // Check if left mouse button is pressed
        penDown = true;                               
    }
});

document.addEventListener("mouseup", () => {
    penDown = false;
})

container.addEventListener("mouseover", (e)=>{
    if(penDown && e.target.classList.contains("square")){
        if(discoMode){
            const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
            e.target.style.backgroundColor = randomColor; // Use a random color in disco mode
        } else{
            e.target.style.backgroundColor = colorPicker.value; // Use the color from the color picker
        }
    }
});





