// Задача 3. Написать функцию/метод, которая возвращает массив простых чисел 
// в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
// Например, на вход переданы 2 числа: от 11 до 20  (диапазон считается включая граничные значения).
// На выходе программа должна выдать [11, 13 , 17, 19]

const comonNumber = (start, end) => {
    const result = [];
    let denominatorList = [];
    while (start <= end){
        for (let i = 0; i <= start; i += 1){
            if (start % i === 0) denominatorList.push(i);
        }
        if (denominatorList.length === 2) result.push(start);
        start += 1;
        denominatorList = [];
    }
    return result;
};

console.log(comonNumber(31, 53))