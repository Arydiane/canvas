const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

//triangulo 1
pincel.fillStyle = 'black'; 
pincel.beginPath(); 
pincel.moveTo(50, 50); 
pincel.lineTo(50, 400); 
pincel.lineTo(400,400);
pincel.fill(); 

//triangulo 2
pincel.fillStyle = 'white'; 
pincel.beginPath(); 
pincel.moveTo(100, 175); 
pincel.lineTo(100, 350); 
pincel.lineTo(275, 350);
pincel.fill(); 
