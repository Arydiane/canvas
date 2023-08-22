const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

let desenha = false;
let corAtual = 'black';
const xVermelho = 0;
const xVerde = 50;
const xAzul = 100;
const yQuadrados = 0;
const tamanhoQuadrados = 50;

function desenhaQuadrado(x, y, tamanho, cor) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();

}

function desenhaPaletaDeCores() {

    desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
    desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
    desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');

}

function podeDesenharNaArea(x, y) {
    //verifica se está posição da paleta de cores
    if ((x >= 0) && (x < 3 * tamanhoQuadrados)
        && (y >= 0) && (y < tamanhoQuadrados)) {
        return false;
    }

    return true;
}

function lidaComMovimentoDoMouse(evento) {

    const x = evento.pageX - tela.offsetLeft;
    const y = evento.pageY - tela.offsetTop;

    if (desenha && podeDesenharNaArea(x, y)) {
        desenhaCirculo(x, y, 5, corAtual);
    }
}

function habilitaDesenhar() {
    desenha = true;
}

function desabilitaDesenhar() {
    desenha = false;
}

function selecionaCor(evento) {
    const x = evento.pageX - tela.offsetLeft;
    const y = evento.pageY - tela.offsetTop;

    //verifica se ponto y está dentro da area da paleta
    if ((y > yQuadrados) && (y < yQuadrados+ tamanhoQuadrados)) {

        if ((x > xVermelho) && (x < xVermelho + tamanhoQuadrados)) {
            corAtual = 'red'; 

        } else if ((x > xVerde) && (x < xVerde + tamanhoQuadrados)) {
            corAtual = 'green'; 
            
        } else if ((x > xAzul) && (x < xAzul + tamanhoQuadrados)) {
            corAtual = 'blue';
        }
    }
}

// mostra os quadrados de seleção de cores
desenhaPaletaDeCores();

tela.onmousemove = lidaComMovimentoDoMouse;
tela.onmousedown = habilitaDesenhar;
tela.onmouseup = desabilitaDesenhar;
tela.onclick = selecionaCor; 