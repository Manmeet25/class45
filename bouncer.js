class Bouncer{
    constructor(x,y,r1){
        var options={
            isStatic: true,
        }
        this.body= Bodies.circle(x,y,r1,options);
        this.r1 = r1
        
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS)
        var pos = this.body.position
        ellipse(pos.x,pos.y,this.r1,this.r1-40);

    }

}