var estadoBlender = "Apagada";
var soundBlender = document.getElementById("blender-sound");
var buttomBlender = document.getElementById("blender-button-sound");
var Blender = document.getElementById("blender");

function controlarBlender(){
    if (estadoBlender == "Apagada"){
        estadoBlender = "Encendida";
        makeBrrBrr();
        Blender.classList.add("active");
       /* console.log("Esta Prendido");*/
    }else{
        estadoBlender = "Apagada";
        makeBrrBrr();
        Blender.classList.remove("active");
       /* console.log("Esta Apagado");*/
    }
}

function makeBrrBrr(){
    if (soundBlender.paused){
        buttomBlender.play();
        soundBlender.play();
    }else{
        buttomBlender.play();
        soundBlender.pause();
        soundBlender.currentTime=0;
    }
}