class Log extends BaseClass {
  constructor(x, y, height, angle) {
    var options = {
      'restitution': 0,
      'friction': 0,
      'density': 1.0,
      'isStatic': true
    }
    super(x, y, 20, height, angle, options)
    
    Matter.Body.setAngle(this.body, angle, options);
    this.image = loadImage('sprites/wood2.png')
  }
}