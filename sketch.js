var capture;
var imagesOk = [];
var j = 1;

function preload(){
  for (var i=1; i<5; i++) {
   imagesOk[i] = loadImage("addons/"+i+".png");
 }

  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  noCursor();


  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  // put setup code here
}

function keyPressed(SPACEBAR) {
   save("helloWorld.png");
}


function draw() {

  push();
  background(255,0,0);
  pop();

  var myFeed = capture.loadPixels();

  push();
  imageMode(CENTER);
  image(myFeed, width/2, height/2, 750, 480);
    pop();
    imageMode(CENTER);
    blend(imagesOk[j], 0, 0, 750, 480, (width-750)/2, (height-480)/2, 750, 480, DARKEST);
    // blend(imagesOk[j], 0, 0, 750, 480, 308, 73, 750, 480, DARKEST);

      textFont("Roboto");
      textSize(60);
      textStyle(BOLD);
      fill(255,255,255);
      text("CLICK TO CHANGE FILTER",mouseX,mouseY);
      text("SPACEBAR TO SAVE A PIC",mouseX,mouseY-60);

}
function mouseClicked() {
  if(j===4) {
    j=1;
  } else if(j<4) {
  j++;
    }

  }
