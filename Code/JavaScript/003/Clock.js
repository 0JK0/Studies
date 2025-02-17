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