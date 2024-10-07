const buttonConvert = document.querySelector("#button-convert")
const valueSelect2 = document.querySelector(".select-dois")
const valueSelect1 = document.querySelector(".select-um")

buttonConvert.addEventListener("click", valorConvertido)

valueSelect2.addEventListener("change", alteracaoDois)
valueSelect1.addEventListener("change", alteracaoUm)

function alteracaoUm (){
    const logoUm = document.querySelector(".real-img")
    const moedaUm = document.querySelector(".primeira-moeda")
    const tipoDeMoeda = document.querySelector("#valor-moeda-real")

    if(valueSelect1.value == "realUm"){
        logoUm.src = "./assets/brasil 2.png"
        moedaUm.innerHTML = "Real Brasileiro"
        tipoDeMoeda.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format ("0")
    }

    if(valueSelect1.value == "dolarUm"){
        logoUm.src = "./assets/estados-unidos (1) 1.png"
        moedaUm.innerHTML = "Dólar Americano"
        tipoDeMoeda.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format ("0")
    }

    if (valueSelect1.value == "euroUm") {
        logoUm.src = "./assets/Euro.png"
        moedaUm.innerHTML = "Euro"
        tipoDeMoeda.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR"
        }).format ("0")
    }

    if (valueSelect1.value == "bitcoinUm"){
        logoUm.src = "./assets/bitcoin 1.png"
        moedaUm.innerHTML = "Bitcoin"
        tipoDeMoeda.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "BTC"
        }).format ("0")
    }

    if (valueSelect1.value =="libraUm"){
        logoUm.src = "./assets/libra 1.png"
        moedaUm.innerHTML = "Libra"
        tipoDeMoeda.innerHTML = new Intl.NumberFormat("es-GB",{
            style: "currency",
            currency: "GBP"
        }).format ("0")
    }
    valorConvertido()
}

