function divide(dividend: number, divisor: number): number {
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) {
        if (dividend === -2147483648) return 2147483647;
        return -dividend;
    }
   
    let isNegative = (dividend < 0) !== (divisor < 0);
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let quotient = 0;
    while (a >= b) {
        let temp = b, multiple = 1;
        while (a >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }
        a -= temp;
        quotient += multiple;
    }
    quotient = isNegative ? -quotient : quotient;
    return Math.max(Math.min(quotient, 2147483647), -2147483648);
}