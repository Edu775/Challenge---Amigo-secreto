//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    
}
exibirMensagemInicial();


function adicionarAmigo() {
    const input = document.getElementById('amigo');
    let nomeAmigo = input.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        input.value = ''; 
    } else {
        alert('Por favor, digite um nome válido.')
        return;
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert('A lista de Amigos está vazia')
        return;
    } 
    if (amigos.length <= 2) {
        alert("Para poder realizar o sorteio, é preciso ter três amigos ou mais.");
        return;
      }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceSorteado];
    
    sorteados.push(amigoSorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "O Amigo Secreto Sorteado é:   " + sorteados;
}

let sorteados = [];

