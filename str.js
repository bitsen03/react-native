const conventorStr = (number) => {
    const lastChar = number % 10;
    const lastHondredChar = number % 100;
    let computer;
    if (lastChar === 1 && lastHondredChar !== 11) {
        computer = 'компьютер';
    } else {
        computer = 'компьютеров';
    }
    return `${number} ${computer}`;
}

console.log(conventorStr(41))
console.log(conventorStr(25))
console.log(conventorStr(1))
console.log(conventorStr(101))