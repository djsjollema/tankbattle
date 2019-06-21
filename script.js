const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let image = new Image();
image.src = 'Tanks_sheet.png';
let sx,sy,sw,sh,x =0,y =0,w,h;
let counter = 1;
let vx =0 , vy = -1;

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
  context.drawImage(image,sx,sy,sw,sh,x,y,w,h);
  counter++;
  if(counter>7){
    counter = 1;
  }
  if(y < 32){
    y = 320;
  }

}
