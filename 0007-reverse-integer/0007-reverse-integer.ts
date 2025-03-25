function reverse(x: number): number {
    let reversed = 0;
    const isNegative = x < 0;
    x = Math.abs(x);
    
    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
        
        if (reversed > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    
    if (isNegative) {
        reversed = -reversed;
        if (reversed < -Math.pow(2, 31)) {
            return 0;
        }
    }
    
    return reversed;
}