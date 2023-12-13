// 1
// const str = "js";
// console.log(str.toUpperCase())

// 2 зад
// function strStart (array, string) {
//     const strWithNew = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].startsWith(string)){
//             strWithNew.push(array[i])
//         }
//     }
//     return strWithNew
// }

// console.log(strStart(['Бородинский', 'Молоко', 'Бородавка', 'Конференция'], "Бо"));



// 3    
// x = Math.round(32.58884);
// y = Math.ceil(32.58884);
// z = Math.floor(32.58884);
// console.log(x)
// console.log(y)
// console.log(z)


// 4 зад
// let numArr = [52, 53, 49, 77, 21, 32];
// let maxArr = Math.max(...numArr);
// console.log(maxArr)
// let minArr = Math.min(...numArr);
// console.log(minArr)

// 5 зад
// let number = (Math.floor(Math.random() * 10) + 1 );
// console.log(number)

// 6 
// function getRandomArrNumbers (number) {
// 	let newArr = [];
// 	for (let i = 0; i < number/2; i++) {
// 		newArr.push(Math.round(Math.random() * number));
// 	}
// 	console.log(newArr)
// }
// console.log(getRandomArrNumbers(12))


// 7
// const roundNums = (a,b) => {
//     return Math.round(Math.random() * (a - b) + b);
    
//  }
//  console.log(roundNums(24,12))



// 8
// const currentDay = new Date();
// console.log(currentDay);


// 9
// let current = new Date();
// current.setDate(current.getDate() + 73);
// console.log(current)


// 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// const currentDate = new Date();

// function date (currentDate) {
//    let fullDate = "Дата: " + currentDate.getDate() + " " +
//     months[currentDate.getMonth()] + " " +
//     currentDate.getFullYear() + ", " +
//     days[currentDate.getDay()]; 
// let fullTime = `Время: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

// return fullDate + "\n" + fullTime

// }


// console.log(date(currentDate))



// 11 зад

// const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// const randomArr = arr.sort(() => Math.random() - 0.5);
// console.log(randomArr)

// const question = String(prompt("Чему равнялся первый элемент массива?"));
// const question2 = String(prompt("Чему равнялся последний элемент массива"));


// if (question === arr[0] && question2 === arr[6]) {
//    alert("Угадал, поздравляю!")

// } 
// else if (question === arr[0] || question2 === arr[6]) {
//    alert("«Вы были близки к победе!")
// }
// else {
//    alert ("Неверно :(")
// }