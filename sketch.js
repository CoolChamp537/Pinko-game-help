var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,155));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,235));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,315));
  }


  //Fifth row of Plinko objects
  for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,395));
  }

  //create particle objects
    //particles = new Particles(Math.round(random(20,780)),10,40)
    for (var j = 20; j < width - 20; j = Math.round(random(50,100))){
      particles.push(new Particles(j,10))
    }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  particles.display()
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setStatic(particles.body,false)
  }
}