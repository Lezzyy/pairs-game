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
      img[i].src = "";
      img[i].style.backgroundColor = color[i];

      tabResult.push(i);
      init++;

      if (tabResult.length == 2) {
        if (color[tabResult[0]] == color[tabResult[1]]) {
          console.log(color[tabResult[0]]);
          score.innerHTML="YOU WON !";
          // clics.innerHTML = (tabResult.length);
          tabResult = [];
        } else if (tabResult[0] !== tabResult[1]) {
          alert('perdu');
          // score.innerHTML="YOU LOSE !";
          img[i].src = "img/plage.jpg";
          img[tabResult[0]].src = "img/plage.jpg";
          console.log(img[tabResult[0]]);
          // clics.innerHTML = (tabResult.length);

          tabResult = [];
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









// for (let i = 0; i < img.length; i++) {
//   img[i].addEventListener("click", function() {
//     img[i].src = "";
//     img[i].style.backgroundColor = color[i];
//
//     tabResult.push(color[i]);
//     init++;
//     if (tabResult.length == 2) {
//       if (tabResult[0] == tabResult[1]) {
//         console.log(tabResult);
//         alert("gagné");
//         tabResult = [];
//       } else if (tabResult[0] !== tabResult[1]) {
//         alert('perdu');
//         img[i].src = "img/plage.jpg" ;
//         img[i-1].src = "img/plage.jpg" ;
//         console.log(img[i]);
//         tabResult = [];
//       }
//     }
//   });
// }
