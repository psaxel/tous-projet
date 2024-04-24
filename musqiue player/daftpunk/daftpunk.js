const songs = [
    "Daft_Punk-Aerodynamic.mp3",
    "Daft_Punk-Crescendolls.mp3",
    "Daft_Punk-Digital-Love.mp3",
    "Daft_Punk-Face-to-Face.mp3",
    "Daft_Punk-Harder,Better,Faster,Stronger.mp3",
    "Daft_Punk-High-Life.mp3",
    "Daft_Punk-Nightvision.mp3",
    "Daft_Punk-One-More-Time.mp3",
    "Daft_Punk-Short-Circuit.mp3",
    "Kaaris-Bouchon-De-Liege.mp3",
    "Daft_Punk-Something-About-Us.mp3",
    "Daft_Punk-Superheroes.mp3",
    "Daft_Punk-Too-Long.mp3",
    "Daft_Punk-Veridis-Quo.mp3",
    "Daft_Punk-Voyager.mp3",
]       

const player = document.getElementById('player');

function cratesonglist() {
    const list = document.createElement("ol")
    for(let i =0;  i < songs.length; i++) {
        const item = document.createElement("li");
       item.appendChild(document.createTextNode(songs[i]));
       list.appendChild(item)
    }
    return list
}

     
const songlist = document.getElementById('songlist')
songlist.appendChild(cratesonglist())

// changer la source si besoin                           ------

songlist.onclick = function(e) {
 const source = document.getElementById('source')
 source.src = "musiquedf/" + e.target.innerText;

document.querySelector('#currentsong').innerText = `Now Playing: ${e.target.innerText}`

 
 player.load();
 player.play();
}

function playAudio(){
    if(player.readyState){
        player.play();
    }

}

function pauseAudio(){
    player.pause();
}

const slider = document.getElementById("volumeslider")
slider.oninput = function(e) {
    const volume = e.target.value
    player.volume = volume;

}

function updateprogress(){
    if (player.currentTime > 0) {
    const progressbar = document.getElementById("progress");
    progressbar.value = (player.currentTime / player.duration) * 100;
    }
}