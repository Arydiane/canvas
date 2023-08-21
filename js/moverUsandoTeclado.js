const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

let x = 20; 
let y = 20; 

const taxa = 10; 

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {
    limpaTela(); 
    desenhaCirculo(x, y, 10); 
}

function leDoTeclado(evento) {
    // key -  retorna a tecla que foi pressionada quando o evento ocorreu
    switch (evento.key) {
        case "ArrowUp":
                y = y - taxa; 
            break;
        case "ArrowDown":
                y = y + taxa; 
            break;
        case "ArrowLeft":
                x = x - taxa; 
            break;
        case "ArrowRight":
                x = x + taxa; 
            break;
        default:
                alert("Use apenas as setas do teclado para movimentar a bolinha!")
            break;
    }
}

//O evento keydown é disparado quando uma tecla é pressionada
document.onkeydown = leDoTeclado; 
setInterval(atualizaTela, 20); 
