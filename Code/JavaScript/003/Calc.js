const Dipslay = document.getElementById("display");

function ToDisplay(input){

    Dipslay.value += input;

}

function ClearDisplay(){

    Dipslay.value = "";

}

function Calculate(){

    try{

        Dipslay.value = eval(Dipslay.value);
    }
    catch(error){

        Dipslay.value = "Error";
    }
  

}

// HTML

/* <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>

    <div id="Calculator">

        <input id="display" readonly>

        <div id="keys">

            <button onclick="ToDisplay('+')" class="OperatorBtn">+</button>
            <button onclick="ToDisplay('7')">7</button>
            <button onclick="ToDisplay('8')">8</button>
            <button onclick="ToDisplay('9')">9</button>
            <button onclick="ToDisplay('-')" class="OperatorBtn">-</button>
            <button onclick="ToDisplay('4')">4</button>
            <button onclick="ToDisplay('5')">5</button>
            <button onclick="ToDisplay('6')">6</button>
            <button onclick="ToDisplay('*')" class="OperatorBtn">*</button>
            <button onclick="ToDisplay('1')">1</button>
            <button onclick="ToDisplay('2')">2</button>
            <button onclick="ToDisplay('3')">3</button>
            <button onclick="ToDisplay('/')" class="OperatorBtn" >/</button>
            <button onclick="ToDisplay('0')">0</button>
            <button onclick="ToDisplay('.')">.</button>

            <button onclick="Calculate()">=</button>
            <button onclick="ClearDisplay()" class="OperatorBtn">C</button>

        </div>

    </div>


    <script src="./003/Calc.js"></script>
</body>
</html>
 */

// CSS

/* body{

    margin: 0;
    display: flex;

    justify-content: center;
    align-items: center;
    height: 100vh;

}


#Calculator{

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    background-color: gray;
    border-radius: 15px;

    max-width: 500px;
    overflow: hidden;

}

#display{

    width: 100%;
    padding: 20px;

    font-size: 5rem;
    text-align: left;
    color: white;

    border: none;
    background-color: rgb(95, 95, 95);
}



#keys{

    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;

    padding: 25px;
}


button{

    width: 100px;
    height: 100px;

    border: none;
    border-radius: 50px;

    background-color: black;
    
    color: white;
    font-size: 3rem;
    font-weight: bold;

    cursor: pointer;
}

button:hover{

    background-color: rgb(24, 24, 24);

}

button:active{

    background-color: rgb(59, 59, 59);

}

.OperatorBtn{

    background-color: orange;

}

.OperatorBtn:hover{

    background-color: rgb(226, 147, 1);

}

.OperatorBtn:active{

    background-color: rgb(209, 136, 1);
    
} */