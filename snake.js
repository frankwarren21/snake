function Snake() {

  const self = this;

  self.head = Point(0,0);

  self.tail = [];

  self.xSpeed = 1;
  self.ySpeed = 0;

  self.update = update;
  self.show = show;
  self.direction = direction;
  self.checkIsEat = checkIsEat

  //grabs object, not colling method would need parenthesis to call method
  function update() {
    self.head.x = self.head.x + (self.xSpeed * gridScale);
    self.head.y = self.head.y + (self.ySpeed * gridScale);
  }
  function show() {
    fill(255)
    rect(self.head.x, self.head.y, gridScale, gridScale)
  }
    function direction(x, y) {
      self.xSpeed = x
      self.ySpeed = y;
    }

    function checkIsEat(food) {
      if (getDistanceToHead(food) < 1) {
        return true
      } else {
        return false
      }
    }

    function getDistanceToHead(food) {
     return dist(self.head.x, self.head.y, food.x, food.y)
    }

  //if starts with capital is class object  will know things about itself, if not will just execute code
  function Point(x,y) {
    return {
      x:x,
      y:y
    }
  }
}