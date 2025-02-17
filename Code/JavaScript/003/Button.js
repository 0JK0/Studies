
const decreaseBtn = document.getElementById("DecreseBtn");
const resetBtn = document.getElementById("ResetBtn");
const increaseBtn = document.getElementById("IncreaseBtn");

const countLabel = document.getElementById("CountLabel")
let count = 0;

//When are asigning a specific and unique? function to the click event on this button
increaseBtn.onclick = function (){

    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function (){

    count = 0;
    countLabel.textContent = count;

}

decreaseBtn.onclick = function (){

    count--;
    countLabel.textContent = count;

} 

REQUIRED HTML

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./style.css">
// </head>

// <body>
//     <label id="CountLabel">0</label>

//     <div id="BtnContainer">

//         <button id="DecreseBtn" class="Buttons" >Decrease</button>
//         <button id="ResetBtn" class="Buttons" >Reset</button>
//         <button id ="IncreaseBtn" class="Buttons" >Increase</button>

//     </div>

//     <script src="./003/Temperature.js"></script>
// </body>
// </html>


REQUIRED CSS 

// body{

//     background-color: rgb(3, 1, 27);
// }

// #CountLabel{

//     display: block;
    
//     color: antiquewhite;
//     text-align: center;
//     font-size: 10em;
//     font-family: Arial, Helvetica, sans-serif;

// }

// #BtnContainer{

//     text-align: center;

// }

// .Buttons{

//     padding: 10px 20px;

//     font-size: 1.5em;
//     color: antiquewhite;
    
//     background-color: black;
//     border-radius: 5px;

//     cursor: pointer;
//     transition: background-color 0.25s;
// }

// .Buttons:hover{

//     background-color: rgb(24, 0, 43);
// }