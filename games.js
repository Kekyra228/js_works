function seasons() {
    let month = prompt("Введите число")

    if (month >=3 && month <= 5) {
        alert('Spring')
    }

    else if (month >=6 && month <=8) {
        alert ('Summer')}

    else if (month >=9 && month <=11) {
        alert ('autumn')}

    else if (month === 12 || month === 1 || month ===2) {
        alert('Winter') }

    else   {
        alert ('error')};

        
}




function rememberWords() {
const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const randomArr = arr.sort(() => Math.random() - 0.5);
console.log(randomArr)

const question = String(prompt("Чему равнялся первый элемент массива?"));
const question2 = String(prompt("Чему равнялся последний элемент массива"));


if (question === arr[0] && question2 === arr[6]) {
   alert("Угадал, поздравляю!")

} 
else if (question === arr[0] || question2 === arr[6]) {
   alert("«Вы были близки к победе!")
}
else {
   alert ("Неверно :(")
}
}