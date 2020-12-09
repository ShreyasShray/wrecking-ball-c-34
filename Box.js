class Box{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1,
            density: 0.04
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("green");
        strokeWeight(4);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
    }
}