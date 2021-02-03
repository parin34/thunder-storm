class Drops{
    constructor(x,y){

        var options={
            restitution:0.4,
            friction:0,
            density:0.4
        }

        this.r = 5;
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);

    }
updateY(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
}

    display(){

        var pos = this.body.position;
        push()
         
          ellipseMode (RADIUS);
          fill (202,10,200);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop()
    }
}