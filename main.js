let color = "";
let psychColor = false;

//animating initial text

function textAnimate(textId) {
const text = document.querySelector(`.animate`);
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

console.log(splitText);

for (let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>"+ splitText[i] + "</span>";

}

//inserting letters one by one

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll(`span`)[char];
    span.classList.add(`fade`);
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer); //does this need to be its own function?
    timer = null;
}
}

textAnimate();






//Generate grid to size of user input

function createGrid(widthHeight) {
    document.getElementById(`grid-container`).innerHTML = "";

    for (let i = 0; i < widthHeight; i++) {
        let divRow = document.createElement(`div`);
        divRow.classList.add(`divRow`);
        document.getElementById(`grid-container`).appendChild(divRow);
        for (let y = 0; y < widthHeight; y++) {
            let divCol = document.createElement(`div`);
            divCol.classList.add(`divCol`);
            divRow.appendChild(divCol);
            divCol.addEventListener(`mouseenter`, function () {
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

//return the color choosen by the user
function chooseColor() {
    let color = document.getElementById(`chooseColor`).value;
    console.log(color);
    return color;
}

//returns random colors for psychedleic button
function randomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    return randomColor;
}



//black button
document.getElementById(`black-button`).addEventListener(`click`, function () {
    psychColor = false;
    color = `black`;
});


//psychedlic button selection
document.getElementById(`psych-button`).addEventListener(`click`, function () {
    psychColor = true;

});


//eraser button

document.getElementById(`erase-button`).addEventListener(`click`, function () {
    psychColor = false;
    color = `rgb(156, 149, 136)`;

});



//Choose color button

document.getElementById(`chooseColor`).addEventListener(`input`, function () {
    psychColor = false;

    color = chooseColor();
}, false);


//reset colors on grid 
document.getElementById(`reset-button`).addEventListener(`click`, function () {
    resetButton();

});



function resetButton() {
    let grid = document.getElementsByClassName(`divCol`);
    let gridArray = Array.from(grid);
    gridArray.forEach(element => {
        element.style.backgroundColor = `rgb(156, 149, 136)`;
    });
    document.getElementById(`myRange`).value = 25;
    createGrid(25);
}

//grid size slider
let slider = document.getElementById(`myRange`);

slider.oninput = function() {
    createGrid(this.value);

}


//default grid size
createGrid(25);
