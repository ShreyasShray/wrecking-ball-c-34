class Ball{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            frictionAir: 0.004,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius*2;
        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("black");
        stroke("black");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}