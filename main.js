

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

            divRow.appendChild(divCol);
        }
    }


}

createGrid(7);

//returns random colors for psychedleic button
function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    return randomColor;
}