const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

//retangulo
pincel.fillStyle = 'green'; 
pincel.fillRect(0,0, 600, 400);

//losangulo
pincel.fillStyle = 'yellow'; 
pincel.beginPath(); 
pincel.moveTo(300, 50); 
pincel.lineTo(50, 200); 
pincel.lineTo(300, 350); 
pincel.lineTo(550, 200); 
pincel.fill();

//circulo
pincel.fillStyle = 'blue'; 
pincel.beginPath(); 
pincel.arc(300, 200, 100, 0, 2*3.14);
pincel.fill(); 