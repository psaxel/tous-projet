const songs = [
            "Daft-Punk.wav",
            "Dj-Windows7.mp3",
            "HouseMusic.mp3",
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

        songlist.onclick = function(e) {
         const source = document.getElementById('source')
         source.src = "songs/" + e.target.innerText;

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
        
        
            



        
        

        
        

