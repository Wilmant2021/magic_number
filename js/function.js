let number;
let attempts;
let numbersInputs = [];
let numberInput;

let songs = ["resources/audio/Aparentemente.mp3", "resources/audio/asi_me_hizo_Dios.mp3", 
    "resources/audio/de_millon_a_cero.mp3", "resources/audio/el_dilema.mp3", "resources/audio/el_rico_cuji",+
    "resources/audio/la_consentida.mp3", "resources/audio/la_indiferencia.mp3",
    "resources/audio/la_indiferencia.mp3", "resources/audio/seyora.mp3", "resources/audio/todo_de_cabeza.mp3",
    "resources/audio/tu_veras_si_me_crees.mp3"
];

let index = Math.floor(Math.random()*10);
/*
var audioElement = document.getElementById('audio');
audioElement.src = songs[index];
audioElement.load();
*/

function generateNumber(){
    number = Math.floor(Math.random()*100)+1;
    return number;
}

function saveNumber(){
    numberInput = parseInt(document.getElementById("input").value,10)
    numbersInputs.push(numberInput);
    document.getElementById("number_attempts").innerHTML++;
    document.getElementById("numbers_entered").innerHTML = numbersInputs.join(', ');
    if(parseInt(document.getElementById("number_attempts").innerHTML) < 10){
        comparateNumbers();
    }else{
        document.getElementById("input").disabled = true;
        alert("Game over");
    }
    console.log(numbersInputs);
}

function comparateNumbers(){
    if(number == numberInput){
        //Ganaste
        document.getElementById('result').innerText = "Congratulations you won"
        document.body.style.backgroundImage = 'url("resources/img/fondo_ronaldo.gif")';
    }else{
        if(number > numberInput){
            //El numero es mayor
            document.getElementById('result').innerText = "The number is greater"
        }else{
            //El numero es menor
            document.getElementById('result').innerText = "The number is smaller"
        }
    }
}

function toggleAudio(){
    const audio = document.getElementById("audio");
    const audioIcon = document.getElementById("icon_music");
    if(audio.paused){
        audio.play().catch(error => {
            console.error('Error al reproducir el audio:', error);
        });
        audioIcon.classList.remove('fa-volume-mute');
        audioIcon.classList.add('fa-music');
    } else{
        audio.pause();
        audioIcon.classList.remove('fa-music');
        audioIcon.classList.add('fa-volume-mute');
    }

}

console.log(generateNumber());