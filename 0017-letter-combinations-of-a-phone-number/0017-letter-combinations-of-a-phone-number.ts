function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return []; 
    const digitToChar: { [key: string]: string[] } = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    let result: string[] = [];
    function backtrack(index: number, path: string) {
        if (index === digits.length) {
            result.push(path); 
            return;
        }
        let letters = digitToChar[digits[index]]; 
        for (let letter of letters) {
            backtrack(index + 1, path + letter); 
        }
    }
    backtrack(0, ""); 
    return result;
}
