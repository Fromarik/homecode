// строка запрящающая использование не обьявленных переменных
let h
h = 10  									//проверка обьявленна ли переменная
//начало//	
console.log("helloworld")							 // consol - это обьект 
// . - точечная запись, при помощи нее вызыветься метод
//log - это метод одного из свойств обьекта
//dir - отображает все свойства обьекта
//table - отображает все свойства обьекта в табличном виде
//() - вызов метода
//helloworld - апгумент
console.log("______________________")
//переменные
//a = 10 									// Пока переменная не обьявлена будет ошибка
//console.log (a)					// Пока переменная не обьявлена будет ошибка
let a 										//объявление переменной
const b = 10 							//объявление константы по типу string undefind null... 

console.log(a, b)

a = 15

console.log(a)
console.log(b)
console.log(a, b)						// проверка что будет в консоле
console.log("___")



a = "My name"

console.log(a, b)
console.log("______________________")

const objectA = {
	c: 10,
	b: 15
}

const coppyOfA = objectA



console.log(objectA)
console.log(coppyOfA)

coppyOfA.c = 25

coppyOfA.d = ("Hismane")

console.log(objectA)
console.log(coppyOfA)
console.log("______________________")

const fullNameDate = {						//Добавление вложенных свойств
	FullName: {
		firstName: "artem",
		lastmane: "kislitsov"
	},
	date: "06.02.1998"
}

console.log(fullNameDate)

fullNameDate.FullName.otchestvo = "Sergevitch"

console.log(fullNameDate)

delete fullNameDate.FullName.otchestvo

console.log(fullNameDate)

console.log("______________________")

const PredUpr = {								//использование переменных в присвоеннии свойств
	age1: objectA.b,
	age2: b
}
console.log(PredUpr)

const PredUpr1 = {								//использование переменных в присвоеннии свойств
	age: objectA.b,
	b
}	
console.log(PredUpr1)

const PredUprjnenie = {					//добавление подсвойств
	age1: objectA.b,
	age2: b
}
PredUprjnenie.age1 = {
	do: 1,
	posle: 2
}
console.log(PredUprjnenie)

console.log("______________________")

const firstFunction = {					//отработка функции в обьекте
	city: "New York",
	cityGreating: function (x) {			//метод обьекта, c использованием ключевого слова function
		console.log("Greatings " + x)  //пробел можно ставить отдельно (" ") либо добавить в конце слова.
	}
}
firstFunction.cityGreating(firstFunction.city)

const firstFunction1 = {								//отработка функции в обьекте
	city: "New York",
	cityGreating(x) {											//метод обьекта, c использованием ключевого слова function
		console.log("Greatings " + x)
		return firstFunction1.city  				//пробел можно ставить отдельно (" ") либо добавить в конце слова.
	}
}

firstFunction1.cityGreating("napoli")

console.log("______________________ Есть вопрос 111 строка")
console.log(firstFunction1.cityGreating("moscow")) 			//ВОТ тут совсем не понятно почему так происодит
console.log(firstFunction1)
console.log("______________________")

//работа с JSON 
const post = {
	title: "my post",
	likes: 10
}
console.dir(post)

JSON.stringify(post)						// перевод данных в строку JSON
// она просто переработалась, что бы ипользовать
// ее дальше необходимо присвоите ее к какой-то переменной
console.log(JSON.stringify(post))
const postStringify = JSON.stringify(post) // теперь он у нас в памяти как переменная (обьект)

console.log(postStringify)				// можем его вывести в console

JSON.parse(postStringify)  			// пеаевод из строки JSON
const postParse = JSON.parse(postStringify) //присвоенние переменной 
console.log("___")
console.log(postParse)
console.log("______________________")


const firstFunction2 = Object.assign({}, firstFunction1) // копирование обьекта с созданием 
// нового обьекта во избежании мутаци 
// Object с большой буквы
console.log(firstFunction2) 														// Если будут вложенные обьекты, такой вариант не подходит
firstFunction2.city = "Moscow"												 // 
console.log(firstFunction2.city)
console.log(firstFunction1.city)

console.log("______________________")

const firstFunction3 = { ...firstFunction1 }     // (...) оператор разделения обьекта на свойства
// копирование воибежание мутаций 
// const переменная1 = { ...переменная2}
// создаеться новый обьект переменная 1 с такими же свойствами как и переменная2

/////////////лучший вариант копирования обьекта с сохранением всех данных////////
const firstFunction4 = JSON.parse(JSON.stringify(firstFunction1)) //сохраняться даже подсвойства

console.log("______________________")

function myFn(a, b) {
	a = a + 1
	c = a + b
	return c
}
console.log(myFn)

function callArtem() {
	console.log("artem")
}

//setTimeout (callArtem, 1000)  // колбэк функции другой функцией 
console.log("______________________")

console.log(10 === 10)
console.log(console.log(0 && 10))

const notCheck = 15
let notCheck2 = false 		// вопросик почему, ведь фактически тип не меняеться
notCheck2 = !notCheck
console.log(notCheck2)

console.log("______________________")

const myName = "Artem"
const myCity = "Sevastopol"
const obrachenie = `меня зовут ${myName} я из города ${myCity}`
console.log(obrachenie)
console.log("______________________")

// function positiveSum(arr) {
//	let summ = 0;
//	let positiveValue
//	for (let i = 0; i<arr.lendh; i++) {
//	  if (arr[i]>0) {
//		positiveValue = arr[i];
//	    summ += positiveValue;
//		return summ;
//	}
//	return summ
//  }

let array1 = [1, 2, 3, 4, 5]
//
// function positiveSum(arr) {
//	var sum = 0;
//	for (var i = 0; i < arr.lenght; i++) {
//	  if(arr[i] > 0) {
//	    sum += arr[i];
//	}
//  }
//  return sum;//
//}

function positiveSum(arr) {
	let sum = 0;
	let positiveValue
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positiveValue = arr[i];
		}
		sum += arr[i]
	}
	return sum;
}


console.log(positiveSum(array1))
console.log("______________________")

function positiveSum1(arr) {
	let suma = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			suma += arr[i];
		}
	}
	return suma;
}
console.log(positiveSum1(array1))

console.log("______________________")




const addDate = (testobject, addedDa1te = Date()) => ({
	...testobject,
	addedDa1te,
})

const howAddDate = {
	id: 1,
	HisMane: "misha",
}

howAddDateresult = addDate(howAddDate, 7)

console.dir(howAddDateresult)


