function countNumbersWithUniqueDigits(n: number): number {
	if (!Number.isInteger(n) || n < 0) return 0
	if (n === 0) return 1
	if (n > 10) n = 10

	let res = 9

	for (let i = 9; i > 10 - n; i--) res *= i

    return res + countNumbersWithUniqueDigits(n - 1)
}