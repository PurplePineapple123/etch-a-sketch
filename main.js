

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

            //add color changing functions here
            
            //default hover
            divCol.addEventListener("mouseenter", function(){
                this.style.backgroundColor = `black`;
            });

            //black button
            document.getElementById(`black-button`).addEventListener(`click`, function() {
                divCol.addEventListener("mouseenter", function(){
                    this.style.backgroundColor = `black`;
                });
            });
            
            //psychedlic button selection
            document.getElementById(`psych-button`).addEventListener(`click`, function() {
                divCol.addEventListener("mouseenter", function(){
                    this.style.backgroundColor = `#${randomColor()}`;
                });
            });

            //Choose color button
            //if
            document.getElementById(`chooseColor`).addEventListener(`input`, function() {
                divCol.addEventListener("mouseenter", function(){
                    this.style.backgroundColor = `${chooseColor()}`;
                });
            }, false);


            //eraser button

            document.getElementById(`erase-button`).addEventListener(`click`, function() {
                divCol.addEventListener("mouseenter", function(){
                    this.style.backgroundColor = `rgb(156, 149, 136)`;
                });
            });
            divRow.appendChild(divCol);
        }
    }
}

createGrid(3);








// slider.oninput = function changeGridSize() {
//     let sliderValue = document.getElementById(`myRange`);
//     sliderValue = sliderValue.value;
//     return(sliderValue);
// }


// let slider = document.getElementById(`myRange`);

// slider.oninput = function() {
//     createGrid(this.value);
// }

// document.getElementById(`myRange`).addEventListener(`input`, function(){
//     createGrid(this.value);
// });



//return the color choosen by the user
function chooseColor(){
  let color = document.getElementById(`chooseColor`).value;
    console.log(color);
    return color;
}


//returns random colors for psychedleic button
function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);

    return randomColor;
}

function resetButton() {

}