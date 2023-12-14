const myArray = [1,2,3]

myArray.push(4) 

console.log(myArray)

myArray.pop()

const remuvAlement = myArray.pop()

console.log(myArray)

console.log(remuvAlement)

myArray.unshift(10)

console.log(myArray)

const remuvAlement2 = myArray.shift()

console.log(myArray)

var countSheep = function (num){
    var countSheep = "";
    for(let i = 1; i < num; i++) { 
      countSheep+= `${i} sheep...`; }
    console.log(countSheep)
  }

  let num = 10

countSheep(num)

const myArray2 = [1,2,3,4,5]

function squareSum(numbers){
    let result = 0
    const squaersNumbers = numbers.map(nm=>nm*nm)
    for (let i=0; i<squaersNumbers.lenght; i++) {
      result += squaersNumbers[i];
    }
      console.log(squaersNumbers)
    }

    squareSum(myArray2)
    myArray.length
    