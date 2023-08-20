const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

//desenha um retângulo
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'green'; 
pincel.fillRect(0, 0, 200, 400); 

pincel.fillStyle = 'red'; 
pincel.fillRect(400, 0, 200, 400)

//desenha um triângulo
pincel.fillStyle = 'yellow'; 
pincel.beginPath(); 
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();


