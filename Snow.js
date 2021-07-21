class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0,
            friction: 0,
            isStatic:false
        }
    
        this.body = Bodies.circle(x, y, 10, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;


       
        imageMode(CENTER);
    
         image(this.image,pos.x,pos.y,10,10)
       
       
  
    }

}