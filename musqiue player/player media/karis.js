const songs = [
    "Kaaris-x-Super-Mario.mp3",
    "Kaaris-Pas-De-Remede.mp3",
    "Kaaris-Binks.mp3",
    "Kaaris-Bizon.mp3",
    "Kaaris-Zoo.mp3",
    "Kaaris-ft-Booba-L.E.F.mp3",
    "Kaaris-Bouchon-De-Liege.mp3",
    "Kaaris-Ciroc.mp3",
    "Kaaris-Des-Le-Depart.mp3",
    "Kaaris-Je-Bibi.mp3",
    "Kaaris-MBM.mp3",
    "Kaaris-Paradis-Ou-Enfer.mp3",
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
 source.src = "musiques-ornoir/" + e.target.innerText;

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


    









