// recuperar o elemento HTML que receberá os cards
const gridCards = document.querySelector('#gridCards');
let totalCarros = 0;
carros.forEach(carro => {

    // montar o card buscando os dados do objeto
    //exibindo apenas os carros da cor vermelha
    // if(carro.cor.toLowerCase() === 'branco'){
    // carros com valor entre 50000 e 100000
    if(carro.preco >= 50000 && carro.preco <= 100000){
        gridCards.innerHTML += `
            <div class='col-md-6 col-lg-4 my-3'>
                <a href="#" class="text-decoration-none text-danger">
                    <div class="card">
                        <img src="${carro.foto}"class="card-img-top" alt="${carro.modelo}">
                        <div class="card-body">
                            <h5 class="card-title">${carro.modelo} - ${carro.marca}</h5>
                            <div class="d-flex justify-content-between">
                                <p>${carro.cor}</p>
                                <p>${carro.ano}</p>
                            </div>
                            <h3 class="text-danger text-center">
                            ${formatarMoeda(carro.preco)}
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
        `
        totalCarros++;
    }
})

document.querySelector('#totalCarros').textContent = totalCarros;