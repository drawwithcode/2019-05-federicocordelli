var capture;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  // put setup code here
}

function draw() {

  push();
  background(255,0,0);
  pop();

  var myFeed = capture.loadPixels();

  push();
imageMode(CENTER);
  image(myFeed, width/2, height/2, windowWidth *1.640, windowHeight*1.480);
    filter(GRAY);
    pop();




    for (var x= 25; x < windowWidth; x +=25) {
      for (var y = 25; y < windowHeight; y += 25) {
        var distance = dist(x, y, mouseX, mouseY);

        var remap = map(distance, 0, 600, 0, 25);

        fill("red");
        noStroke();

        ellipse(x,y,remap);
      }
    }
  // put drawing code here
}
