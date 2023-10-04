fetch ("/load")
.then(function (resp) {
  // body...
  return resp.json ();
}).then(function (data) {
  Rlist = JSON.stringify(data);
  list = JSON.parse (Rlist);
  console.log(list)
random_bg_color ();random_color();openFullscreen(); onloading ();
random_color();
Length=Object.keys (list).length-1
setInterval(function() {
  progress.value=audio.currentTime/audio.duration*100
total.innerText=(audio.duration/60+"").slice (0,4)
  current.innerText =((audio.currentTime/60)+"").slice (0,4)
  if (audio.currentTime==audio.duration) {
    if (repeater){
thiss.classList.add('fa-pause-circle' )
  thiss.classList.remove ('fa-play-circle');
      audio.currentTime=0
      console.log ("repeating")
      audio.play()
    }else {
      forward();
    }
  }
},1000 )
console.log("All files Loaded Successfully! ")
});
let Rlist,list;

function random_bg_color() {

  // Get a number between 64 to 256 ( getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 72;
  let green = Math.floor(Math.random() * 256) + 72;
  let blue = Math.floor(Math.random() * 256) + 100;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}
function random_color() {

  // Get a number between 64 to 256 ( getting lighter colors)
  let red = Math.floor(Math.random() * 256) - 90;
  let green = Math.floor(Math.random() * 256) - 94;
  let blue = Math.floor(Math.random() * 256) - 94;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.color = bgColor;
  random_bg_color();
}
let Curr
function openFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
let i=0
let total
let currentTime
let sname
let isplaying=false
let audio 
function ward(){
  if (i <Length){
  i+=1
  audio.src=list [0];
  audio.play ()
  isplaying=true
  }else if (i==Length) {
    i=Length-1
audio.src=list [Object.keys(list)[i]];
  audio.play ()
  isplaying=true
  }
  else {
 i=1
  audio.src=list [Object.keys(list)[i]];
  audio.play ()
  isplaying=true
  }
}
function onloading() {
  // body...

let a=document.getElementById("totalno")
let cur_no= document.getElementById("cur_no")
total= document.getElementById("total")
let pro= document.getElementById("progress")
current= document.getElementById("current")
sname= document.getElementById("Name")
thiss= document.getElementById("thiss")
a.innerText=Object.keys(list).length
sname.innerText=Object.keys(list)[i]
document.title=Object.keys(list)[i]
cur_no.innerText=i+1
audio = document.createElement ("AUDIO");
audio.src=list [Object.keys(list)[i]];
sname.innerText=Object.keys(list)[i]
  
value=audio.volume*100
}

function backward() {
  // body...
  if (i>0){
i-=1
  audio.src=list [Object.keys(list)[i]];
  audio.play ()
  isplaying=true
  }else {
i=Length
audio.src=list [Object.keys(list)[i]];
  audio.play ()
  isplaying=true
  }
  cur_no.innerText=i+1
document.title=Object.keys(list)[i]
sname.innerText=Object.keys(list)[i]
total.innerText=audio.duration /60
thiss.classList.add('fa-pause-circle' )
  thiss.classList.remove ('fa-play-circle');
}
function forward() {
  // body...
  if (i<Length){
i+=1
  audio.src=list [Object.keys(list)[i]];
  audio.play ()
  isplaying=true
  }else {
i=0
audio.src=list [Object.keys(list)[i]];
  audio.play ()
  isplaying=true
  }
  cur_no.innerText=i+1
sname.innerText=Object.keys(list)[i]
document.title=Object.keys(list)[i]
total.innerText=audio.duration/60
thiss.classList.add('fa-pause-circle' )
  thiss.classList.remove ('fa-play-circle');
}
function set (argument){
  audio.currentTime=argument.value*audio.duration/100
}
function setv (argument){
  audio.volume=argument.value/100
}
let repeater =false
function repeat(argument) {
  // body...
  if (repeater){
    repeater=false
    argument.innerText="🔁"
  }else{
    repeater=true
    argument.innerText="🔂"
  }
}
function mpb(thiss){
if  (isplaying){
  audio.pause();
  isplaying=false;
  thiss.classList.add ('fa-play-circle');
  thiss.classList.remove('fa-pause-circle' )
  }else {
    audio.play ();
    isplaying=true;
  thiss.classList.add('fa-pause-circle' )
  thiss.classList.remove ('fa-play-circle');
    
  }
}
function load (){
fetch ("/load")
.then(function (resp) {
  // body...
  return resp.json ();
}).then(function (data) {
Rlist = JSON.stringify(data);
  list = JSON.parse (Rlist);
Length=Object.keys (list).length-1
})
}
