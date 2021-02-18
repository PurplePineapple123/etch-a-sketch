

//Generate grid to size of user input

function createGrid(widthHeight){
    document.getElementById(`grid-container`).innerHTML = "";

    for (let i = 0; i < widthHeight; i++) {
        let divRow = document.createElement(`div`);
        divRow.classList.add(`divRow`);
        document.getElementById(`grid-container`).appendChild(divRow);
        for (let y = 0; y < widthHeight; y++){
            let divCol = document.createElement(`div`);
            divCol.classList.add(`divCol`);
            divRow.appendChild(divCol);     
        }
        
    }
}

createGrid(5);



function blackButton() {
    let grid = document.getElementsByClassName(`divCol`);
    let gridArray = Array.from(grid);
    console.log(gridArray);

   
    gridArray.forEach(element => {
        element.addEventListener(`mouseenter`, function(){
            this.classList.add(`black-button`);
            this.classList.remove(`psych-button`);

            console.log(element);
        });

    });

}


function psychButton() {
    let grid = document.getElementsByClassName(`divCol`);
    let gridArray = Array.from(grid);
    console.log(gridArray);

   
    gridArray.forEach(element => {
        element.addEventListener(`mouseenter`, function(){
            this.classList.add(`psych-button`);

            console.log(element);
        });

    });

}






function resetButton() {
    let grid = document.getElementsByClassName(`divCol`);
    let gridArray = Array.from(grid);
    console.log(gridArray);

   
    gridArray.forEach(element => {
            this.style.backgroundColor = `rgb(156, 149, 136)`;

            console.log(element);
        });
}





document.getElementById(`black-button`).addEventListener(`click`, blackButton);
document.getElementById(`psych-button`).addEventListener(`click`, psychButton);