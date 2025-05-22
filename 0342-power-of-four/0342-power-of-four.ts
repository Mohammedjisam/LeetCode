function isPowerOfFour(n: number): boolean {
    return (n & 0x55555555) !== 0 && (n & (n-1)) === 0;
}