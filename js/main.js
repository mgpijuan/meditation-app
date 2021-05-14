/* ** VARIABLES ** */
// una vegada anomenades les variables, després les podrem utilitzar-les sense nomenarles de nou (exemple en els listeners)
/* HTML DOM Variables */
const video = document.querySelector(".video-container video");
//busca en el html la class video-container 

const timeSelect = document.querySelectorAll(".time-select button");
const play = document.querySelector(".play");
const timeDisplay = document.querySelector(".time-display");
// svg ?
// const meditationSelect = ..

/* Program Variables */
let duration = 600;



/* ** LISTENERS ** */
// escoltar quan l'usuari selecciona el temps de meditació, cambiar la variable tiempo meditación)
timeSelect.forEach(button =>{
    button.addEventListener("click", function(){
        //modificar la variable (const duration) duración de la meditación
        duration = this.value; //como pillo la duración del boton?
        //en HTML ponemos data-time y los segundos
        // cambiar display
        timeDisplay.textContent = duration/60;
    });
});

// boton play/pause: llamar a la funcion que arranque/pare vídeo, y contador
// play


// meditationSelect



/* ** FUNCIONES ** (handles, lógica y outputs) */