let snake;
let food;

let gridScale = 20

function setup() {
  createCanvas(400, 400);
  frameRate(10)

snake = new Snake()
positionFood()
}

function positionFood() {
  food = createRandomVector()
  food.mult(gridScale);
}

function createRandomVector() {
  return createVector(getRandomCol(), getRandomRow());
}

function getRandomRow() {
 return floor(random(floor(width) / gridScale))
}

function getRandomCol() {
  return floor(random(floor(height) / gridScale))
}

function draw() {
  background(52);

if (snake.checkIsEat(food)) {
  positionFood()
}

  snake.update()
  snake.show()

  fill(255, 0, 100);
  rect(food.x, food.y, gridScale, gridScale)
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(0, -1);
  }
    else if (keyCode === DOWN_ARROW) {
            snake.direction(0, 1)
  }
    else if (keyCode === LEFT_ARROW) {
            snake.direction(-1, 0)
  }
    else if (keyCode === RIGHT_ARROW) {
            snake.direction(1, 0)
  }
}