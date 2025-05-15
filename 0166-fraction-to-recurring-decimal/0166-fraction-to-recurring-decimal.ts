function fractionToDecimal(numerator: number, denominator: number): string {
    let k = 1
    if (numerator * denominator < 0) k = -1
    numerator = Math.abs(numerator)
    denominator = Math.abs(denominator)
    const naturalPart = Math.trunc(numerator / denominator)
    let loop = false
    const excused: Record<string, number> = {}
    let redundancy = numerator % denominator
    excused[redundancy] = 0
    let decimalPart: string[] = []
    if (redundancy) {
        decimalPart.push(`${Math.trunc((redundancy * 10) / denominator)}`)
    }

    while (redundancy > 0) {
        redundancy = (redundancy * 10) % denominator
        if (excused[redundancy] !== undefined) {
            loop = true
            break
        }
        excused[redundancy] = decimalPart.length
        redundancy &&
            decimalPart.push(`${Math.trunc((redundancy * 10) / denominator)}`)
    }
    const sign = k > 0 ? '' : '-'
    if (decimalPart.length === 0) return `${sign}${naturalPart}`
    if (loop) {
        const nonLoopPart = decimalPart.slice(0, excused[redundancy])
        const loopPart = decimalPart.slice(excused[redundancy])
        return `${sign}${naturalPart}.${nonLoopPart.join('')}(${loopPart.join(
            ''
        )})`
    }
    return `${sign}${naturalPart}.${decimalPart.join('')}`
}