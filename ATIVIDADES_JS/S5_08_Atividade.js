function add (x, y){

    return x + y
}

console.log (add(2, 4))

function multiply(x, y){
    multiplyResult = 0
    for(counter=1; counter<=y; counter++){
        multiplyResult = add(multiplyResult, x)
}
    return multiplyResult
}
  
console.log(multiply(6, 8))


function power (x,n) {
    expoResult = 1
    for (count=0; count<n; count++) {
    expoResult = multiply(expoResult,x)
}
    return expoResult
}
console.log(power(2,8))
    
function factorial (x){

    factoResult = 1
    for (count=x; count>=1; count--) {
    factoResult = multiply(factoResult,count)
}
    return factoResult
}

console.log (factorial(4))


function fibonacci(x){

let a = 0 
let b = 1
let fiboResult = x

    for(let count = 2; count <= x; count++) {
    fiboResult = add(a,b)
    a = b
    b = fiboResult
}

return fiboResult

}
console.log (fibonacci(7))