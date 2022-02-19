const data = require('./data.json')

// Функция которая получает отсортированный массив животных
function getAnimalList(animal) {
  return data.filter((item) => item.type === animal)
}

// Функция подсчета среднего возраста всех животных в массиве
function getAverageAge(arr) {
  return Math.round(
    arr.reduce((acc, item) => acc + item.age, 0) / data.length,
  )
}

// Функция счетчик животных

function getAnimalQuantity(animal) {
  return getAnimalList(animal).length
}

// Функция создает объект

function createObj(dog, cat, avgage) {
  return {
    dog,
    cat,
    avgage,
  }
}

function sortAnimalByAge(firstList, secondList) {
  let newArr = []

  return newArr.concat(
    firstList.sort((a, b) => b.age - a.age),
    secondList.sort((a, b) => a.age - b.age),
  )
}

// Функция которая фильтрует массив животных поцвету
function filterAnimalByColor(arr, color) {
  return arr.filter((item) => item.features.includes(color))
}

const task11Result = (animals) => {
  const result = {}
  // your code here

  return (result = createObj(
    getAnimalQuantity('dog'),
    getAnimalQuantity('cat'),
    getAverageAge(date),
  ))
}

console.log(task11Result(data))

const task12Result = (animals) => {
  const result = 0
  // your code here

  return (result = getAnimalList(animals).filter(
    (item) => item.breed && item.features.includes('black'),
  ).length)
}

console.log(task12Result(data))

const task13Result = (animals) => {
  const result = []
  // your code here

  return (result = animals.concat(
    filterAnimalByColor(
      getAnimalList('dog', 'white'),
      filterAnimalByColor(getAnimalList('cat', 'black')),
    ),
  ))
}

console.log(task13Result(data))

const task14Result = (animals) => {
  const result = []
  const i = animals.forEach((index) => index)
  // your code here
  return (result = sortAnimalByAge(
    getAnimalList(animals[i].type.cat),
    getAnimalList(animals[i].type.dog),
  ))
}

console.log(task14Result(data))

const myPowFunc = (number, n) => {
  let result = number
  // your code here
  for (let i = 0; i < n; i++) {
    result *= number
  }
  return result
}

const myPowFunc2 = (number, n) => {
  let result = number
  // your code here
  if (n > 1) {
    return result * myPowFunc2(result, n - 1);
  } else {
    return result
  }
}

console.log(myPowFunc(3, 4))
console.log(myPowFunc2(3, 4))

const myFlatFunc = (inputArray) => {
  const result = inputArray
  let flattend = [];
  (function flat(inputArray) {
    inputArray.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(inputArray);
  return result;
}

const myFlatFunc2 = (inputArray) => {
  const result = inputArray
  function flatDeep(result, d = 1) {
    return d > 0 ? result.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : result.slice();
  }
  return flatDeep(result)
}

const myFlatFunc3 = function flat (array, depth = Infinity) {
  const result = [];
  let currentDepth = 1;
  const recursiveFlat = function recursiveFlat (array, result) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'object' || currentDepth >= depth) {
        result.push(array[i]);
      } else {
        currentDepth++;
        recursiveFlat(array[i], result);
      }
    }
    return result;
  }
  return recursiveFlat(array, result);
}


console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]))
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
console.log(myFlatFunc2([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]))
console.log(myFlatFunc3([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]))
