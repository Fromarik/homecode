
let andreyStryng = "у нас дано предложение из любого количества слов и нм нужно каждое слово отзеркалить при это порядок слов остаеться"


console.log(reverseString(andreyStryng))

function reverseString(string) {
  let newString = "";
  let wordReverse = "";
  let i = string.length - 1
  const isSymbol = (symbol) => !/\p{Letter}/u.test(symbol);
  while (i >= 0) {
    isSymbol(string[i]) && (() => { newString = string[i] + wordReverse + newString; })()
    wordReverse = isSymbol(string[i]) ? "" : wordReverse + string[i];
    i--;
  }
  return wordReverse + newString;
}



newStryngArray = andreyStryng.split(" ")
console.log(newStryngArray[1].length)

//"римский калькулятор"


