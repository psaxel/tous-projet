const songs = [
    "Ice-Cube-Pushin_Weight.mp3",
    "IceCube-check_Yo_Self.mp3",
    "Ice-Cube-We_Be_Clubbin.mp3",
    "Ice-Cube-$100_Dollar_Bill_Ya_ll.mp3",
    "Ice-Cube-One_Upon_A_Time_In_The_Projects.mp3",
    "Ice-Cube-Bow_Down.mp3",
    "Ice-Cube-Hello.mp3",
    "Ice-Cube-You_Can_Do_It.mp3",
    "Ice-Cube-You_Know_How_We_Do_It.mp3",
    "Ice-Cube-it_Was_A_Good Day.mp3",
    "Ice-Cube-Bop_Gun.mp3",
    "Ice-Cube-What_Can_I_Do.mp3",
    "Ice-Cube-My_Summer_Vacation.mp3",
    "Ice-Cube-Steady_Mobbin.mp3",
    "Ice-Cube-Jackin'_For_Beats.mp3",
    "Ice-Cube-The_Nigga_Ya_Love_To_Hate.mp3",
    "Ice-Cube-In_The_Late_Night_Hour.mp3",
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
 source.src = "icemusique/" + e.target.innerText;

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