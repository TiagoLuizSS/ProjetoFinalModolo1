var cinquenta =  document.querySelector('#desconto');
var descontoNaTela = parseInt(cinquenta.textContent);
var vitoria = true;
var click = 0;
var palavras = [
    {
        palavra: 'BARRACA',
        dica1: 'usado em acampamento',
        dica2: 'usado para descanso',
        dica3: 'usada para se abrigar no acampamento',
    },
    {
        palavra: 'MOCHILA',
        dica1: 'usada para armazenar utensilios',
        dica2: 'utilizada em viagens, escola ou trabalho',
        dica3: 'possui duas alças',
    },
    {
        palavra: 'COLCHAO',
        dica1: 'usado para descansar',
        dica2: 'é um objeto macio',
        dica3: 'objeto é usado no chão',
    },
    {
        palavra: 'LANTERNA',
        dica1: 'objeto utilizado a noite',
        dica2: 'objeto que possui luz',
        dica3: 'muito utilizada em acampamento para iluminação',
    },
    {
        palavra: 'CANTIL',
        dica1: 'objeto possui uma tampa',
        dica2: 'usado para armazenar algo essencial',
        dica3: 'usado na armazenagem de liquidos',
    },
];

var palavraEscondida = '';
var dicaSorteada;
var lista = [];
var chancesDeJogar = 4;
var letrasPalavraSorteada;
var indicePalavra = parseInt(Math.random() * palavras.length);
sortearPalavraEscondida();
function sortearPalavraEscondida() {
    palavraEscondida = palavras[indicePalavra].palavra;
    letrasPalavraSorteada = palavraEscondida.split('');
    dicaSorteada = palavras[indicePalavra].dica1;
    dicaSorteada = palavras[indicePalavra].dica2;
    dicaSorteada = palavras[indicePalavra].dica3;  
}

mostrarAPalavra();
function mostrarAPalavra() {
    dicaSorteada = document.getElementById('dica');
    var palavraNaTela = document.getElementById('palavra-escondida');
    palavraNaTela.innerHTML = '';
    for (let i = 0; i < palavraEscondida.length; i++) {
        if (lista[i] == undefined) {
            lista[i] = '&nbsp';
            palavraNaTela.innerHTML = palavraNaTela.innerHTML + "<div class='letras'>" + lista[i] + "</div>";
        }
        else {
            palavraNaTela.innerHTML = palavraNaTela.innerHTML + "<div class='letras'>" + lista[i] + "</div>";
        }
    }
}

function verificarLetraSelecionada(letra) {
    if (chancesDeJogar > 0) {
        alterarEstiloTeclas('botao-' + letra);
        verificarLista(letra);
        mostrarAPalavra();
    }
    else {
        alert('Tente novamente!')
    }
}

function alterarEstiloTeclas(botao) {
    document.getElementById(botao).style.background = '#029620';
    document.getElementById(botao).style.color = '#000000';
}

function verificarLista(letra) {
    var localizacao = letrasPalavraSorteada.indexOf(letra);
    if (localizacao < 0) {
        chancesDeJogar--
        descontoLetraErrada();
    }
    else {
        for (let i = 0; i < palavraEscondida.length; i++) {
            if (palavraEscondida[i] == letra) {
                lista[i] = letra;
            }
        }
    }
    for (i = 0; i < palavraEscondida.length; i++) {
        if (letrasPalavraSorteada.join('') != lista.join('')) {
            vitoria = false;
        }
        else {
            chancesDeJogar = 0;
            var ganhou = document.querySelector('#ganhou');
            ganhou.innerHTML = 'Parabéns, você ganhou!'
        }
    }
}

function dicas() {
    var dica = document.createElement('p');
    var dica2 = document.createElement('p');
    var dica3 = document.createElement('p');
    var divDica1 = document.querySelector('#dica1');
    var divDica2 = document.querySelector('#dica2');
    var divDica3 = document.querySelector('#dica3');
    var btn = document.querySelector("#botao-dica");
    var divDica = document.querySelector('#dica');
    btn.onclick = function () {
        click++;
        if (click == 1) {
            dica.innerHTML = palavras[indicePalavra].dica1;
            divDica1.appendChild(dica)
            descontoDica();
        }
        else if (click == 2) {
            dica2.innerHTML = palavras[indicePalavra].dica2
            divDica2.appendChild(dica2)
            descontoDica(); 
        }
        else if (click == 3) {
            dica3.innerHTML = palavras[indicePalavra].dica3
            divDica3.appendChild(dica3)
            descontoDica();
        }
    }
}

function descontoLetraErrada(){
    if(chancesDeJogar == 3){
        descontoNaTela -= 10;
        cinquenta.innerHTML = descontoNaTela;
    }
    else if (chancesDeJogar == 2){
        descontoNaTela -= 10;
        cinquenta.innerHTML = descontoNaTela;
    }
    else if(chancesDeJogar == 1){
        descontoNaTela -= 10;
        cinquenta.innerHTML = descontoNaTela;
    }
    else if(chancesDeJogar == 0){
        descontoNaTela -= 10;
        cinquenta.innerHTML = descontoNaTela;
    }
    if(descontoNaTela == 0){
        alert ('Não foi dessa vez!')
    }
}

function descontoDica(){
    if(click == 1){
        descontoNaTela -= 10;
        cinquenta.innerHTML = descontoNaTela;
    }
    else if(click == 2){
        descontoNaTela -= 10;
        cinquenta.innerHTML = descontoNaTela;
    }
    else if(click == 3){
        descontoNaTela -= 10;
        cinquenta.innerHTML = descontoNaTela;
    }
    if(descontoNaTela == 0){
        alert ('Não foi dessa vez!')
    }
}

function reiniciar(){
    location.reload()
}
