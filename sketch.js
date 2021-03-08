const Engine = Matter.Engine;
const World = Matter.World;
const  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var s = 0;
var mousePosition;
var count = 0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
if(count<5){
   if(particles != null){
    particles.display();
     if(particles.body.position.y>600){
     if(particles.body.position.x>0&&particles.body.position.x<80)
     score = score + 500;
     else if(particles.body.position.x>80&&particles.body.position.x<160)
     score = score + 400;
     else if(particles.body.position.x>1600&&particles.body.position.x<240)
     score = score + 300;
     else if(particles.body.position.x>240&&particles.body.position.x<320)
     score = score + 200;
     else if(particles.body.position.x>320&&particles.body.position.x<400)
     score = score + 100;
     else if(particles.body.position.x>400&&particles.body.position.x<480)
     score = score + 100;
     else if(particles.body.position.x>480&&particles.body.position.x<560)
     score = score + 200;
     else if(particles.body.position.x>560&&particles.body.position.x<640)
     score = score + 300;
     else if(particles.body.position.x>640&&particles.body.position.x<720)
     score = score + 400;
     else if(particles.body.position.x>720&&particles.body.position.x<800)
     score = score + 500;
     s++;
     particles = null;
     }
    }
  }

  else{
    textSize(50);
    fill("blue");
  text("GAME END", 300, 300);
  }


   fill (250);
   textSize (20);
   text("500", 20, 500);
   text("400", 105, 500);
   text("300", 185, 500);
   text("200", 265, 500);
   text("100", 345, 500);
   text("100", 425, 500);
   text("200", 505, 500);
   text("300", 585, 500);
   text("400",665, 500);
   text("500", 745, 500);
   text("SCORES :"+score, 50,25);
  
}

function mouseReleased(){
  if(count<5){
  if(mouseY<301)
  mousePosition = mouseY;
  else 
  mousePosition = 300;
  particles = new Particle(mouseX, mousePosition, 10);
  count++;
  }
}