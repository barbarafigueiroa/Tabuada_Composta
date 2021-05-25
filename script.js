function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("adicao")
    let tabu = document.getElementById("subtracao")
    let tabua = document.getElementById("multiplicacao")
    let tabuada = document.getElementById("divisao")
    if(num.value == 0){
        alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        tabu.innerHTML = ""
        tabua.innerHTML = ""
        tabuada.innerHTML = ""
        //tabuada de adição
        for (let c = 1; c <= 10; c++){
            let itemAdicao = document.createElement("option")//o comando creatElemente cria um elemento de forma interativa no select do html
            itemAdicao.text = `${n} + ${c} = ${n + c}`//o text é a parte de dentro do option  
            tab.appendChild(itemAdicao)//esse comando appendChild adciona um elemento filho no meu seltab no html  
            //tabuada de subtração
            let itemSubtracao = document.createElement("option")
            itemSubtracao.text = `${n} - ${c} = ${n - c}`
            tabu.appendChild(itemSubtracao)
            //tabuada de multiplicação
            let itemMultiplicacao = document.createElement("option")
            itemMultiplicacao.text = `${n} x ${c} = ${n * c}`
            tabua.appendChild(itemMultiplicacao)
            //tabuada de divisão
            let itemDivisao = document.createElement("option")
            itemDivisao.text = `${n} / ${c} = ${n / c}`
            tabuada.appendChild(itemDivisao)

        }

    }
    
}
