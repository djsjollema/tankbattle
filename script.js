const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let image = new Image();
image.src = 'Tanks_sheet.png';

image.addEventListener('load',()=>{
  context.drawImage(image,0,0)
})
