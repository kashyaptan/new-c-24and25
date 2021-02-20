class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50)
    var options = {
      'friction': 0.3,
    }
    this.image = loadImage('sprites/enemy.png')
  }
}