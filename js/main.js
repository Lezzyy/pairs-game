var pseudo = document.getElementById('pseudo');
var ok = document.getElementById('ok');
var welcome = document.getElementById('welcome');
var value;
var img = document.getElementsByTagName('img');
var test = document.getElementById('test');
var index = 0;
var color = ["#3498DB", "#FF2D00", "#2E0927", "#04756F", "#85DB18", "#94090D", "#31353D", "#3498DB", "#FF2D00", "#2E0927", "#04756F", "#85DB18", "#94090D", "#31353D"];
var place;
shuffle();

ok.onclick = function() {
  value = pseudo.value;
  welcome.innerHTML = 'Welcome ' + value.toUpperCase() + ", let's play !";
  pseudo.style.display = 'none';
  ok.style.display = 'none';
}

function shuffle(){
  for(place=color.length-1; place>=1; place--){
  var choix= Math.floor(Math.random()*(place+1));
  var melange = color[place];
  color[place]=color[choix];
  color[choix]=melange;
  }
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    img[i].src = "";
    img[i].style.backgroundColor = color[i];

    var first = 0;
    var tab_result =[];
    console.log(tab_result[0]);
  });
}
