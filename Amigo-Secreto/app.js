let listaAmigos = [];
let amigosSorteados = [];

function limparCampoInput() {
    const campo = document.getElementById("amigo");
    campo.value = "";
    campo.focus();
}

function adicionarAmigo() {
    const campo = document.getElementById("amigo");
    let nome = campo.value.trim();

    if (nome === "" || !isNaN(nome)) {
        alert("Por favor, digite um nome válido!");
        limparCampoInput();
        return;
    }

    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    if (listaAmigos.includes(nome)) {
        alert("Este amigo já foi adicionado!");
        limparCampoInput();
        return;
    }

    listaAmigos.push(nome);
    atualizarListaAmigos();
    limparCampoInput();
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear! ou reinicie o jogo");
        return;
    }

    if (amigosSorteados.length === listaAmigos.length) {
        alert("Todos os amigos já foram sorteados! Reinicie o jogo");
        return;
    }

    let sorteado;
    do {
        const indice = Math.floor(Math.random() * listaAmigos.length);
        sorteado = listaAmigos[indice];
    } while (amigosSorteados.includes(sorteado));

    amigosSorteados.push(sorteado);

    const item = document.createElement("li");
    item.innerHTML = `<strong>Amigo sorteado:</strong> ${sorteado}`;
    resultado.appendChild(item);
}

function reiniciarJogo() {
    listaAmigos = [];
    amigosSorteados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("O jogo do Amigo Secreto foi reiniciado! Pode começar de novo.");
}
