const weatherForm = document.querySelector(".WeatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "16d4ff7734ff4ae0a2d34030251902";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{

            const weatherData = await GetWeatherData(city);
            DisplayWeatherInfo(weatherData);

        }catch(error){

            console.error(error);
            DisplayError(error);

        }

    } else{

        DisplayError("Please enter a city")

    }

});

async function GetWeatherData(city) {
    
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}=${city}&aqi=no`;

    const response = await fetch(apiUrl);

    console.log(response);

}

function DisplayWeatherInfo(data) {
    
}

function GetWeatherEmoji(weatherID) {
    
}

function DisplayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}

//<!DOCTYPE html>
{/* <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>

    <form class="WeatherForm">

        <input type="text" class="cityInput" placeholder="Enter city">
        <button type="submit">Get Weather</button>

    </form>

    <div class="card" style="display: none;">
        
    </div>
    

    <script src="./003/Weather.js"></script>
    
</body>
</html>
 */}


/*  body{

    font-family: Arial, Helvetica, sans-serif;
    color: black;

    background-color: rgb(20, 23, 44);

    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.WeatherForm{

    margin: 20px;

}

.cityInput{

    padding: 10px;
    margin: 10px;

    border: 2px solid rgb(29, 29, 29);
    border-radius: 10px;

    font-size: 1.5rem;
    font-weight: bold;

    width: 20rem;

}

button[type="submit"]{

    padding: 10px 20px;

    font-weight: bold;
    font-size: 1rem;

    background-color: rgb(13, 165, 89);
    color: white;

    border: none;
    border-radius: 5px;

    cursor: pointer;
}

button[type="submit"]:hover{

    background-color: rgb(14, 180, 97);

}

.card{

    background: linear-gradient(180deg,  rgb(99, 219, 219), rgb(98, 172, 233));
    padding: 50px;

    box-shadow: 2px 2px 5px rgb(0, 0, 0);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

}

h1{

    font-size: 2.5rem;

    margin-top: 0;
    margin-bottom: 25px;
}

p{

    font-size: 1rem;
    margin: 5px 0;

}

.cityDisplay, .tempDisplay{

    font-size: 2.5rem;
    font-weight: bold;
    
    margin-bottom: 25px;

}


.humidityDisplay{

    font-style: italic;
    font-weight: bold;
    font-size: 1rem;

}

.WeatherEmoji{

    margin: 0;
    font-size: 7rem;

}

.errorDisplay{

    font-size: 1.5rem;
    font-weight: bold;

} */