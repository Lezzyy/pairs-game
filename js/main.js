var pseudo = document.getElementById('pseudo');
var ok = document.getElementById('ok');
var welcome = document.getElementById('welcome');
var value;
var img = document.getElementsByTagName('img');
var test = document.getElementById('test');
var index = 0;
var color = ["#3498DB", "#FF2D00", "#2E0927", "#04756F", "#85DB18", "#94090D", "#31353D", "#3498DB", "#FF2D00", "#2E0927", "#04756F", "#85DB18", "#94090D", "#31353D"];

//var img = color[Math.floor(Math.random()*color.length)];

ok.onclick = function() {
  value = pseudo.value;
  welcome.innerHTML = 'Welcome ' + value.toUpperCase() + ", let's play !";
  pseudo.style.display = 'none';
  ok.style.display = 'none';
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    img[i].src = "";
    img[i].style.backgroundColor = color[i];
  });
}
