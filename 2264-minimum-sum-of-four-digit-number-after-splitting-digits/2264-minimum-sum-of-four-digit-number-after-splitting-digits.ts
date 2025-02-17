function minimumSum(num: number): number {
    let digits = num.toString().split('').map(Number).sort((a, b) => a - b);
    let num1 = digits[0] * 10 + digits[2];
    let num2 = digits[1] * 10 + digits[3];
    return num1 + num2;
}

