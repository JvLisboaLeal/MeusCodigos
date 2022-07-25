const array = ["Rafael", "Manoel", "Daniel"]

function positions (array){

if ("Daniel" !== array[0]) {
    array.shift ("Rafael")
    array.shift ("Manoel")
    array.push ("Rafael")
    array.push ("Manoel")
return "Daniel é o vencedor"
}

else if ("Daniel" === array[0]){
    
return "Este é o pódio"
}

}
console.log (array)
console.log (positions(array))
