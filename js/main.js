// VARIABLES

var pseudo = document.getElementById('pseudo');
var ok = document.getElementById('ok');
var welcome = document.getElementById('welcome');
var score = document.getElementById('score');
var clics = document.getElementById('clics');
var value;
var img = document.getElementsByTagName('img');
var test = document.getElementById('test');
var color = ["#3498DB", "#FF2D00", "#2E0927", "#04756F", "#85DB18", "#94090D", "#31353D", "#3498DB", "#FF2D00", "#2E0927", "#04756F", "#85DB18", "#94090D", "#31353D"];
var place;
var init = 0;
var tabResult = [];
var plage = img[0].src;
var clickLock = 0;
// FUNCTIONS

function shuffle() {
  for (place = color.length - 1; place >= 1; place--) {
    var choix = Math.floor(Math.random() * (place + 1));
    var melange = color[place];
    color[place] = color[choix];
    color[choix] = melange;
  }
}


function setBackgroundColor() {
  for (let i = 0; i < img.length; i++) {
    img[i].onclick = function() {
      if (img[i].src == plage && clickLock == 0) {

        img[i].src = "";

        img[i].style.backgroundColor = color[i];
        tabResult.push(i);
        init++;
        if (tabResult.length == 2) {
          clickLock = 1;
          if (color[tabResult[0]] !== color[tabResult[1]]) {
            // console.log(color[tabResult[0]] + " " + color[tabResult[1]]);
            setTimeout(function() {
              alert('YOU LOSE !');
              img[i].src = "img/plage.jpg";
              img[tabResult[0]].src = "img/plage.jpg";
              tabResult = [];
              clickLock = 0;
            }, 1000);
          } else {
            // console.log(color[tabResult[0]]);
            score.style.color = "#3498DB";
            score.innerHTML = "YOU WON !";
            tabResult = [];
          }
        }
      }
    }
  }
}


function name() {
  value = pseudo.value;
  welcome.innerHTML = 'Welcome ' + value.toUpperCase() + ", let's play !";
  pseudo.style.display = 'none';
  ok.style.display = 'none';
}

function playGame() {
  shuffle();
  setBackgroundColor();

}

playGame();



ok.onclick = name;
