// 1 зад
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// // const sortPeople = [...people].sort((age) => 47 > 7);
// // console.log(sortPeople)

// const sorPeople = people.sort((a, b)=>{
//    if (a['age']  < b ['age']) return -1
// })
// console.log(sorPeople)




// 2 зад
// function isPositive(nums) {
//     return nums > 0
//     }
//     function isMale(user) {
//     return user.gender === "male"
//     }
//     function filter(arr, callback ) {
//     const result = [];
//     arr.forEach(element => {
//         if (callback(element)) {
//             result.push(element)
//         }
//     });
//     return result
//     }
    
//     console.log(filter([3, -4, 1, 9], isPositive)); 
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale)); 





// 3 зад

// const timer = (currentDay) => {
// 	const timerId = setInterval(() => {
// 		console.log(new Date());
// 	}, 3000);

//    setTimeout (()=> {
//       clearInterval(timerId)
//       console.log("30 секунд прошло")
//    }, 30000)
// };

// timer(new Date());


// 4 зад

// function delayForSecond() {
//    setTimeout(, 1000)
// console.log()

// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })


//5

// function delayForSecond(cb) {
//    setTimeout(() => {
//        console.log('Прошла одна секунда');
//            if(cb) { 	cb(); }  
//          

//    }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//    console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже: не поняла!!!
// delayForSecond (() => sayHi('Глеб'))
