//alert('Teste');

//Capiturando o tamanho da tela 
let altura = 0;
let largura = 0;

function ajustaTamanhoTela() {

    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);

}

//gerando posição randomica para o mosquito
ajustaTamanhoTela();

function posicaoRandom() {
    var posX = Math.floor(Math.random() * largura) - 90;
    var posY = Math.floor(Math.random() * altura) - 90;

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY
    console.log(posX, posY);

    //criar elemento html
    let mosquito = document.createElement('img');
    mosquito.src = "/midia/img/mosca.png";
    mosquito.className="mosca1";
    mosquito.style.left = posX + 'px';
    mosquito.style.top = posY + 'px';
    mosquito.style.position="absolute";

    var body = document.querySelector('body');
    body.appendChild(mosquito);
}
