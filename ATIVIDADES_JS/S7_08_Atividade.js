let products = [
{
    nome: "Uva Crimson",
    valor: 44.99,
},
{
    nome: "Vinho Canção",
    valor: 17.98,
},
{
    nome: "Água de coco",
    valor: 8.99,
},
{
    nome: "Mamão",
    valor: 9.98,
},
{
    nome: "Água tônica",
    valor: 17.98,
}
]

let valores = []

let tagBody = document.querySelector("body")
let tagMain = document.createElement("main")
let tagSection = document.querySelector("section")
let ProductList = document.createElement("ul")
let tagButtonEnd = document.createElement("button")

tagBody.appendChild(tagMain)
tagMain.appendChild(ProductList)

function criarCardProdutos(produtos){

for(let i = 0; i<produtos.length; i++ ){

let div = document.createElement("div")
div.classList.add("division2") 
let ProductDetails  = document.createElement("li")
let tagName = document.createElement("h3")
let tagValor = document.createElement("p")

tagName.innerText = produtos[i].nome
tagValor.innerText = produtos[i].valor
ProductList.appendChild(ProductDetails)
ProductDetails.append(tagName, tagValor)

div.append(tagSection ,tagName, tagValor)

valores.push(produtos[i].valor)
}

}
criarCardProdutos(products)

let result = valores.reduce((a,b) => a+b,0)

function resultado(valor){

let div = document.createElement("div")
div.className = "division2"
let tagName = document.createElement("h3")
let tagValor = document.createElement("p")

tagName.innerText = "total"
tagValor.innerText = valor

tagSection.append(tagName, valor, tagButtonEnd)
div.appendChild(tagName)
div.appendChild(valor)
tagSection.appendChild(div)
}
resultado(result)
