function moveZeros(arr) {
  let j = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 & i < j) {
      arr.push(arr[i])
      arr.splice(i, 1)
      j -= 1
    };
  };
  //return arr;
}


const array = [1, 0, 2, 6, 0, 1, 3, 5, 7, "0", +0, 1, 2, 3, "123", null, NaN, undefined, 123, 0, 1, 2, 3, 4, 5, "0"]
const array1 = [9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0]
console.log(array1)
moveZeros(array1)


console.log("_______________")

function moveZeros2(arr) {
  const fullArrayNoZero = arr.filter(num => num != 0)
  const arrayZero = arr.filter(num => num === 0)
  return [...fullArrayNoZero, ...arrayZero]
}

console.log(moveZeros2(array1))


const stryng = "у нас дано предложение из любого количества слов и нм нужно каждое слово отзеркалить при это порядок слов остаеться"

console.log(stryng.replace)


function dirReduc(arr) {


  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == "NORTH", arr[i + 1] == "SOUTH") {
      arr.splice(i, 2);
      if (i > 0) i = i - 1;
    }
    else if (arr[i] == "SOUTH", arr[i + 1] == "NORTH") {
      arr.splice(i, 2);
      if (i > 0) i = i - 1;
    }
    else if (arr[i] == "WEST", arr[i + 1] == "EAST") {
      arr.splice(i, 2);
      if (i > 0) i = i - 1;
    }
    else if (arr[i] == "EAST", arr[i + 1] == "WEST") {
      arr.splice(i, 2);
      if (i > 0) i = i - 1;
    }
    console.log(arr)
  }
  return arr
}

console.log("____________")
function dirReduc2(arr) {
  const constArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    //console.log(i,"i")  
    //for (let j=0; j<=constArr.length; j++) {
    //console.log(j,"j")
    if ((arr[i] == "NORTH" && arr[i - 1] == "SOUTH") ||
      (arr[i] == "SOUTH" && arr[i - 1] == "NORTH") ||
      (arr[i] == "WEST" && arr[i - 1] == "EAST") ||
      (arr[i] == "EAST" && arr[i - 1] == "WEST")) {
      arr.splice(i - 1, 2);

    }
    //}
    console.log(arr)
  }
  console.log(arr);
  return arr
}

function dirReduc3(arr) {
  let n, w, s, e

}

let navigation = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]

dirReduc2(navigation)

const andreyStryng = "у нас дано предложение из любого количества слов и нм нужно каждое слово отзеркалить при это порядок слов остаеться"

function andreyStryngFunction(str) {
  let array = str.split(" ")
  let arrayReverse
  let stryngReverse
  console.log(array)
  arrayReverse = array.map(Werbs => Werbs.split("").reverse().join(""))
  console.log(arrayReverse)
  stryngReverse = arrayReverse.join(" ")
  console.log(stryngReverse)
}

andreyStryngFunction(andreyStryng)

console.log("__________________")

const andreyStryngReverse = andreyStryng.split(" ").map(Werbs => Werbs.split("").reverse().join("")).join(" ")

console.log(andreyStryngReverse)

console.log("____________")

function reverseString5(string) {
  let newString = "";
  let wordReverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    const isSymbol = ",[].?!@#$%^&*()-_=+ ".includes(string[i]);
    if (isSymbol) {
      newString = string[i] + wordReverse + newString;
      continue;
    }
    wordReverse = isSymbol ? "" : wordReverse + string[i];
  }
  return wordReverse + newString;
}
const andreyStryng5 = "у нас дано предложение из любого количества слов и нм нужно каждое слово отзеркалить при это порядок слов остаеться"

function towerBuilder(nFloors) {
  let resultTower = []
  let star = "*"
  let spase = " "
  let numOfStars = 1
  let numOfSpase = nFloors - 1
  //for (let j=0; j<nFloors;j++){
  for (let i = 0; i < nFloors; i++) {
    resultTower[i] = `${spase.repeat(numOfSpase)}${star.repeat(numOfStars)}${spase.repeat(numOfSpase)}`
    numOfStars++
    numOfSpase--
    console.log(resultTower)
  }
  return resultTower
  //}
}

towerBuilder(3)
let number = 1234556.7593758560948756

console.log(`${number}`.length)

console.log(Math.floor(10 / 4))
console.log("_________________")

