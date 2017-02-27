var bug;
var bugs = []; // Declare object7
function setup() {
  createCanvas(1200, 900);
  // Create object
  for (var i=0; i<1000; i++) {
  bugs.push(new Jitter())
  //colorMode(HSL)
  }
}

function draw() {
  background(20);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
// function Jitter() {
//
//   this.x = random(150,width-150);
//   this.y = random(50,height-50);
//   this.energy = 0.1;
//   this.diameter = random(10, 30);
//   this.speed = 4;
//
//   this.move = function() {
//     this.x = constrain(this.x, 150, width-150);
//     this.y = constrain(this.y, 50, height-50)
//
//     if (this.x > width / 2) {
//       this.y += this.y/100;
//     } else {
//       this.y -= (height-this.y)/100;
//     }
//
//     if (this.y > height/2){
//       this.x -= this.x/100
//     } else {
//       this.x += (width-this.x)/100
//     }
//
//   }
//
//   this.display = function() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
// };

function Jitter() {

  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);

  this.move = function() {
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height  )

    if (this.y < height/2 && this.x < width/2){ //top left
      this.x += map(this.y, 0,500,9,0);
      this.y -= map(this.x, 0, 500, 9, 0)
    } else if (this.y < height/2 && this.x > width/2){ //top right
      this.y += map(this.x, 500,1000,0,9);
      this.x += map(this.y, 0, 500, 7, 0)
    } else if (this.y > height/2 && this. x > width/2){ //bottom right
      this.y += map(this.x, 500,1000,0,9);
      this.x += map(this.y, 0, 500, 7, 0)
    } else if (this.y > height/2 && this. x < width/2){ //bottom left
      this.y += map(this.x, 500,1000,0,9);
      this.x += map(this.y, 0, 500, 9, 0)
    }

    this.x += random(-7,7);
    this.y += random(-7,7)

    this.col = map(this.y, 0, 1200, 0, 360)
    fill(this.col, 0, 255-this.col)
    // fill(random(0,360),100,75)
  }
  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
