let capture,osc;
let sound,img,msg;
let button_1,button_2;

function preload(){
  sound = loadSound('2.mp3');
  img=loadImage('bg1.jpg');
}

function setup() {
  let col = color(210, 255, 74);
  let col_2 = color(0,0,0,0);
  let fr = 10;
  createCanvas(windowWidth, windowHeight);
  background(img);
  frameRate(fr);
  
  capture = createCapture(VIDEO);
  capture.hide();
  
  osc = new p5.SawOsc();
  
//chromatic scale  
button_1= createButton('Flatulent sukling! Keep on pushin\'.');
button_1.position(3*width/5,height/10);
  
button_1.size(width/3);
	
button_1.style('border','2px outset rgb(2, 150, 2)');
	
button_1.style('background-color','rgb(2, 150, 2)');
  
button_1.mousePressed(cry);
  
  button_2 = createButton('Another Sliver!');
  
  button_2.position(width/2,height/2);
  
	
	button_2.style('border','2px outset rgb(132, 0, 255)');
	
	button_2.style('background-color','rgb(132, 0, 255)');
	
  button_2.mousePressed(function (){
   
    if(!sound.isPlaying()){
      sound.play();
      sound.jump(30);
      button_2.html('Stop influencing my ear hairs!');
    }else{
      sound.pause();
      button_2.html('Another Sliver!')
    }
    
    
  });
//screen reader stuffs
let invisible_message = createP('Snorting burnt, bumpy thoughts with a side of Morgellon fibers probably won\'t help you accomplish the quite sterile goal of owning a self-aggrandizing jejunum. Gniveihcarednu! ');
  
  invisible_message.position(width/100,height-100);
  
  invisible_message.style('color',col_2);
	invisible_message.style('font-size','1px');
	
	msg = new PracticalMessage();
	
	let sentence = createP('It appeared as if a blue, black-speckled rectangular prism amongst assorted shapes, some shaped like brown-stemmed broccoli, some like gray cereal, and some, like fuzzy inverted kiwi skins atop dimly glowing, short mounds of chocolate and split pea ice cream.');
	sentence.position(width/10,7*height/8);
	sentence.style('color','rgb(228, 212, 255)');
	sentence.style('font-family','Monaco');
}





function draw() {
	msg.display();
	
	//lyric
  let col_1=color(255, 166, 0);
  let col_2=color(2, 217, 2);
  let col_3=color(210, 255, 74);
   let col_6 = color(132, 0, 255,100);
  let amount=map(mouseX,0,width,0,1);
  let col_4=lerpColor(col_2,col_6,amount);
  let col_5=color(255, 247, 0,100);
  let col_7=color(255, 217, 0);
  let col_8=lerpColor(col_7,col_1,sin(millis()/2000));
  let letters = ['u','n','d','e','r','a','c','h','i','e','v','i','n','g'];
 
  //camera panel
  image(capture,width/2,height/2,width/2,height/2);
  
  tint(50);
  

  push();
  strokeWeight(2);
  stroke(0);            
	line(width/2,0,width/2,height);
  pop();
  
    push();
  strokeWeight(2);
  stroke(255);
  line(0,height/2,width,height/2);
  pop();
  
  
  push();
  noStroke();
  fill(col_4); ellipse(random(width/2,width),random(height/2,height),width/100,height/100);
  pop();

  

  
  let freq = constrain(map(mouseY,0,height,38.89,2489.02),38.89,2489.02);
  
  osc.amp(0.5,1); 
  osc.freq(freq);
  
	//stretchy thing
  push();
  stroke(200, random(100));
  for(let i = 0;i<width/2;i+=100){
    for(let j = height/2;j<height;j+=100){
      let v = createVector(i,j);
      line(v.x,v.y,mouseX,mouseY);
    }
  }
  pop();
  
  push();
  
  fill(col_8);
  textSize(16);
  textFont('Courier');
  for(let i=0;i<letters.length;i++){ text(letters[i],width/4+50*sin(i),height/4+50*cos(i));
  }
  pop();
  
}

function cry (){
  let delay = new p5.Delay();
  delay.process(osc,0.5,0.8,1000);
  osc.start();
}

function mouseReleased(){
  osc.stop();
}

class PracticalMessage {
	constructor (){
	this.x = 3*width/5;
	this.y = height/4;


	}
	display (){
		let message = createP('If you ever experience a prolapsed rectum, it is dangerous to try to remedy it by rubbing sand on it. Instead of rubbing sand on your prolapsed rectum, please seek medical attention.');
		message.style('color','rgba(255,255,255,0.3)');
		message.style('font-family','Helvetica');
		message.position(this.x+mouseX,this.y+mouseY);
	}

}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
  background(img);
	
	let col = color(random(255));
	

	
	button_2.style('background-color',col);
	
	
	
	button_1.style('background-color',col);
}

