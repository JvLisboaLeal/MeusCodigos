let itens = [
{
    imge: "./imgeek/animewoman.jpg",
    nome: 'Pintura 1',
    valor: 39.99
},
{
    imge: "./imgeek/clock.jpg",
    nome: 'Pintura 2',
    valor: 39.99
},
{
    imge: "./imgeek/Gamepad.jpg",
    nome: 'Pintura 3',
    valor: 39.99
},
]

let tagDivision = document.querySelector(".division")

function createActionItem(listaObjetos){

    for(let i =0; i<listaObjetos.length; i++){

    let objeto = listaObjetos[i]

    let cardObjeto  = criarCardObjeto(objeto)

    tagDivision.appendChild(cardObjeto)
}
listaObjetos(objeto)
}
function criarCardObjeto(objeto){
    let tagLi = document.createElement("li")
    let tagImge = document.createElement("img")
    let tagName = document.createElement("h3")
    let tagValor = document.createElement("p")

    tagLi.setAttribute("class", "items")
    tagImge.style.width = "150px"
    tagImge.style.height = "150px"
    tagImge.src = objeto.imge
    tagName.innerText = objeto.nome
    tagValor.innerText = objeto.valor

    tagLi.appendChild(tagImge)
    tagLi.appendChild(tagName)
    tagLi.appendChild(tagValor)

    return tagLi
}
createActionItem(itens)

/*let itens2 = [
{
    img2: "./imgeek/personagem.jpg",
    nome2: 'Boneco 1',
    valor2: 49.99
},
{
    img2: "./imgeek/dragonballpersonagem.jpg",
    nome2: 'Boneco 2',
    valor2: 49.99
},
{
    img2: "./imgeek/starwarspersonagem.jpg",
    nome2: 'Boneco 3',
    valor2: 49.99
},
]

let tagDivision2 = document.querySelector(".division")

function createPaintingItem2(listaObjetos2){

    for(let i =0; i<listaObjetos2.length; i++){

    let objeto2 = listaObjetos2[i]

    let cardObjeto2  = criarCardObjeto2(objeto2)

    tagDivision2.appendChild(cardObjeto2)
}
listaObjetos2(objeto2)
}
function criarCardObjeto2(objeto2){
    let tagLi2 = document.createElement("li")
    let tagImge2 = document.createElement("img")
    let tagName2 = document.createElement("h3")
    let tagValor2 = document.createElement("p")

    tagLi2.setAttribute("class", "items")
    tagImge2.style.width = "150px"
    tagImge2.style.height = "150px"
    tagImge2.src = objeto2.imge2
    tagName2.innerText = objeto2.nome2
    tagValor2.innerText = objeto2.valor2

    tagLi2.appendChild(tagImge2)
    tagLi2.appendChild(tagName2)
    tagLi2.appendChild(tagValor2)

    return tagLi2
}
createPaintingItem2(itens2)*/