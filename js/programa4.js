const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

pincel.fillStyle = 'gray'; 
pincel.fillRect(0, 0, 600, 400); 

let raio = 10; 

function desenhaCirculo(evento) {
   
    const x = evento.pageX - tela.offsetLeft; 
    const y = evento.pageY - tela.offsetTop;

    console.log(`Cliquei na posição X: ${x} e Y: ${y}!`);

    //shiftKey e  altKey - verifica se a tecla shift e alt estão pressionadas
    //bolinha terá tamanho máximo de raio = 40 e tamanho mínimo = 10
    if (evento.shiftKey && evento.altKey) {
        alert('Por favor, aperte apenas uma tecla por vez!')
    } else if (evento.shiftKey && raio + 10 <= 40) {
        raio = raio + 10; 
    } else if (evento.altKey && raio - 5 >= 10) {
        raio = raio - 5; 
    }

    pincel.fillStyle = 'blue'; 
    pincel.beginPath(); 
    pincel.arc(x, y, raio, 0, 2 * 3.14); 
    pincel.fill(); 
}

tela.onclick = desenhaCirculo; 