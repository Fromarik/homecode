
let signature1 = [1,1,1];
let n1 = 10;

// function tribonacci(signature,n){
//     let resultArray = [];
//     let summOfLast3 = 0;

//     if (n==0) return resultArray;
    
//     for (let i=0; i<=n; i++) {
//       i<=2 
//         ? resultArray=signature.map(el=>el)
//         : (summOfLast3 = resultArray[i-1]+resultArray[i-2]+resultArray[i-3], 
//           resultArray.push(summOfLast3),
          
//           console.log("__________"),
//           console.log(resultArray[i]),
//           console.log(resultArray),
//           console.log(summOfLast3),
          
//           if (resultArray.length == n) break
//           )
//     }   
//   return resultArray
//   }
// сумирование последних треъ элеметов масива с указанием длины масива на выходе
// например [1,2,3] n=4 получим на выходе [1,2,3,6]
function tribonacci(signature,n) {
    let resultArray = [];
    let summOfLast3 = 0;

    if (n==0) return resultArray;

    if (n>=1, n<=3) {
        for (let i=0; i<n; i++){
            resultArray.push(signature[i])
        };
        return resultArray;
    }
    resultArray=[...signature];
    for (let i=0; i<n-3; i++){
        summOfLast3=resultArray[i]+resultArray[i+1]+resultArray[i+2];
        resultArray.push(summOfLast3);
    };

    return resultArray;

}





  console.log(tribonacci(signature1,n1))


//   function tribonacciCodeWars(signature,n){  
//     for (var i = 0; i < n-3; i++) { // iterate n times
//       signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//     }
//     return signature.slice(0, n); //return trib - length of n
//   }
  
//   tribonacciCodeWars(signature1,5)

//   console.log(signature1)

let aArray = [1,1,3,4,2]

let bArray = [1,3]

  function arrayDiff(a, b) {
    let resolvArray = [...a];

    var abcd = 20 // удалить
    
    if (a == [] || b == []) return a;
    
    a.forEach((element,index) =>{
      for (let i=0; i<b.length; i++) {
        if (element == b[i]) resolvArray.splice(index,1)
      }
    })
    return resolvArray
  }

  console.log(arrayDiff(aArray,bArray))

  console.log("____________")

  let arrayCodeWarsStryng = "fghjk12345"

  function incrementString (strng) {

    let result = 123;
    let preResultStryngArray=[]
    //let numberLength = 0;
    let lastSymbolStryng = strng[strng.length -1]
    
    if (isNaN(Number(lastSymbolStryng))) return console.log("результат без цыферек")

    for (i=1; i<=strng.length; i++) {
      console.log (strng[strng.length -i])
      console.log(i)
      if (typeof strng[strng.length -i]=="number") {
        preResultStryngArray.push(string)
      }
      console.log ("пре результат",preResultStryngArray)
    }

    return console.log("результат")
    
  }

  incrementString(arrayCodeWarsStryng)

  // let lastSymbolStryng = arrayCodeWarsStryng[arrayCodeWarsStryng.length -1]

  // console.log(typeof Number(arrayCodeWarsStryng[arrayCodeWarsStryng.length -1]))
  // console.log(typeof arrayCodeWarsStryng[arrayCodeWarsStryng.length -1])

  // console.log (typeof Number(lastSymbolStryng))
  // console.log(Number(lastSymbolStryng))

  

// // console.log(-arrayCodeWarsStryng.length)

// const a = 10
// console.log(abc)
// var abc = 10



// // //console.log(v)
// // if(1==true) 
// // console.log(v)
// // //console.log (abcd)

// console.log(typeof arrayDiff)

// console.log(1+1.923)


// // for (i = 0, j=0; i>=0; (i=> [1,2,3,4,5,-5][j])(j)) {
// //   console.log(i)
// //   j++
// // }

// let andreyStryng = "тут какоенибудь задание"
// // let stryngAndrey = ""
// // while (andreyStryng.length>stryngAndrey.length) {
// //   stryngAndrey += andreyStryng[andreyStryng.length-stryngAndrey.length-1]
// //   console.log(stryngAndrey)
// // }


// // console.log(stryngAndrey.length)



// const arrayAnrey = [1,2,3,4,5,6]

// // arrayAnrey.forEach((el,ind,array) => array[ind]=el*5)

// // console.log(arrayAnrey)

// // // console.log(arrayAnrey.with(2,6),arrayAnrey)
// // // arrayAnrey.with(2,6)

// // console.log(false == undefined);
// // console.log(false == null);
// // console.log(null == undefined);


// // // 3.	Что выведет в консоль следующий код?
// // const numbers = [1, 2, 3, 4, 5];
// // const [y,x] = numbers;
// // console.log(y,x);
// // function andrey (arr){
// //   let result=0
// // for (let i=0; i<arr.length; i++) {
// //   result+=arr[i];
  
// // }
// // return result
// // // }

// // console.log(andrey(arrayAnrey))


// function andrey(str) {
//   return str.split('').reverse().join('')
// }

// console.log(andrey(andreyStryng))
const stryngForUpperCase = "Какая-то строка но тут еще будут цыферки 1234567890"

let stryngpperCase = stryngForUpperCase.toUpperCase()

console.log(stryngForUpperCase,stryngpperCase)



console.log(stryngForUpperCase)

console.log(stryngForUpperCase)
console.log("______________________")

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 2000);

// Promise.resolve(3).then(console.log)

// setTimeout(() => {
//   console.log(5)
// },1000);

// console.log(4)

// console.log(typeof null)
// a = 123
// console.log(a,b,c)

// var a = 123;
// var b = {};
// var c = [];
// var d = function() {
//   console.log(10)
// }



console.log(typeof a,typeof b, typeof c,typeof d)