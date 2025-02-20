var arr = [
  {
    songname: "Sanam Teri Kasam",
    url: "./songs/Sanam Teri Kasam - Sanam Teri Kasam 128 Kbps.mp3",
    image: "./images/Sanam.jpg",
    time: "5:14",
  },
  {
    songname: "Udi Teri Aankho mai",
    url: "./songs/Udi Tere Aankhoin Se Guzaarish 128 Kbps.mp3",
    image: "./images/udi.jpg",
    time: "3:22",
  },
  {
    songname: "Piyu bole",
    url: "songs/Hui Main Parineeta Sonu Nigam 128 Kbps.mp3",
    image: "./images/Parineeta.jpg",
    time: "2:46",
  },
  {
    songname: "Tum he ho",
    url: "songs/new_128_01 - Tum Hi Ho - PagalSongs.com.mp3",
    image: "./images/tum.jpg",
    time: "4:22",
  },
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play=document.querySelector("#play");
var backward=document.querySelector("#backward");
var forward=document.querySelector("#forward");

var audio = new Audio();

var selectedSong = 0;

function mainFunction() {
  var clutter = "";
  arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id=${index}>
                    <div class="part1">
                <img src=${elem.image}>
                    <h2>${elem.songname}</h2>
                    </div>
                    <h6>${elem.time}</h6>
                    
            </div>
              `;
  });
  allSongs.innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].image})`;
}

mainFunction();
allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  mainFunction();
  play.innerHTML =`<i class="ri-pause-mini-fill"></i>`
  flag=1
  
  audio.play();
});

var flag=0;
play.addEventListener("click",function(){
  if(flag==0){
play.innerHTML =`<i class="ri-pause-mini-fill"></i>`
mainFunction()
audio.play()
flag =1
  }else{
    play.innerHTML =`<i class="ri-play-mini-fill"></i>`
    mainFunction()
    audio.pause()
flag =0
  }
  
})

forward.addEventListener("click",function(){
  if(selectedSong < arr.length-1){
    selectedSong++
    mainFunction()
    audio.play()
    
  }else{
    forward.style.opacity=0.4
  }
})

backward.addEventListener("click",function(){
  if(selectedSong >0){
    selectedSong--
    mainFunction()
    audio.play()
    
  }else{
    backward.style.opacity=0.4
  }
})