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









