const songs = [
    "2Pac-Ambitionz_Az_A_Ridah.mp3",
    "2Pac-All_About_U.mp3",
    "2Pac-Skandalouz.mp3",
    "2Pac-Got_My_Mind_Made_Up.mp3",
    "2Pac-How_Do_You_Want_It.mp3",
    "2Pac-2_Of_Amerikaz_Most_Wanted.mp3",
    "2Pac-No_More_Pain.mp3",
    "2Pac-Heartz_Of_Men.mp3",
    "2Pac-Life_Goes_On.mp3",
    "2Pac-Only_God_Can_Judge_Me.mp3",
    "2Pac-Tradin_War_Stories.mp3",
    "2Pac-California_Love.mp3",
    "2Pac-I_Ain_t_Mad_At_Cha.mp3",
    "2Pac-What'z_Ya_Phone_Number.mp3",
    "2Pac-Can't_C_Me.mp3",
    "2Pac-Shorty_Wanna_Be_A_Thug.mp3",
    "2Pac-Holla_At_Me.mp3",
    "2Pac-Wonda_Why_They_Call_U_Bitch.mp3",
    "2Pac-When_We_Ride.mp3",
    "2Pac-Thug_Passion.mp3",
    "2Pac-Picture_Me_Rollin.mp3",
    "2Pac-Check_Out_Time.mp3",
    "2Pac-Ratha_Be_Ya_N____.mp3",
    "2Pac-All_Eyez_On_Me.mp3",
    "2Pac-Run_Tha_Streetz.mp3",
    "2Pac-Ain_t_Hard_2_Find.mp3",
    "2Pac-Heaven_Ain't_Hard_2_Find.mp3",
    "2Pac-California_Love_Short_Radio_Edit.mp3",
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
 source.src = "2pacm/" + e.target.innerText;

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