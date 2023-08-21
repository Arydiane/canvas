const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

let raio = 10;
let xAleatorio;
let yAleatorio;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaAlvo(x, y) {

    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red');
}

function sorteiaPosicao(maximo) {
    return Math.floor(Math.random() * maximo);
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {
    limpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);

    desenhaAlvo(xAleatorio, yAleatorio);
}

function dispara(evento) {

    const x = evento.pageX - tela.offsetLeft;
    const y = evento.pageY - tela.offsetTop;

    //verifica se o clique foi na circulo central
    if ((x > xAleatorio - raio) && (x < xAleatorio + raio)
        && (y > yAleatorio - raio) && (y < yAleatorio + raio)) {
        alert("Acertou!")
    }
}

setInterval(atualizaTela, 1500);
tela.onclick = dispara; 