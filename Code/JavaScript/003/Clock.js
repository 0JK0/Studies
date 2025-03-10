function UpdateClock(){

    const now = new Date();

    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    const TimeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("Clock").textContent = TimeString;

}

UpdateClock();
setInterval(UpdateClock, 1000);

const display = document.getElementById("Display");
let Timer = null;
let StartTime = 0;
let ElapsedTime = 0;
let IsRunning = false;

function Start(){

    if(!IsRunning){

        StartTime = Date.now() - ElapsedTime;
        Timer = setInterval(Update, 10);
        IsRunning = true;

    }

    
}

function Reset(){

    clearInterval(Timer);
    StartTime = 0;
    ElapsedTime = 0;
    IsRunning = false;

    display.textContent = "00:00:00:00"
    
}

function Stop(){

    if(IsRunning){

        clearInterval(Timer);
        IsRunning = false;
    }
    
}

function Update(){

    const CurrentTime = Date.now();
    ElapsedTime = CurrentTime - StartTime;

    let TimerHours = Math.floor(ElapsedTime / (1000 * 60 * 60));
    let TimerMinutes = Math.floor(ElapsedTime / (1000 * 60) % 60);
    let TimerSeconds = Math.floor(ElapsedTime / 1000 % 60);
    let TimerMiliseconds = Math.floor(ElapsedTime % 1000 / 10);

    TimerHours = String(TimerHours).padStart(2, "0");
    TimerMinutes = String(TimerMinutes).padStart(2, "0");
    TimerSeconds = String(TimerSeconds).padStart(2, "0");
    TimerMiliseconds = String(TimerMiliseconds).padStart(2, "0");

    display.textContent = `${TimerHours}:${TimerMinutes}:${TimerSeconds}:${TimerMiliseconds}`;
    
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

    <h1>GLOCK</h1>

    <div id="Clock-Container">

        <div id="Clock"> 00:00:00 </div>

    </div>

    <div id="Container">

        <div id="Display">

            00:00:00:00

        </div>

        <div id="Controls">

            <button id="StartBtn" onclick="Start()">Start</button>
            <button id="StopBtn" onclick="Stop()">Stop</button>
            <button id="ResetBtn" onclick="Reset()">Reset</button>
            
        </div>

    </div>


    <script src="./003/Clock.js"></script>
</body>
</html> */

// CSS

/* body{

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 

    background-color: rgb(14, 31, 53);
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

}

h1{

    color: aliceblue;
    font-size: 4rem;

}

#Clock-Container{

    display: flex;
    justify-content: center;
    align-items: center;

    height: 10;
    border: 2px white;

    margin-bottom: 3rem;

}

#Clock{

    font-size: 6.5rem;
    text-align: center;

    color: aliceblue;

    
    
}

#Display{

    font-size: 4rem;
    color: aliceblue;
    
    margin-bottom: 15px;

}

#Container{

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: rgb(30, 83, 104);

    border: none;
    border-radius: 10px;

    padding: 2.5em;

}

#Controls button{

    font-size: 1rem;

    padding: 5px 10px;
    margin: 5px;
    min-width: 110px;
    border-radius: 5px;
    
    cursor: pointer;
    color: white;

    border: none;

    transition: background-color 0.5s ease;

}

#StartBtn{

    background-color: rgb(62, 179, 140);
}

#StartBtn:hover{

    background-color: rgb(55, 161, 126);
}

#StopBtn{

    background-color: rgb(212, 53, 53);
}

#StopBtn:hover{

    background-color: rgb(163, 39, 39);
}

#ResetBtn{

    background-color: rgb(62, 89, 179);
}

#ResetBtn:hover{

    background-color: rgb(48, 69, 139);
}
 */