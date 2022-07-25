function calculateSalary(salarioFixo, ValorDasVendas){

    let valorDasVendas3 = ValorDasVendas * (3/100)
    let valorDasVendas5 = ValorDasVendas * (5/100)

    for(let i = 1; i <= ValorDasVendas; i++){
        if(ValorDasVendas < 1200){  
            return salarioFixo + valorDasVendas3
        }
        else { 
            (ValorDasVendas > 1200)
            return salarioFixo + valorDasVendas5
        }

    }
    
}

console.log(calculateSalary(2000,1500 ))

let saque = 2120
let quantidaDeNotas = 0
let cedulas = [200,100,50,20,10,5,2,1]

function cashMachine(valor){
    quantidaDeNotas = parseInt(saque/valor)

    saque -= quantidaDeNotas*valor

    console.log(`${quantidaDeNotas} nota(s) de R$ ${valor},00`)
    quantidaDeNotas = 0
}
for(let cedula in cedulas){    
    cashMachine(cedulas[cedula])
}

let resto = (saque - saque)

console.log(`o valor restante é de R$ ${resto},00`)

function calculateStock(quantidadeAtual, quantidadeMaxima, quantidadeMinima){

let quantidadeMedia = ((quantidadeMaxima + quantidadeMinima)/2)

if(quantidadeAtual >= quantidadeMedia){
    return console.log("Não efetuar compra")
}
else {
    return console.log ("Efetuar compra")
}

}
console.log(calculateStock(10000, 15000, 4500))

function calculateAge(nascimento, anoAtual){

let idadeAnos = anoAtual - nascimento
let idadeMeses = idadeAnos * 12
let idadeSemanas = idadeAnos * 52.143
let idadeDias = idadeAnos * 365

return [idadeAnos, idadeMeses, idadeSemanas, idadeDias]
}
console.log(calculateAge(2004, 2022))

let matrizQuadrada3x3 = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]
function getDiagonal(matrizQuadrada3x3) {
    
let counter = matrizQuadrada3x3.length
let resultado = []

for(let i = 0; i < counter; i++) {
    resultado.push(matrizQuadrada3x3[i][i])
}
return resultado
}
console.log(getDiagonal(matrizQuadrada3x3))