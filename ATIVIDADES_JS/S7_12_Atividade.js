const products = [
{
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/no-img.png",
    imageDescription: "Uvas Crimson Saborosas",
},
{
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/product_2.png",
    imageDescription: "Bananas Maduras",
},
{
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/product_3.png",
    imageDescription: "Mamão Suculento",
},
{
    title: "Maçã",
    price: 9.29,
    category: "Frutas",
    image: "./img/product_4.png",
    imageDescription: "Maçã Verde",
},
{
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/no-img.png",
    imageDescription: "Doly Guaraná",
},
{
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/product_6.png",
    imageDescription: "Vinho Tinto",
},
{
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/no-img.png",
    imageDescription: "Água Tônica Gaseificada",
},
{
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/product_8.png",
    imageDescription: "Água de Côco Natual",
},

{
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/product_9.png",
    imageDescription: "Sabonete Natural em Barra",
},

{
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/product_10.png",
    imageDescription: "Detergente Aromatizado",
},

{
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/product_11.png",
    imageDescription: "Limpa Superfícies brilhante",
},

{
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/no-img.png",
    imageDescription: "Lustra Móveis Óleo de Peroba",
},
];

let tagFruits = document.querySelector(".fruits")
let tagDrinks = document.querySelector(".drinks")
let tagHygiene = document.querySelector(".hygiene")

let tagUlFrutas = document.createElement("ul")
let tagUlBebidas = document.createElement("ul")
let tagUlHigiene = document.createElement("ul")

tagFruits.appendChild(tagUlFrutas)
tagDrinks.appendChild(tagUlBebidas)
tagHygiene.appendChild(tagUlHigiene)

function items(products){
    for(let i = 0; i < products.length; i++){

    if(products[i].category == "Frutas"){
    const objeto = criarCardObjeto(products[i])
    tagUlFrutas.appendChild(objeto)
    }
    else if (products[i].category == "Bebidas"){
    const objeto = criarCardObjeto(products[i])
    tagUlBebidas.appendChild(objeto)
    }
    else if (products[i].category == "Higiene"){
    const objeto = criarCardObjeto(products[i])
    tagUlHigiene.appendChild(objeto)
    }
}
}

function criarCardObjeto(objeto){

let  productCard = document.createElement ("li")
let  productImg = document.createElement ("img")
let  productMain = document.createElement ("main")
let  productTitle = document.createElement ("h1")
let  productCategory = document.createElement ("h5")
let  productPrice = document.createElement ("strong")

productCard.classList.add("product")
productImg.src = objeto.image
productImg.alt = objeto.imageDescription
productImg.classList.add("product-img")
productMain.classList.add ("product-main")
productTitle.innerText = objeto.title
productTitle.classList.add("product-title")
productCategory.innerText = objeto.category
productCategory.classList.add("product-category")
productPrice.innerText = objeto.price
productPrice.classList.add("product-price")


productMain.append(productTitle, productCategory, productPrice)
productCard.appendChild(productImg)
productCard.appendChild(productMain)

return productCard
}
items(products)