function alteracaoDois (){
    const euro = document.querySelector(".moeda-dolar")
    const logoConvert = document.querySelector(".dolar-img")
    const bitcoin = document.querySelector(".moeda-dolar")
    const libra = document.querySelector(".moeda-dolar")
    const real = document.querySelector("#valor-moeda-dolar")
    const valorInput = document.querySelector(".value-money").value // Valor do Input
    // MOEDA DÓLAR //
    if (valueSelect2.value === "dolar"){
        euro.innerHTML= "Dólar Americano"
        logoConvert.src = "./assets/estados-unidos (1) 1.png"
    }
    // MOEDA EURO //
    if (valueSelect2.value === "euro"){
        euro.innerHTML= "Euro"
        logoConvert.src = "./assets/Euro.png"
    }
    // MOEDA BITCOIN //
    if (valueSelect2.value === "bitcoin"){
        bitcoin.innerHTML = "Bitcoin"
        logoConvert.src = "./assets/bitcoin 1.png"
    }

    if (valueSelect2.value === "libra"){
        libra.innerHTML = "Libra"
        logoConvert.src = "./assets/libra 1.png"
    }

    if (valueSelect2.value === "real"){
        euro.innerHTML= "Real Brasileiro"
        logoConvert.src = "./assets/brasil 2.png"
        real.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format("0")
    }
    valorConvertido()
}
function valorConvertido(){
    const valorInput = document.querySelector(".value-money").value // Valor do Input
    const valorReal = document.querySelector("#valor-moeda-real") // Valor do Real <p>
    const valorDolar = document.querySelector("#valor-moeda-dolar") // Valor do Dolar <p>
    
    //                             REAL X MOEDAS                                                     //

    const dolarHoje = 5.45 // Valor do Dolar hoje
    const euroHoje = 6.01 // Valor do euro hoje
    const bitCoinHoje = 0.0000030 // Valor do bit coin hoje
    const libraHoje = 7.18// Valor da libra hoje

    if (valueSelect1.value == "realUm" && valueSelect2.value == "euro") { 
        // Se o select estiver selecionado em euro ele vai executar esse codigo
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput); // Valor do input 

        valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(valorInput / euroHoje) // Resultado da conversão
    }

    if (valueSelect1.value == "realUm" && valueSelect2.value == "bitcoin") {
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput); // Valor do input 
        
        const valorFormatado = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 4,
            maximumFractionDigits: 4,
        }).format(valorInput / 331309.63); // Valor atualizado do Bitcoin em BRL
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorDolar.innerHTML = `₿${valorFormatado}`;
    }

    if (valueSelect1.value == "realUm" && valueSelect2.value == "libra") {
        // Se o select estiver selecionado em libra ele vai executar esse coodigo
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput); // Valor do input 

        valorDolar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(valorInput / libraHoje)
    }
    
    if(valueSelect1.value == "realUm" && valueSelect2.value == "dolar"){
        valorReal.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput); // Valor do input 

        valorDolar.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput / dolarHoje); // Valor do input
    }

    if(valueSelect1.value == "realUm" && valueSelect2.value == "real"){
        valorReal,valorDolar.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput); // Valor do input 
    }

    //                             DOLAR X MOEDAS                                                     //

    const dolarEuro = 0.91
    const dolarBitcoin = 0.000016
    const dolarLibra = 0.76

    if(valueSelect1.value == "dolarUm" && valueSelect2.value == "dolar"){
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(valorInput)
    }

    if(valueSelect1.value == "dolarUm" && valueSelect2.value == "euro"){
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput * dolarEuro)
    }

    if(valueSelect1.value == "dolarUm" && valueSelect2.value == "bitcoin"){
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput);
    
        // Formatando o valor como decimal para Bitcoin
        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 4, // Precisão comum para Bitcoin
            maximumFractionDigits: 4,
        }).format(valorInput * dolarBitcoin);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorDolar.innerHTML = `₿${valorFormatadoBitcoin}`;
    }

    if(valueSelect1.value == "dolarUm" && valueSelect2.value == "libra") {
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput);

        valorDolar.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput * dolarLibra);
    }

    if(valueSelect1.value == "dolarUm" && valueSelect2.value == "real") {
        valorReal.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput); // Valor do input 
        
        valorDolar.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput * dolarHoje) // Resultado da conversão
    }

    //                             EURO X MOEDAS                                                     //

    const euroDolar = 1.10
    const euroBitcoin = 0.000017
    const euroLibra = 0.84
    const euroReal = 6.02

    if(valueSelect1.value =="euroUm" && valueSelect2.value == "dolar"){
        valorReal.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput * euroDolar) 
    }

    if(valueSelect1.value == "euroUm" && valueSelect2.value == "euro"){
        valorReal.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput)
    }

    if(valueSelect1.value == "euroUm" && valueSelect2.value == "bitcoin"){
        valorReal.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput)

        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 4, // Precisão comum para Bitcoin
            maximumFractionDigits: 4,
        }).format(valorInput * dolarBitcoin);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorDolar.innerHTML = `₿${valorFormatadoBitcoin}`;
    }

    if(valueSelect1.value == "euroUm" && valueSelect2.value == "libra"){
        valorReal.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput * euroLibra);
    }

    if(valueSelect1.value == "euroUm" && valueSelect2.value == "real"){
        valorReal.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput * euroReal)
    }

    //                             BITCOIN X MOEDAS                                                     //

    const bitcoinDolar = 63126.50
    const bitcoinEuro = 57469.73
    const bitcoinLibra = 48214.13
    const bitcoinReal = 345806.97

    if(valueSelect1.value == "bitcoinUm" && valueSelect2.value == "dolar"){
        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0, // Precisão comum para Bitcoin
            maximumFractionDigits: 0,
        }).format(valorInput);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorReal.innerHTML = `₿${valorFormatadoBitcoin}`;

        valorDolar.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput * bitcoinDolar)
    }

    if(valueSelect1.value == "bitcoinUm" && valueSelect2.value == "euro"){
        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0, // Precisão comum para Bitcoin
            maximumFractionDigits: 0,
        }).format(valorInput);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorReal.innerHTML = `₿${valorFormatadoBitcoin}`;

        valorDolar.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput * bitcoinEuro)
    }

    if(valueSelect1.value == "bitcoinUm" && valueSelect2.value == "bitcoin"){
        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0, // Precisão comum para Bitcoin
            maximumFractionDigits: 0,
        }).format(valorInput);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorReal.innerHTML = `₿${valorFormatadoBitcoin}`;
        valorDolar.innerHTML = `₿${valorFormatadoBitcoin}`;
    }

    if(valueSelect1.value == "bitcoinUm" && valueSelect2.value == "libra"){
        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0, // Precisão comum para Bitcoin
            maximumFractionDigits: 0,
        }).format(valorInput);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorReal.innerHTML = `₿${valorFormatadoBitcoin}`;

        valorDolar.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput * bitcoinLibra)
    }

    if(valueSelect1.value == "bitcoinUm" && valueSelect2.value == "real"){
        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0, // Precisão comum para Bitcoin
            maximumFractionDigits: 0,
        }).format(valorInput);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorReal.innerHTML = `₿${valorFormatadoBitcoin}`;

        valorDolar.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput * bitcoinReal)
    }
    //                             LIBRA X MOEDAS                                                     //
    
    const libraDolar = 1.31
    const libraEuro = 1.19
    const libraBitcoin = 0.000021
    const libraReal = 7.17

    if(valueSelect1.value == "libraUm" && valueSelect2.value == "dolar"){
        valorReal.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(valorInput * libraDolar)
    }

    if(valueSelect1.value == "libraUm" && valueSelect2.value == "euro"){
        valorReal.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("es-ES",{
            style: "currency",
            currency: "EUR",
        }).format(valorInput * libraEuro)
    }

    if(valueSelect1.value == "libraUm" && valueSelect2.value == "bitcoin"){
        valorReal.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput)
        
        const valorFormatadoBitcoin = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 4, // Precisão comum para Bitcoin
            maximumFractionDigits: 4,
        }).format(valorInput * libraBitcoin);
    
        // Adiciona o símbolo de Bitcoin antes do valor
        valorDolar.innerHTML = `₿${valorFormatadoBitcoin}`;
    }
    
    if(valueSelect1.value == "libraUm" && valueSelect2.value == "libra"){
        valorReal.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput)
    }

    if(valueSelect1.value == "libraUm" && valueSelect2.value == "real"){
        valorReal.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP",
        }).format(valorInput)

        valorDolar.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
        }).format(valorInput * libraReal)
    }
}
