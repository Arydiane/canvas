const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

//tela de pintura
pincel.fillStyle = 'lightgray'; 
pincel.fillRect(0, 0, 600, 400); 

//------------------------------------
// desenho centralizado dentro da tela
// -------------------------------------

//cabeça
pincel.fillStyle = 'darkgreen'; 
pincel.fillRect(125, 50, 350, 300); 

//olhos
pincel.fillStyle = 'black'; 
pincel.fillRect(175, 100, 90, 90); 
pincel.fillRect(335, 100, 90, 90); 

//nariz 
pincel.fillRect(265, 190, 70, 100);

//boca 
pincel.fillRect(225, 240, 40, 110); 
pincel.fillRect(335, 240, 40, 110); 

//------------------------------------
// desenho alinhado a esquerda e top
// -------------------------------------

// //cabeça
// pincel.fillStyle = 'darkgreen'; 
// pincel.fillRect(0, 0, 350, 300); 

// //olhos
// pincel.fillStyle = 'black'; 
// pincel.fillRect(50, 50, 90, 90); 
// pincel.fillRect(210, 50, 90, 90); 

// //nariz 
// pincel.fillRect(140, 140, 70, 100);

// //boca 
// pincel.fillRect(100, 190, 40, 110); 
// pincel.fillRect(210, 190, 40, 110); 
