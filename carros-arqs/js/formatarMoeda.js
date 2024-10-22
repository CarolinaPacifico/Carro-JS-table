function formatartMoeda(valor){
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        // definir o que fazer - no exemplo é a moeda
        style: 'currency', 

        //definir qual é a moeda
        currency: 'BRL'

        //chamar o étodo format - passando o parâmetro valor
    }).format(valor);

    // reotrnar a string com sinal monetário
    return valorFormatado;
}