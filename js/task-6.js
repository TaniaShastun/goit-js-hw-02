let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt("Введите число:");
  if (input === null) {
    alert("Отменено пользователем!");
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    total += input;
  }
}

for (let i = 0; i < numbers.length; i = +1) {
  total = total + numbers[i];
}
console.log(numbers);
alert(`Общая сумма чисел равна ${total}`);
