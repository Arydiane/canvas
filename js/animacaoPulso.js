const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

function desenhaCirculo(x, y, raio) {
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

let raio = 19
let fatorCrescimento = 0; 

function atulizaTela() {
    limpaTela(); 

    if (raio > 30) {
        fatorCrescimento = -1;
    } else if (raio < 20) {
        fatorCrescimento = 1;
    }

    raio = raio + fatorCrescimento; 
    desenhaCirculo(300, 200, raio)
}

setInterval(atulizaTela, 20); 