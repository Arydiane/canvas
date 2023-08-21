const tela = document.querySelector('canvas'); 
const pincel = tela.getContext('2d'); 

pincel.fillStyle = 'gray'; 
pincel.fillRect(0, 0, 600, 400); 

const cores = ['blue', 'red', 'green']; 
let indiceCorAtual = 0; 

function desenhaCirculo(evento) {
    //posição clicada no documento - posição de deslocamento em relação ao elemento pai
    const x = evento.pageX - tela.offsetLeft; 
    const y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = cores[indiceCorAtual]; 
    pincel.beginPath(); 
    pincel.arc(x, y, 10, 0, 2 * 3.14); 
    pincel.fill(); 

    console.log(`Cliquei na posição X: ${x} e Y: ${y}!`);
}

tela.onclick = desenhaCirculo; 

function mudaCor() {
   indiceCorAtual++; 
   if (indiceCorAtual >= cores.length) {
    indiceCorAtual = 0; 
   }
   alert(`Cor alterada para: ${cores[indiceCorAtual]}!`);
    //retorna falso para que menu contextual padrão do canvas não seja exibido
    return false; 
}

//identifica clique com botão direito do mouse
tela.oncontextmenu = mudaCor; 