const products = [
{
    id: 1,
    img: "./img/moletom.png",
    nameItem: "Lightweight Jacket",
    description:
    "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 150.00,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
},
{
    id: 2,
    img: "./img/gorro.png",
    nameItem: "Black Hat",
    description:
    "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 85.00,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
},
{
    id: 3,
    img: "./img/mascara.png",
    nameItem: "Mask",
    description:
    "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 45.00,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
},
{
    id: 4,
    img: "./img/camiseta_preta.png",
    nameItem: "T-Shirt",
    description:
    "Este é imprescindível no seu guarda-roupa, combinando o caimento intemporal de qualquer estação...",
    value: 89.0,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
},
{
    id: 5,
    img: "./img/camiseta_branca.png",
    nameItem: "Short-Sleeve T-Shirt",
    description:
    "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais fino fio da nova coleção...",
    value: 79.0,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
},
{
    id: 6,
    img: "./img/jaqueta.png",
    nameItem: "Jacket",
    description:
    "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 120.00,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
},
];

const carrinhoitem = []


    let tagBody = document.querySelector("body")
    let tagMain = document.querySelector(".products")

function items(products){
    for(let i = 0; i < products.length; i++){

    let objeto = products[i]

    let cardObjeto = criarCard(objeto)

    tagMain.appendChild(cardObjeto)

}

}

function criarCard(objeto){
    let div = document.createElement("div")
    let tagImg = document.createElement ("img")
    let tagPeca = document.createElement("p")
    let tagName = document.createElement("h2")
    let tagDesc = document.createElement("p")
    let tagValor = document.createElement("p")
    let tagButton = document.createElement("button")
    
    
    tagImg.src = objeto.img
    tagPeca.innerText = objeto.tag
    tagName.innerText = objeto.nameItem
    tagDesc.innerText = objeto.description
    tagValor.innerText = `R$ ${objeto.value},00`
    tagButton.innerText = objeto.addCart
    tagButton.id = objeto.id

    tagButton.addEventListener("click",function(e){
        const element = e.target

    let produto

        for(let i = 0; i < products.length; i++ ){
            if(element.id == products[i].id){
                produto = products[i]
                break
            }
        }carrinhoitem.push(produto)
        if(products.length = 0){
        //cartconteiner.innertext = "carrinhovazio"
        }
        criarCarrinho(carrinhoitem)
    })
    

    div.classList.add("items")
    tagPeca.classList.add("pvalue")

    div.append(tagImg,tagPeca,tagName,tagDesc,tagValor,tagButton)

    return div
} 
items(products)

function carrinhoCompras(){

    const div = document.createElement("div")
    const divinput = document.createElement("div")
    const input = document.createElement("input")
    const paragraph = document.createElement("p")
    const div2 = document.createElement("div")
    const paragraph2 = document.createElement("p")
    const paragraph3 = document.createElement("p")
    const cartContainer = document.createElement("div")

    div.classList.add("barrapesquisa")
    divinput.classList.add("divinput")
    paragraph.classList.add("pesquisa")
    div2.classList.add("cartotal")
    paragraph2.classList.add("carrinho")
    paragraph3.classList.add("carbox")
    cartContainer.classList.add("cartconteiner")

    paragraph.textContent = "Pesquisar"
    paragraph2.textContent = "Carrinho de compras"
    paragraph3.textContent = "Carrinho vazio"

    divinput.append(input, paragraph)
    div2.append(paragraph2, cartContainer)
    cartContainer.appendChild(paragraph3)
    div.append(divinput, div2)

    document.querySelector(".container2").append(div) 

    return div
}
carrinhoCompras()

let cartotal = document.querySelector(".cartotal")

function criarCarrinho(carrinhoitem){
for(let i = 0; i < carrinhoitem.length; i++){
    
    //let carrinho = document.querySelector(".cartconteiner")
    let carrinhoproduto = carrinhoitem[i]
    let cardCart = criarCardCarrinho(carrinhoproduto)
    console.log(carrinhoproduto)
    
    //carrinho.appendChild(cardCart)
    document.querySelector(".cartconteiner").append(cardCart) 

}

}
function criarCardCarrinho(produto){
    let div = document.createElement("div")
    let tagImg = document.createElement ("img")
    let tagName = document.createElement("h2")
    let tagValor = document.createElement("p")
    let tagButton = document.createElement("button")

    tagImg.src = produto.img
    tagName.innerText = produto.nameItem
    tagValor.innerText = `R$ ${produto.value},00`
    tagButton.innerText = produto.addCart
    
    div.append(tagImg, tagName, tagValor, tagButton)

    return div
}
criarCarrinho()