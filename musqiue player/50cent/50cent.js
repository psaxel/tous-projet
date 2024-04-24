const songs = [
    "50-cent-Intro.mp3",
    "50-Cent-What_Up_Gangsta.mp3",
    "50-Cent-Patiently_Waiting.mp3",
    "50-Cent-Many_Men_Wish_Death.mp3",
    "50-Cent-In_Da_Club.mp3",
    "50-Cent-High_All_The_Time.mp3",
    "50-cent-Heat.mp3",
    "50-Cent-If_I_Can't.mp3",
    "50-Cent-Blood_Hound.mp3",
    "50-Cent-Back_Down.mp3",
    "50-Cent-P.I.M.P..mp3",
    "50-Cent-Like_My _tyle.mp3",
    "50-Cent-Poor_Lil_Rich.mp3",
    "50-Cent-21_Questions.mp3",
    "50-Cent-Don't_Push_Me.mp3",
    "50-Cent-Gotta_Make_It_To_Heaven.mp3",
    "50-Cent-Wanksta.mp3",
    "50-Cent-U_Not_Like_Me.mp3",
    "50-Cent-Lifes_On_The_Line.mp3",
    "50-Cent-P.I.M.P.(Snoop_Dogg_Remix).mp3",
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
 source.src = "50musique/" + e.target.innerText;

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