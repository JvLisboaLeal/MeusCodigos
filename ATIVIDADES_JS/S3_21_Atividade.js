const refrigerante = 11.99
const macarrao = 6.99
const ervilha = 6.99
const arroz = 22.99
const feijao = 11.89
const vinho = 70.00

console.log (` preço total refrigerante ${refrigerante * 3} `)
console.log (` preço total macarrao ${macarrao * 4} `)
console.log (` preço total ervilha ${ervilha * 3} `)
console.log (` preço total arroz ${arroz * 3} `)
console.log (` preço total feijão ${feijao * 2} `)
console.log (` preço total vinho ${vinho * 3} `)

console.log (` total a pagar ${refrigerante * 3 + macarrao *  4 + ervilha * 3 + arroz * 3 + feijao * 2 + vinho * 3} `)

let total = refrigerante * 3 + macarrao *  4 + ervilha * 3 + arroz * 3 + feijao * 2 + vinho * 3
let totalSemVinho = total - vinho * 3
let metade = total / 2
let metadeSemVinho = totalSemVinho / 2
let voce = 0
let amigo = 0

if(total % 2 == 0){
    voce = metadeSemVinho
    amigo = metadeSemVinho + vinho * 3
}

else{
    voce = metade
    amigo = metade
}

console.log (` meu total a pagar ${voce} `)
console.log (` total do meu amigo a pagar ${amigo} `)

let precoRefrigerante = parseFloat(prompt("Digite o valor do Refrigerante"))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

let precoErvilha = parseFloat(prompt("Digite o valor do Ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

let precoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

let precoFeijao = parseFloat(prompt("Digite o valor do Feijão"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

let precoVinho = parseFloat(prompt("Digite o valor do Vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

total = precoRefrigerante * quantidadeRefrigerante + precoMacarrao * quantidadeMacarrao + precoErvilha * quantidadeErvilha + precoArroz * quantidadeArroz + precoFeijao * quantidadeFeijao + precoVinho * quantidadeVinho

alert(`Valor total a ser pago: ${total}`)
        