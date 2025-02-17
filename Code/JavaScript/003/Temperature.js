const TextBox = document.getElementById("TextBox");
const ToFahren = document.getElementById("ToFahren");
const ToCelsius = document.getElementById("ToCelsius");
const Result = document.getElementById("result");

let temp;

function Convert(){

    if(ToFahren.checked){

        temp = Number(TextBox.value);
        temp = temp * 9 / 5 + 32;

        Result.textContent = temp.toFixed(1) + "°F";

    } else if(ToCelsius.checked){

        temp = Number(TextBox.value);
        temp = (temp- 32) * (5/9);

        Result.textContent = temp.toFixed(1) + "°C";


    }else{

        Result.textContent = "SELECT A UNIT";
    }

}

/* 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <form action="">
        <h1> Temperature Conversion</h1>

        <input type="number" id = "TextBox" value="0"><br>
        <input type="radio" id = "ToFahren" name="unit">
        
        <label for="ToFahren">Celsius ==> Fahrenheit</label><br>

        <input type="radio" id="ToCelsius" name="unit">
        <label for="ToCelsius">Fahrenheit ==> Celcius</label><br>

        <button type="button" onclick="Convert()">Submit</button>
        <p id="result">Select a Unit</p>

    </form>

    <script src="./003/Temperature.js"></script>
</body>
</html> */


/* 
body{

    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(207, 234, 250);
    color: antiquewhite;

}

h1{

    color: aquamarine;

}

form{

    background-color: rgb(10, 9, 31);
    max-width: 350px;
    border-radius: 5px;

    text-align: center;
    margin: auto;
    padding: 25px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.548);
    
    
}

#TextBox{

    font-size: 2em;
    text-align: center;

    width: 50%;
    
    border: 2px solid black;
    border-radius: 5px;
    margin-bottom: 15px;

}

label{

    font-size: 1.5em;
    font-weight: bold;

}

button{
    
    font-size: 1.5em;
    color: white;

    margin-top: 15px;
    padding: 10px 15px;
    background-color: rgb(72, 145, 120);

    border: none;
    border-radius: 5px;

    cursor: pointer;

}

button:hover{

    background-color: rgb(90, 180, 149);

}

#result{

    font-size: 1.75em;
    font-weight: bold;

} */