const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let image = new Image();
image.src = 'Tanks_sheet.png';
let sx,sy,sw,sh,x =0,y =0,w,h;
let counter = 1;
let vx =-5 , vy = -2;
let angle =0;

image.addEventListener('load',()=>{
  //context.drawImage(image,0,0);
  sw = image.width/8;
  sh = image.height/4;
  setInterval(animate,100)
})

function animate(){
  context.clearRect(0,0,320,320);
  x += vx;
  y += vy;
  sx = counter % 8 * sw;
  sy = Math.floor(counter/8)*sh;
  w = sw;
  h = sh;
  angle = Math.atan2(vy,vx) + Math.PI/2;
  context.save();
  context.translate(x,y);
  context.rotate(angle);
  context.drawImage(image,sx,sy,sw,sh,-16,-16,w,h);
  context.restore();
  counter++;
  if(counter>7){
    counter = 1;
  }
  if(y < -32){
    y = 320;
  }
  if(y > 320){
    y = -32;
  }
  if(x < -32){
    x = 320;
  }
  if(x > 320){
    x = -32;
  }
}

addEventListener('keydown',(event)=>{
  switch (event.key) {
    case "ArrowRight":
      vx += 1;
      break;
    case "ArrowLeft":
      vx -= 1;
      break;
    default:

  }
})
