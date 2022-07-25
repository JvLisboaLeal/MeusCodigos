let nameSnap = "Snap"
let nameCrackle = "Crackle"
let nameSnapCrackle = "SnapCrackle"
let nameTag = []
let counter = 1

function snapCrackle(maxValue){

 while (counter <= maxValue){
   
if  (counter % 5 === 0 && counter % 2 !== 0){
    nameTag.push(nameSnapCrackle)

} 
else if  (counter % 5 === 0){
    nameTag.push(nameCrackle)
} 

else if  (counter % 5 !== 0 && counter % 2 === 0){
    nameTag.push(counter)
} 

else if  (counter % 2 !== 0){
    nameTag.push(nameSnap)
}

counter++

}
return nameTag
}

let nameSnapPrime = "SnapPrime"
let nameCracklePrime = "CracklePrime"
let nameSnapCracklePrime = "SnapCracklePrime"
let namePrime = "Prime"
let nameTagPrime = []
let counterPrime = 1

function isPrime(number){
  for(let i = 2; i < number; i++)
    if(number%i === 0) return false;
  return number > 1;
}

function snapCracklePrime(maxValeu){

while (counterPrime <= maxValeu){

if  (isPrime(counterPrime) && counterPrime % 5 === 0 && counterPrime % 2 !== 0){
    nameTag.push(nameSnapCracklePrime)

} 

else if  (counterPrime % 5 === 0 && counterPrime % 2 !== 0){
    nameTag.push(nameSnapCrackle)

} 

else if  (isPrime(counterPrime) && counterPrime % 5 === 0){
    nameTag.push(nameCracklePrime)
} 

else if  (counterPrime % 5 === 0){
    nameTag.push(nameCrackle)
} 

else if  (isPrime(counterPrime) && counterPrime % 5 !== 0 && counterPrime % 2 === 0){
    nameTag.push(namePrime)
}

else if  (counterPrime % 5 !== 0 && counterPrime % 2 === 0){
    nameTag.push(counterPrime)
} 

else if  (isPrime(counterPrime) && counterPrime % 2 !== 0){
    nameTag.push(nameSnapPrime)
}

else if  (counterPrime % 2 !== 0){
    nameTag.push(nameSnap)
}

counterPrime++
}
return nameTag
}