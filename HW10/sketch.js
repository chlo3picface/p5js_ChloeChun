let x = 25;

function setup() {
  createCanvas(600, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
}

function draw() {
  background(150, 199, 214);
  //circle sun
  fill("yellow"); //yellow
  stroke("orange"); //orange
  strokeWeight(20); // large outline
  circle(550, 50, 100);

  //mountains
  fill("gray");
  stroke(0);
  strokeWeight(1)
  triangle(-200, 600, 500, 600, 85, 100)
  triangle(100, 400, 800, 600, 185, 200)
  
  //green grass
  stroke("green"); //green stroke
  strokeWeight(1);
  fill("green");
  rect(0, 300, 600, 100);

  //tree trunks
  //tree 1
  stroke("brown");
  strokeWeight(1);
  fill("brown");
  rect(70, 150, 30, 200);
  //tree 2
  rect(200, 150, 30, 200);

  //tree leaves
  //tree leaves 1
  stroke("green");
  fill("green");
  triangle(20, 100, 150, 100, 85, 30);
  triangle(20, 150, 150, 150, 85, 80);
  triangle(20, 200, 150, 200, 85, 130);
  triangle(20, 250, 150, 250, 85, 180);
  //tree leaves 2
  triangle(150, 250, 280, 250, 215, 180);
  triangle(150, 200, 280, 200, 215, 130);
  triangle(150, 150, 280, 150, 215, 80);
  triangle(150, 100, 280, 100, 215, 30);

  //house
  stroke(77, 61, 31); //base
  fill(133, 110, 69);
  rect(350, 200, 250, 150);
  fill(77, 61, 31); //roof
  triangle(620, 200, 340, 200, 460, 100);
  rect(440, 250, 50, 100); //door
  fill(140, 60, 31); //chimney
  rect(520, 110, 30, 70)
  fill(168, 230, 225); //windows
  rect(370, 220, 50, 70);
  rect(510, 220, 50, 70);

  //emoji
  textSize(50)
  text("🌸", 100, 330) //flower

  //mouse
  circleX = 20
  circleY = 20

stroke(255)
fill(255)  
ellipse(mouseX,mouseY,circleX,circleY)
ellipse(mouseX-5,mouseY-5,circleX,circleY)
ellipse(mouseX-10,mouseY+10,circleX,circleY)
ellipse(mouseX-10, mouseY-10, circleX, circleY)
ellipse(mouseX+5, mouseY-15, circleX, circleY)


  
  //animation
  fill(255);
  circle(x, height / 2, 50);

  // Increase the x variable by 5
  x += 5;

  // Reset the circle position after it moves off the right side
  if (x > width + 25) {
    x = -25;
  }
}
