const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

pincel.fillStyle = 'gray'; 
pincel.fillRect(0, 0, 600, 400); 

function desenhaCirculo(evento) {
    //posição clicada no documento - posição de deslocamento em relação ao elemento pai
    const x = evento.pageX - tela.offsetLeft; 
    const y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = 'blue'; 
    pincel.beginPath(); 
    pincel.arc(x, y, 10, 0, 2 * 3.14); 
    pincel.fill(); 

    console.log(`Cliquei na posição X: ${x} e Y: ${y}!`);
}

tela.onclick = desenhaCirculo; 
