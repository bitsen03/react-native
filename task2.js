// Написать функцию/метод, которая на вход получает массив
//  положительных целых чисел произвольной длины. 
// Например [42, 12, 18]. На выходе возвращает массив чисел, которые
//  являются общими делителями для всех указанных числе. В примере это будет [2, 3, 6].

const denominator = (arr) => {
    return arr.reduce((acc, num) => {
        const repeatNum = [];
        for (let i = 2; i <= num; i += 1){
            if (num % i === 0 && !repeatNum.includes(i)) repeatNum.push(i);
        }
        if (acc.length !== 0) return [...repeatNum];
        return acc.filter((el) => repeatNum.includes(el));
    }, []);
};
console.log(denominator([42, 18, 12]));