const songs = [
    "AZ-New_Life.mp3",
    "AZ-I'm_Known.mp3",
    "AZ-How_Ya_Livin_feat_Nas.mp3",
    "AZ-Trading_Places_ Manasia.mp3",
    "AZ-What's_The_Deal_Half-A-Mil.mp3",
    "AZ-Love_Is_Love.mp3",
    "AZ-The_Pay_Back.mp3",
    "AZ-Just_Because.mp3",
    "AZ-Sosa.mp3",
    "AZ-It's_A_Boy_Thing.mp3",
    "AZ-Pieces-Of-A-Black-Man.mp3",
    "AZ-Last_Dayz.mp3",
    "AZ-Whatever_Happened.mp3",
    "2Pac-What'z_Ya_Phone_Number.mp3",
    "AZ-Betcha_Don't_Know.mp3",
    "AZ-Trial_Of_The_Century.mp3",
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
 source.src = "azmusique/" + e.target.innerText;

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