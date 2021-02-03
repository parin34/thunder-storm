const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rain;
var man;
var thunder,thunder1;
var drops = [];
var Maxdrops = 100;
function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    man = new umbrella(200,500);   
    
    
    if(frameCount % 150 === 0){
       
      for(var i =0; i < Maxdrops ; i= i+1){
        drops.push(new Drops(random(0,400),random(0,400)))
      }
    }

    Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(0);

  man.display();

  
  
    if (frameCount %80 ===0){
     
     var  rand =  Math.round(random(1,4))
      thunder = createSprite(random(10,370),random(10,30), 10,10);
      switch (rand){
          case 1: thunder.addImage("t1",t1);
          break;
          case 2: thunder.addImage("t2",t2);
          break;
          case 3: thunder.addImage("t3",t3);
          break;
          case 4: thunder.addImage("t4",t4);
          break;
          default: break;
      }
      thunder.scale = random(0.3,0.6)
      thunder.lifetime = 10;
    }



  for(var i=0;i<Maxdrops;i++){
    drops[i].updateY();
    drops[i].display();
  }
 drawSprites();
}   

