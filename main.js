let color = "";
let psychColor = false;


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
            divCol.addEventListener(`mouseenter`, function(){
                if (psychColor) {
                    color = `#${randomColor()}`;
                }
                if (!color) {
                    color = `black`;
                }
                this.style.backgroundColor = color;
            });
        }  
    }
}

createGrid(5);

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



  //black button
  document.getElementById(`black-button`).addEventListener(`click`, function() {
      psychColor = false;
      color = `black`;
    });


 //psychedlic button selection
    document.getElementById(`psych-button`).addEventListener(`click`, function() {
        psychColor = true;
        
        });


    //eraser button

    document.getElementById(`erase-button`).addEventListener(`click`, function() {
        psychColor = false;
        color = `rgb(156, 149, 136)`;

    }); 



//Choose color button

document.getElementById(`chooseColor`).addEventListener(`input`, function() {
    psychColor = false;
    
    color = chooseColor();
}, false);

