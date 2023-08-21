const mensagem = document.getElementById('msg');
const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

let raio = 10; 

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

desenhaCirculo(300, 200, raio + 20, 'red'); 
desenhaCirculo(300, 200, raio + 10, 'white'); 
desenhaCirculo(300, 200, raio, 'red');

function dispara(evento) {

    const x = evento.pageX - tela.offsetLeft;
    const y = evento.pageY - tela.offsetTop;

    //verifica se o clique foi na circulo central
    // x > 290 e x < 310  e y > 190 e y < 210
    if ( x > 300 - raio  && x < 300 + raio && y > 200 - raio && y < 200 + raio) {
        alert("Parabéns. Acertou!")
    } 
}

tela.onclick = dispara; 
