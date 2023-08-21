const paleta = document.querySelector('#color');
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'gray';
pincel.fillRect(0, 0, 600, 400);

let desenha = false;

function desenhaCirculo(evento) {
    
    if (desenha) {
        const x = evento.pageX - tela.offsetLeft;
        const y = evento.pageY - tela.offsetTop;

        console.log(` X:${x} e Y:${y}`);

        pincel.fillStyle = paleta.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
}

//permite capturar o movimento do mouse
tela.onmousemove = desenhaCirculo; 

//Evento onmousedown é disparado toda vez que o botão esquerdo do mouse é pressionado
// e onmouseup é disparando quando botão é solto. 

//habilita desenhar
tela.onmousedown = () => desenha = true; 
//desabilita desenhar
tela.onmouseup = () => desenha = false;