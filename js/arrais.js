let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // тестовый масив

let resultPop = testArray.pop() //удалем последний элемент 
//возвращаем в переменную удаленный элемент.
console.log("pop", resultPop, testArray) //изменяет исходный масив
console.log("___________")

let resultPush = testArray.push(11) // добавляет элемент в конец 
//возвращаем длинну строки 
console.log("push", resultPush, testArray) //изменяет исходный масив
console.log("___________")

let resultShift = testArray.shift() //удаляет первый элемент 
//возвращает удаленный элемент
console.log("shift", resultShift, testArray) //изменяет исходный масив
console.log("___________")

let resultUnShift = testArray.unshift("хоб и 1") //добавляет элемент в начало строки
// возвращает новую длину строки 
console.log("unShift",resultUnShift,testArray)  // изменяет исходный масив
console.log("___________") 

let resultMap = testArray.map(el => el) // создает новый васив который можно 
//присвоить в новую переменную, в зависимости от функции в аргументе
console.log("map", testArray, resultMap) // НЕ изменяет исходный масив
console.log("___________")

let resultForEach = testArray.forEach(el => { el = el * 2; console.log(el); return el }) // некая замена
//цикла фор что бы пробежаться по масиву, ничего не возвращает даже если захотеть
console.log("forEach", resultForEach, testArray) // не изменяет исходный масив
console.log("___________")

let resultSplice = testArray.splice(2, 2, "а вот и 3", "и еще 4")  // УУУУХХХХ
//кароче крайне универсальная штука синтаксис такой 
// splice (
// (index) сюда мы помещаем индекс с которого начнуться наши дейсвия, 
// (number) сюда мы помещаем количесво удалаяеммых элементо начиная с индеса (нумерация с 0)
// (значение,значение,значение и т.д.) сюда мы помещаем то что будет добавлено в масив
//) Возвращает новый масив состоящий из удаленных элементов
console.log(resultSplice, "splice", testArray )
console.log("___________")

let
