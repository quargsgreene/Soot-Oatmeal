let sound;
let img;
let capture;
let osc;
let triggerSynthInstrumental;
let toneGenerator;

function preload() {
  sound = loadSound('synthExcerpt.mp3');
  img = loadImage('backgroundImage.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(img);

  capture = createCapture(VIDEO);
  capture.hide();
  osc = new p5.SawOsc();

  // chromatic scale
  toneGenerator = createButton('Flatulent sukling! Keep on pushin\'.');
  toneGenerator.position((3 * width) / 5, height / 10);
  toneGenerator.size(width / 3);
  toneGenerator.class('tone-generator');
  toneGenerator.mousePressed(generateSynthSequence);

  triggerSynthInstrumental = createButton('Another Sliver!');
  triggerSynthInstrumental.position(width / 2, height / 2);
  triggerSynthInstrumental.class('vocals');
  triggerSynthInstrumental.mousePressed(() => {
    if (!sound.isPlaying()) {
      sound.play();
      sound.jump(30);
      triggerSynthInstrumental.html('Stop influencing my ear hairs!');
    } else {
      sound.pause();
      triggerSynthInstrumental.html('Another Sliver!');
    }
  });
  // screen reader stuff
  const invisibleMessage = createP('Snorting burnt, bumpy thoughts with a side of Morgellon fibers probably won\'t help you accomplish the quite sterile goal of owning a self-aggrandizing jejunum. Gniveihcarednu! ');

  invisibleMessage.position(width / 100, height - 100);
  invisibleMessage.class('invisible');

  const sentence = createP('It appeared as if a blue, black-speckled rectangular prism amongst assorted shapes, some shaped like brown-stemmed broccoli, some like gray cereal, and some, like fuzzy inverted kiwi skins atop dimly glowing, short mounds of chocolate and split pea ice cream.');
  sentence.position(width / 10, (7 * height) / 8);
  sentence.class('sentence');
}

function draw() {
  const msg = new PracticalMessage();
  msg.display();

  // lyric
  const from1 = color(255, 217, 0);
  const to1 = color(255, 166, 0);
  const from2 = color(132, 0, 255, 100);
  const to2 = color(2, 217, 2);
  const lerpAmount = map(mouseX, 0, width, 0, 1);
  const letterColor = lerpColor(from1, to1, sin(millis() / 2000));
  const movingBallColor = lerpColor(to2, from2, lerpAmount);

  const letters = ['u', 'n', 'd', 'e', 'r', 'a', 'c', 'h', 'i', 'e', 'v', 'i', 'n', 'g'];
  push();
  fill(letterColor);
  textSize(16);
  textFont('Courier');
  for (let i = 0; i < letters.length; i++) {
    text(letters[i], width / 4 + 50 * sin(i), height / 4 + 50 * cos(i));
  }
  pop();

  const freq = constrain(map(mouseY, 0, height, 38.89, 2489.02), 38.89, 2489.02);
  osc.amp(0.5, 1);
  osc.freq(freq);

  // stretchy thing
  push();
  stroke(200, random(100));
  for (let i = 0; i < width / 2; i += 100) {
    for (let j = height / 2; j < height; j += 100) {
      const vector = createVector(i, j);
      line(vector.x, vector.y, mouseX, mouseY);
    }
  }
  pop();

  // camera panel
  image(capture, width / 2, height / 2, width / 2, height / 2);
  tint(50);
  push();
  strokeWeight(2);
  stroke(0);
  line(width / 2, 0, width / 2, height);
  pop();

  // finish creating the panels
  push();
  strokeWeight(2);
  stroke(255);
  line(0, height / 2, width, height / 2);
  pop();

  // moving ball
  push();
  noStroke();
  fill(movingBallColor);
  ellipse(random(width / 2, width), random(height / 2, height), width / 100, height / 100);
  pop();
}

function generateSynthSequence() {
  const delay = new p5.Delay();
  delay.process(osc, 0.5, 0.8, 1000);
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

class PracticalMessage {
  constructor() {
    this.x = (3 * width) / 5;
    this.y = height / 4;
  }

  display() {
    const message = createP('If you ever experience necrotizing fasciitis, it is dangerous to try and remedy it by rubbing sand on your eyeballs. Please seek medical attention in this case.');
    message.style('color', 'rgba(255,255,255,0.3)');
    message.style('font-family', 'Helvetica');
    message.position(this.x + mouseX, this.y + mouseY);
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  background(img);

  const anyGrayscaleColor = color(random(255));
  triggerSynthInstrumental.style('background-color', anyGrayscaleColor);
  toneGenerator.style('background-color', anyGrayscaleColor);
}
