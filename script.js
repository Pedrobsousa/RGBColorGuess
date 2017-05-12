
      //Variables
var numOfSquares = 6;
var colors = [];
var pickedColor;
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
//Color animation Variables
var currentHue = 0;
var hueAddition = 5;



function init() {
  setUpModeButtons();
  setUpSquares();
  colorAnimation();
  reset();
}

init();

      // Gives the "New colors" button the reset function

resetButton.addEventListener("click", function(){
    reset();
});

      //Function Block

      //Init and set ups on buttons and squares

      function setUpModeButtons() {
      //Mode buttons eventlisteners
      for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function() {
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
          this.classList.add("selected");
          this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
          reset();
          });
        }
      }

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function() {
        //Get color of clicked square and Compare to pickedColor
        var clickedColor = this.style["background-color"];
        if(clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
              } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
              }
            });
        }
      }

      // Resets Colors/Styles/text

function reset() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
      if(colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
      }else {
        squares[i].style.display = "none";
      }
    }
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";

  }

      // Change Colors

function changeColors(color) {
  //Loops through squares and changes their color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
    // Picks a Color with Math.random

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}
    //Generates Random Colors

function generateRandomColors(num) {
  //Makes an array add random colors to it and returns array
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
    //Generates random RGB color

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

    //Color animation

function colorAnimation() {
  var anicolor = 'hsl(' + currentHue + ',80%, 60%)';
  if(currentHue + hueAddition > 360)
  {
    currentHue = 0;
  }
  else {
    currentHue += hueAddition;
  }
  colorDisplay.style.color = anicolor;
  setTimeout(function(){colorAnimation();}, 1000/25);
}
