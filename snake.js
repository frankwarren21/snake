function Snake() {

  const self = this;

  self.head = Point(0,0);

  self.tail = []


  self.xSpeed = 1;
  self.ySpeed = 0;

  self.update = update;
  self.show = show;
  self.direction = direction;
  self.checkIsEat = checkIsEat

  //grabs object, not colling method would need parenthesis to call method
  function update() {
    self.tail.map(function(item, index, collection) {
      let nextItem = collection[index + 1];
      item.x = nextItem? nextItem.x : self.head.x;
      item.y = nextItem? nextItem.y : self.head.y;
    })

    self.head.x = self.head.x + (self.xSpeed * gridScale);
    self.head.y = self.head.y + (self.ySpeed * gridScale);

    self.head.x = constrain(self.head.x, 0, width - gridScale)
    self.head.y = constrain(self.head.y, 0, height - gridScale)

    checkForDeath()
  }

  function checkForDeath() {
    self.tail.forEach(function (point){
      if (getDistanceToHead(point) < 1) {
        //reset
        self.tail = []
        self.head = Point(0, 0)
      }
    })
  }
  function show() {
    fill(255)
    rect(self.head.x, self.head.y, gridScale, gridScale)

    self.tail.forEach(function (point) {
      rect(point.x, point.y, gridScale, gridScale);
    })
  }
    function direction(x, y) {
      self.xSpeed = x
      self.ySpeed = y;
    }

    function checkIsEat(food) {
      if (getDistanceToHead(food) < 1) {
        self.tail.push(Point(self.head.x, self.head.y));
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