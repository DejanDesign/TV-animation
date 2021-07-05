alert('press blue button for start and red button for pause ');


function start(){
    document.getElementById("back").style.animationPlayState = "running";
    document.querySelector(".plane").style.animationPlayState = "running";
    document.getElementById("FirstOne").style.animationPlayState = "running";
    document.getElementById("LastOne").style.animationPlayState = "running";
    document.getElementById("Scooter").style.animationPlayState = "running";
    document.getElementById("Tank").style.animationPlayState = "running";
    document.getElementById("Driver").style.animationPlayState = "running";
    document.getElementById("Hair").style.animationPlayState = "running";

}

function stop() {
    document.getElementById("back").style.animationPlayState = "paused";
    document.querySelector(".plane").style.animationPlayState = "paused";
    document.getElementById("FirstOne").style.animationPlayState = "paused";
    document.getElementById("LastOne").style.animationPlayState = "paused";
    document.getElementById("Scooter").style.animationPlayState = "paused";
    document.getElementById("Tank").style.animationPlayState = "paused";
    document.getElementById("Driver").style.animationPlayState = "paused";
    document.getElementById("Hair").style.animationPlayState = "paused";
}





