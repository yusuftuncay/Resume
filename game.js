/* Saving  DarkMode State */
var darkMode;
localStorage.setItem('darkMode', darkMode);
if (localStorage.darkMode == true) {
    DarkMode();
}

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 16;
var count = 0;
var score=0;

// reading  last score value 
if(localStorage.score) {
  document.getElementById('score').innerHTML=localStorage.score; 
}

var max=0;  

var snake = {
  x: 160,
  y: 160,
  
  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,
  
  // keep track of all grids the snake body occupies
  cells: [],
  
  // length of the snake. grows when eating an apple
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};

// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  
  requestAnimationFrame(loop);
  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 10) {
    return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);
  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;
  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  
  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});
  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);
  // draw snake one cell at a time
  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {
      // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
      context.fillRect(cell.x, cell.y, grid-1, grid-1);  

      // snake ate apple
      if (cell.x === apple.x && cell.y === apple.y) {
        snake.maxCells++;
        score+=1;
        
        // saving score for next playing.
        localStorage.setItem('score', score);

        document.getElementById('score').innerHTML=score;
    
        // canvas is 400x400 which is 25x25 grids 
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }

      // check collision with all cells after this one (modified bubble sort)
      for (var i = index + 1; i < snake.cells.length; i++)
      {
        // snake occupies same space as a body part. reset game
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) { 
          if(score>max)
          {
            max=score;
          }
          snake.x = 160;
          snake.y = 160;
          snake.cells = [];
          snake.maxCells = 4;
          snake.dx = grid;
          snake.dy = 0;
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
          document.getElementById('high').innerHTML=max;
        }
      }
    }
  ); 
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself by checking that it's 
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)
  
  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

// start the game
requestAnimationFrame(loop);

/* Dark Mode */
function DarkMode() {
  document.body.classList.toggle("dark-mode"); /* Body */
  document.getElementsByClassName("footer")[0].classList.toggle("dark-mode"); /* Footer */

  var shadows = document.querySelectorAll('.box-shadow, .box-shadow-dark'); /* All Box Shadows */

  /* Box Shadows */
  for (var i = 0; i < shadows.length; i++) {
      if (shadows[i].classList.contains("box-shadow")) {
          shadows[i].classList.remove("box-shadow");
          shadows[i].classList.add("box-shadow-dark");

          /* LocalStorage */
          localStorage.darkMode == false;
      } 
      else if (shadows[i].classList.contains("box-shadow-dark")) {
          shadows[i].classList.remove("box-shadow-dark");
          shadows[i].classList.add("box-shadow");

          /* LocalStorage */
          localStorage.darkMode == true;
      }
  }

  /* Canvas Border & Score Color */
  var canvas = document.getElementById("game");
  var score = document.getElementById("score");
  var high = document.getElementById("high");
  //
  canvas.classList.toggle("dark-mode");
  score.classList.toggle("dark-mode");
  high.classList.toggle("dark-mode");
  // Toggle
  if (canvas.classList.contains("dark-mode")) {
    canvas.style.borderColor = "white";
    score.style.color = "white";
    high.style.color = "white";
  } else {
    canvas.style.borderColor = "black";
    score.style.color = "black";
    high.style.color = "black";
  }

  /* Footer Icon */
  if (shadows[0].classList.contains("box-shadow")) {
      document.getElementById("darkModeIcon").src = "images/light-mode-sun.png";
      document.getElementById("gameIcon").src = "images/light-mode-game.png";
  }
  else {
      document.getElementById("darkModeIcon").src = "images/dark-mode-sun.png";
      document.getElementById("gameIcon").src = "images/dark-mode-game.png";
  }
}