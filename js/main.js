var pseudo = document.getElementById('pseudo');
var ok = document.getElementById('ok');
var welcome = document.getElementById('welcome');
var value;
var color = ["#3498DB", "FF2D00", "#2E0927", "#04756F", "#85DB18", "#94090D", "#31353D"]
var img = document.getElementsByTagName('img');
var test = document.getElementById('test');
var panda = ["img/panda.jpg"];

//var img = color[Math.floor(Math.random()*color.length)];

ok.onclick=function() {
  value = pseudo.value;
  welcome.innerHTML= 'Welcome '+ value.toUpperCase() + ", let's play !";
  pseudo.style.display='none';
  ok.style.display='none';
}



for (var i=0; i<img.length; i++){
  img[i].addEventListener("click", function changeColor(){
    img[i].style.backgroundColor="#3498DB";
  });
}


/*img[0].addEventListener("click", changeColor);

function changeColor(){
  img[0].style.visibility="hidden";
  //img[0,1,2,3].style.color="purple";
}*/
