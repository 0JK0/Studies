const slides = document.querySelectorAll(".Slides img");

let slidesIndex = 0;
let IntervalId = null;

document.addEventListener("DOMContentLoaded", InitSlider);

function InitSlider(){

    if(slides.length > 0){

        slides[slidesIndex].classList.add("CurrentSlide");
        IntervalId = setInterval(NextSlide, 5000);

    }

}

function ShowSlide(index){

    if(index >= slides.length){

        slidesIndex = 0;

    } else if( index < 0){

        slidesIndex = slides.length - 1;

    }

    slides.forEach(slide => {slide.classList.remove("CurrentSlide")});

    slides[slidesIndex].classList.add("CurrentSlide");

}

function PrevSlide(){

    slidesIndex--;
    ShowSlide(slidesIndex);

}

function NextSlide(){

    slidesIndex++;
    ShowSlide(slidesIndex);


}

// CSS (NOW ACTUALLY FUNCTION IMPORTAT /o/)


/* .Slider{

    position: relative;

    width: 100%;
    height: 100vh;
    margin-top: 10vh; 
    overflow: hidden;

    align-items: center;
    justify-content: center;

}

.Slider img{

    width: 50rem;
    height: 50rem;
    display: none;

    margin: auto;
    align-items: center;
    justify-content: center;
}

img.CurrentSlide{

    display: block;

    animation-name: fade;
    animation-duration: 1.5s;

}

.Slider button{

    position: absolute;
    
    top: 50%;
    transform: translateY(-50%);

    font-size: 2rem;
    background-color: rgba(0, 0, 0, 0.61);
    color: white;

    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.Prev{

    left: 0;

}

.Next{

    right: 0;

}

@keyframes fade {

    from {opacity: .5}
    to {opacity: 1}

} */


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
    

    <div class="Slider">

        <div class="Slides">

            <img class="Slide" src="./imgs/img1.jpg" alt="Image # 1"></img>
            <img class="Slide" src="./imgs/img2.jpg" alt="Image # 2"></img>
            <img class="Slide" src="./imgs/img3.jpg" alt="Image # 3"></img>
            <img class="Slide" src="./imgs/img4.jpg" alt="Image # 4"></img>
            <img class="Slide" src="./imgs/img5.jpg" alt="Image # 5"></img>
            <img class="Slide" src="./imgs/img6.jpg" alt="Image # 6"></img>
            <img class="Slide" src="./imgs/img7.png" alt="Image # 7"></img>

        </div>

        <button class="Prev" onclick="PrevSlide()">&#10094</button>
        <button class="Next" onclick="NextSlide()" >&#10095</button>

    </div>

    <script src="./003/ImageSlider.js"></script>
    
</body>
</html>


 */