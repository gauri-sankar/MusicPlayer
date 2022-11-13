let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
 
let playpause_btn = document.querySelector(".playpausetrack");
let next_btn = document.querySelector(".nexttrack");
let prev_btn = document.querySelector(".prevtrack");
 
 
let track_index = 0;
let isPlaying = false;
 
let curr_track = document.createElement('audio');
 
let track_list = [
  {
    name: "Logical Point of View-The boys",
    artist: "Robert Mitchum",
    image: "Images/boys.jpg",
    path: "songs/boys.mp3"
  },
  {
    name: "Bcs-theme",
    artist: "Little Barrie",
    image: "Images/bcs.jpg",
    path: "songs/bcs.mp3"
  },
  {
    name: "Stranger Things",
    artist: "L'Orchestra Cinematique",
    image: "Images/sth.jpg",
    path: "songs/stranger-things-124008.mp3",
  },
];
curr_track.src = track_list[track_index].path;
track_art.style.backgroundImage =
"url(" + track_list[track_index].image + ")";
track_name.textContent = track_list[track_index].name;
track_artist.textContent = track_list[track_index].artist;
now_playing.textContent =
"PLAYING " + (track_index + 1) + " OF " + track_list.length;



function loadTrack(track_index) {
    
    random_bg_color();

    curr_track.src = track_list[track_index].path;
    curr_track.load();
   
    track_art.style.backgroundImage =
       "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
       "PLAYING " + (track_index + 1) + " OF " + track_list.length;
   
   
    curr_track.addEventListener("ended", nextTrack);
   
  }
   
  function random_bg_color() {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
   
   
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.background = bgColor;

}
  
  function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
  }
   
  function playTrack() {
    curr_track.play();
    isPlaying = true;
   
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
   
  function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
   
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  }
   
  function nextTrack() {
    if (track_index < track_list.length - 1)
      track_index += 1;
    else track_index = 0;
   
    loadTrack(track_index);
    pauseTrack();
    playTrack();
  }
   
  function prevTrack() {
    if (track_index > 0)
      track_index -= 1;
    else track_index = track_list.length - 1;
     
    loadTrack(track_index);
    pauseTrack();
    playTrack();
  }