const arrayMap = [1, 2, 3, 4, 5];

function callbackMap(element, index, array) {
  return `Número ${element} na posição: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  let newArr = []
  for(let i = 0; i < arrayMap.length; i++){
    newArr.push(callback(array[i],i,array))
  }
  return newArr
}

console.log(map(arrayMap, callbackMap));

const arrayFilter = [1, 2, 3, 4, 5];

function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  let newArr = []
  for(let i = 0; i < arrayFilter.length; i++){
    if (callback(array[i],i,array)){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(filter(arrayFilter, callbackFilter));

const arrayReduce = [1, 2, 3, 4, 5];

function callbackReduce(acumulator, valorAtual) {
  let resultado = acumulator + valorAtual;
  return resultado
};

function reduce(array, callback, initialValue = 0){
  for(let i = 0; i < arrayReduce.length; i++){
    initialValue = callback(array[i],initialValue)
  }
  return initialValue
}

console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));