function expandedForm(num) {

  let resultStryng = "";
  let numberLength = `${num}`.length;
  let numbersForSumm;

  if (num == 0 || num < 0) return resultStryng = "0";
  for (let i = numberLength; i >= 0; i--) {
    numbersForSumm = Math.floor(num / Math.pow(10, i))
    if (numbersForSumm == 0) continue
    num < 10
      ? numbersForSumm = num
      : num = num - (numbersForSumm * Math.pow(10, i))
    console.log(num)
    console.log(numbersForSumm)
    console.log(`_______${i}`)
    resultStryng == ""
      ? resultStryng = `${numbersForSumm * Math.pow(10, i)}`
      : resultStryng = `${resultStryng} + ${numbersForSumm * Math.pow(10, i)} `;
    console.log(resultStryng)
  }
  return resultStryng
}

console.log(expandedForm(123456789))

function letMePlay(num) {
  console.log(num)
}

letMePlay(`${Math.pow(10, 10)}`)

console.log(letMePlay)

console.log("_______________________")

let homeArray = [1, 2, 3, 4, 5, false, undefined, null, 13, 14, 15, 0, 16]

console.log(homeArray)

homeArray[25] = 15

console.log(homeArray[25])

homeArray = homeArray.filter(Boolean)

console.log(homeArray)
console.log(homeArray.length)
let methodResult = 123321

// homeArray.forEach()
homeArray.pop()

// console.log("____________")
// console.log("____________")
// console.log(methodResult)
// console.log(homeArray.length)
// console.log(homeArray[10])

// console.log("____________")
// console.log(homeArray)

// let resultSumm = 0 

// //homeArray.forEach((element,i) => resultSumm += element + i)
// summRedused = homeArray.reduce((summ,el) => +summ)
// homeArray.map()
// console.log(summRedused)

console.log("____________")
console.log(homeArray)

const andreyStryng6 = "у нас дано предложение из любого количества слов и нм нужно каждое слово отзеркалить при это порядок слов остаеться"


function spinWords(string) {
  let resolvStryng
  let arrayArrayAfterSplit = string.split(" ")

  for (let i = 0; i < arrayArrayAfterSplit.length; i++) {
    console.log(arrayArrayAfterSplit)
    if (arrayArrayAfterSplit[i].length >= 5) {
      arrayArrayAfterSplit[i] = arrayArrayAfterSplit[i].split("").reverse().join("")
    }
  }
  return resolvStryng = arrayArrayAfterSplit.join(" ")
}

let arrayCodeWars = [1, 2, 3, 4, 5, 6, 7, 8, 2]


function oddOrEven(array) {
  let summ = 0
  array.forEach(el => summ += el)
  return summ % 2 === 0 ? "even" : "odd"
}

console.log(oddOrEven(arrayCodeWars))

let pincode = "12345"

function validatePIN(pin) {
  if ((pin.length == 4 || 6) && (typeof Number(pin) === Number)) return true
  return false

}

console.log(validatePIN(pincode))
console.log(typeof Number(pincode))


// const fib = n => {
//   let resultArray
//   let prev = 0, next = 1;
//   for(let i = 0; i < n; i++){
//     let temp = next;
//     next = prev + next;
//     prev = temp;
//   }
//   return resultArray = [prev,next,false]
// }
// console.log(fib(11))


function productFib(prod) {
  let actualFib = 1;
  let priveusFib = 0;
  let resMultFib = 0;
  let resultArray = [];
  let i = 0


  do {
    i++
    let temporal = actualFib;
   console.log("______________________")
   console.log("actual",actualFib);
   console.log("priveus",priveusFib);
   console.log("temporal",temporal)
    actualFib += priveusFib;
   console.log("temporal",temporal)
    priveusFib = temporal;
    resMultFib = actualFib * priveusFib;
    //console.log(resMultFib)
    console.log("___________")
    console.log(actualFib);
    console.log(priveusFib);
    //console.log(actualFib)
  } while ((prod == resMultFib) || (prod > resMultFib));

  if (prod == (actualFib - priveusFib) * priveusFib) resultArray = [actualFib - priveusFib, priveusFib, true]
  else resultArray = [priveusFib, actualFib, false];
  return resultArray;
}

//console.log(productFib(15123456789009876543234567890987654334567890))

let nummberarr = [1,2,3,4,5,6];
let resultnumber;
resultnumber=nummberarr;

nummberarr.push(10)

nummberarr=5

console.log(nummberarr,resultnumber)

// console.log(String(123).split("").reduce((mitly,el)=>mitly*el
