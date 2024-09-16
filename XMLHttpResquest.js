// Nova Estância do XMLHttRequest
var xhr = new XMLHttpRequest();


// Função de Resposta
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        
        alert("Funcionou!")
        // Processamente da resposta
        var dados = JSON.parse(xhr.responseText);
        console.log(dados);
    } else {
        alert("Erro!")
    }
};


// Configuração da Requisião
xhr.open('GET', 'https://api.exemplo.com/dados', true);

// Enviando solicitação
xhr.send();