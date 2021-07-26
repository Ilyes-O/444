class Bomb1 {
    constructor(x, y,r) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      }
      this.body = Bodies.ellipse(x, y, 20, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      strokeWeight(2)
      stroke("green");
      ellipse(0, 0, this.r);
      pop();
    }
  };