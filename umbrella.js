class umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
            
        }
        this.body = Bodies.circle(x,y,50,options)
        
        this.r = 50;
        this.image = loadImage("images/walking Frame/walking_1.png");
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        pop();
        
    }


}