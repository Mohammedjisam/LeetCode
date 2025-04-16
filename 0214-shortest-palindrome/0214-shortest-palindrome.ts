function shortestPalindrome(s: string): string {
    const rev = s.split('').reverse().join('');
    const combined = s + '#' + rev;
    
    const lps = new Array(combined.length).fill(0);

    for (let i = 1; i < combined.length; i++) {
        let j = lps[i - 1];
        
        while (j > 0 && combined[i] !== combined[j]) {
            j = lps[j - 1];
        }
        
        if (combined[i] === combined[j]) {
            j++;
        }
        
        lps[i] = j;
    }

    const prefixLen = lps[combined.length - 1];
    const suffix = s.substring(prefixLen);
    const prepend = suffix.split('').reverse().join('');

    return prepend + s;
}
