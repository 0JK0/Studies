const IncreaseBtn = document.getElementById("IncreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const DecreaseBtn = document.getElementById("DecreaseBtn");
const CounterTxT = document.getElementById("CounterTxt");

let CounterInt = parseInt(CounterTxT.innerText);

function IncreaseCounter(){

   
   CounterInt += 1;
   CounterTxT.innerText = CounterInt;

}

function ResetCounter(){

    CounterInt = 0;
    CounterTxT.innerText = 0;
    
}


function DecreaseCounter(){

    CounterInt -= 1;
    CounterTxT.innerText = CounterInt;

}

/* body{
    background-color: black;

    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 4em;
    font-weight: bold;

    align-items: center;
    text-align: center;


}

h1{

    font-size: 1em;

}

#CounterTxt{

    margin-top: 2em;
    margin-bottom: 2px;

}

button{

    margin: 1rem;
    padding: none;

    border: none;
    border-radius: 5px;
    
    padding: 15px 25px;

    cursor: pointer;

    color: white;

}


#IncreaseBtn {

    background-color: rgb(60, 150, 121);

}

#IncreaseBtn:hover{

    background-color: rgb(80, 179, 146);

}

#DecreaseBtn {

    background-color: rgb(223, 48, 4);

}

#DecreaseBtn:hover{

    background-color: rgb(241, 54, 7);

}

#ResetBtn{

    background-color: rgb(3, 89, 201);

}

#ResetBtn:hover{

    background-color: rgb(3, 100, 228);

} */