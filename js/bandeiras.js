//inicia mostrando bandeira do brasil
let mostraBrasil = true; 

function desenhaBandeiraBrasil() {
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

    //retangulo
    pincel.fillStyle = 'green';
    pincel.fillRect(0, 0, 600, 400);

    //losangulo
    pincel.fillStyle = 'yellow';
    pincel.beginPath();
    pincel.moveTo(300, 50);
    pincel.lineTo(50, 200);
    pincel.lineTo(300, 350);
    pincel.lineTo(550, 200);
    pincel.fill();

    //circulo
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(300, 200, 100, 0, 2 * Math.PI);
    pincel.fill();
}


function desenhaBandeiraAlemanha() {
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 133);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 133, 600, 133);

    pincel.fillStyle = 'yellow';
    pincel.fillRect(0, 266, 600, 133);
}

function trocaBandeira() {

    if (mostraBrasil) {
        desenhaBandeiraBrasil(); 
    } else {
        desenhaBandeiraAlemanha(); 
    }
    //inverte o valor da variável
    mostraBrasil = !mostraBrasil; 
}

setInterval(trocaBandeira, 3000); 

