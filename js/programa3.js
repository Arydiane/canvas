const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

pincel.fillStyle = 'gray'; 
pincel.fillRect(0, 0, 600, 400); 

function desenhaCirculo(evento) {
   
    const x = evento.pageX - tela.offsetLeft; 
    const y = evento.pageY - tela.offsetTop;
    let raio = 10; 

    console.log(`Cliquei na posição X: ${x} e Y: ${y}!`);

    //verifica se a tecla shift está pressionada e retorna true ou false
    if (evento.shiftKey) {
        raio = raio + 20; 
    }

    pincel.fillStyle = 'blue'; 
    pincel.beginPath(); 
    pincel.arc(x, y, raio, 0, 2 * 3.14); 
    pincel.fill(); 

}

tela.onclick = desenhaCirculo; 