// Initialize the variables
let masterSongName=document.getElementById("masterSongName");

let songIndex = 0;
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    {songsName:"Best Of NCS ", filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songsName:"Warior", filepath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songsName:"Unstopable", filepath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songsName:"Someting like this", filepath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songsName:"Legends are made", filepath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songsName:"Do I know You", filepath:"songs/6.mp3", coverPath:"covers/6.jpg"}

]

songItem.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src  = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =   songs[i].songsName;
})
// Play the Audio
let audioElements = new Audio("songs/1.mp3");
// audioElements.play();
//handle the play pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElements.paused || audioElements.currentTime<=0){
        audioElements.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity =1;
    }
    else{
        audioElements.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity =0;
    }
})
// Adding event listeners
// audioElements.addEventListener("Time", ()=>{
//     console.log("Time Update");
//     progress = parseInt((audioElements.currentTime/audioElements.duration)*100);
//     console.log(progress);
//     myProgressBar.value = progress;
// });

audioElements.addEventListener("timeupdate", ()=>{
    // console.log("Time Update");
    progress = parseInt((audioElements.currentTime/audioElements.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", ()=>{
    audioElements.currentTime = myProgressBar.value * audioElements.duration/100;
})
const makeAll = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
        
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        console.log(e.target);
        makeAll();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElements.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songsName;

        audioElements.currentTime = 0;
        audioElements.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

    })
})

document.getElementById("next").addEventListener("click", ()=>{
    if (songIndex > 6){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElements.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songsName;

    audioElements.currentTime = 0;
    audioElements.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})
document.getElementById("previous").addEventListener("click", ()=>{
    if (songIndex <=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElements.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songsName;
    audioElements.currentTime = 0;
    audioElements.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})