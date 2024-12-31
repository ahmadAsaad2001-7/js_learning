document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
  let popup = document.querySelector('#popup');
  popup.addEventListener("click", function(){

    let size = getSize();
    createBoard(size);
  });


});

let colorChoice='grey';

function createBoard(size) {
   let board = document.querySelector('.board'); // Clear the board before creating new elements 
board.innerHTML = ''; // Update the board's display properties for Flexbox
 board.style.display = 'flex';
 board.style.flexWrap = 'wrap';
 board.style.width = '500px'; // Fixed width for the board (adjust as needed) 
board.style.height = '500px'; // Fixed height for the board (adjust as needed) 
let numDivs = size * size; let divSize = 500 / size;
//  // Calculate the size of each div based on the board size 
for (let i = 0; i < numDivs; i++) 
{ let div = document.createElement("div");
   div.addEventListener("mouseover", colorDiv); 
div.style.width = `${divSize}px`; 
div.style.height = `${divSize}px`; 
board.insertAdjacentElement("beforeend", div); }
}
function getSize() { let input = prompt("What will be the size of the grid?"); 
  let message = document.querySelector(".message");
   if (message)
     { if (input === "") 
    { message.textContent = "Please provide a number!"; 
      return null; } 
      else
       { input = Number(input);
         if (input < 1 || input > 100)
         { message.textContent = "Provide a number between 1 and 100"; 
          return null; } 
          else { message.textContent = "Now you play!"; 
            return input; } } } 
            else 
            { console.error("Message element not found!");
               return null; } }
function colorDiv(){
if(colorChoice=="Random"){
  this.style.backgroundColor=`hsl(${Math.random() * 360},100%,50%)`;
}else{
  this.style.backgroundColor= 'grey';
}
}
function setColor(newcolorChoice){
  colorChoice = newcolorChoice;
}
function reset(){
  let divs=document.querySelectorAll(".board div");
  divs.forEach((div)=>div.style.backgroundColor="white");
}