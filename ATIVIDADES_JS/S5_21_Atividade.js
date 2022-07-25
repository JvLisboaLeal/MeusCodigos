const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]

function Kata1() {
    let meuRetorno = []
    for (let counter = 1; counter <= 25; counter++) {
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log(Kata1())

function Kata2() {
    let meuRetorno = []
    for (let counter = 25; counter >= 1; counter--) {
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log (Kata2())

function Kata3() {
    let meuRetorno = []
    for (let counter = -1; counter >= -25; counter--) {
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log (Kata3())

function Kata4() {
    let meuRetorno = []
    for (let counter = -25; counter <= -1; counter++) {
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log(Kata4())

function Kata5() {
    let meuRetorno = []
    for (let counter = 25; counter >= -25; counter -=2) {
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log(Kata5())

function Kata6() {
    let meuRetorno = []
    for (let counter = 1; counter <= 100; counter++) {
        if (counter % 3 == 0){
            meuRetorno.push(counter)
        }
        
    }
    return meuRetorno
}
console.log(Kata6())

function Kata7() {
    let meuRetorno = []
    for (let counter = 1; counter <= 100; counter++) {
        if (counter % 7 == 0){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno
}
console.log(Kata7())

function Kata8() {
    let meuRetorno = []
    for (let counter = 100; counter >= 1; counter--) {
        if ((counter % 3 == 0) || (counter % 7 == 0)){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno
}
console.log(Kata8())

function Kata9() {
    let meuRetorno = []
    for (let counter = 1; counter <= 100; counter++) {
        if ((counter % 2 == 1) && (counter % 5 == 0)){
            meuRetorno.push(counter)
        }
    }
    return meuRetorno
}
console.log(Kata9())

function kata10(){
    return sampleArray
}
console.log(kata10())

function kata11(){
    let meuRetorno = []
    for (let counter = 0; counter < sampleArray.length; counter++){
    if (sampleArray[counter] % 2 == 0){
        meuRetorno.push(sampleArray[counter])
    }
}
    return meuRetorno
}
console.log(kata11())

function kata12(){
    let meuRetorno = []
    for (let counter = 0; counter < sampleArray.length; counter++){
    if (sampleArray[counter] % 2 == 1){
        meuRetorno.push(sampleArray[counter])
    }
}
    return meuRetorno
}
console.log(kata12())

function kata13(){
    let meuRetorno = []
    for (let counter = 0; counter < sampleArray.length; counter++){
    if (sampleArray[counter] % 8 == 0){
        meuRetorno.push(sampleArray[counter])
    }
}
    return meuRetorno
}
console.log(kata13())

function kata14(){
    let meuRetorno = []
    for (let counter = 0; counter < sampleArray.length; counter++){
    
    meuRetorno.push(sampleArray[counter]*sampleArray[counter])
    
}
    return meuRetorno
}
console.log(kata14())

function kata15(){
    let meuRetorno = 0
    for (let counter = 1; counter <= 20; counter++){
    meuRetorno = meuRetorno + counter
    
}
    return meuRetorno 
}
console.log(kata15())

function kata16(){
    let meuRetorno = 0
    for (let counter = 0; counter < sampleArray.length; counter++){
    meuRetorno = meuRetorno + sampleArray[counter]
    
}
    return meuRetorno
}
console.log(kata16())

function kata17(){
    return Math.min(...sampleArray)
}
console.log(kata17())

function kata18(){
    return Math.max(...sampleArray)
}
console.log(kata18())