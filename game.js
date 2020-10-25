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

    //remover mosquito (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
    }

    let posX = Math.floor(Math.random() * largura) - 90;
    let posY = Math.floor(Math.random() * altura) - 90;

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY
    console.log(posX, posY);

    //criar elemento html
    let mosquito = document.createElement('img');
    mosquito.src = "/midia/img/mosca.png";
    mosquito.className = tamanhoMosquito() + ' ' + ladoAleatorio();
    mosquito.style.left = posX + 'px';
    mosquito.style.top = posY + 'px';
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito"

    var body = document.querySelector('body');
    body.appendChild(mosquito);
}

//gerando tamanho aleatorio do mosquito
function tamanhoMosquito() {
    let classe = Math.floor(Math.random() * 3);
    console.log(classe)

    switch (classe) {
        case 0:
            return 'mosca1';
        case 1:
            return 'mosca2';
        case 2:
            return 'mosca3';
    }
}

//gerando o lado do mosquito
function ladoAleatorio() {
    let posicao = Math.floor(Math.random() * 2);

    switch (posicao) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}


// 