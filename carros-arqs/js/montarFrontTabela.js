// pegar o tbody da pagina
const tbody = document.querySelector('.table-car');
let totalEstoque = 0;

// percorrendo o array de objetos chamado CARROS
carros.forEach(carro => {

    // colocar os carros nas linhas e colunas da tabela
    tbody.innerHTML += `
        <tr>
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.transmissao}</td>
            <td>${carro.combustivel}</td>
            <td>${formatartMoeda(carro.preco)}</td>
        </tr>
    `;

    // soma do estoque
    totalEstoque += carro.preco;
});

document.querySelector('#total').textContent = formatartMoeda(totalEstoque);