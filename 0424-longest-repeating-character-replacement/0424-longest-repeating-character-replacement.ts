function characterReplacement(s: string, k: number): number {
    let left = 0;
    let maxLen = 0;
    let maxFreq = 0;
    const freq: { [key: string]: number } = {};
    for (let right = 0; right < s.length; right++) {
        freq[s[right]] = (freq[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[s[right]]);
        if (right - left + 1 - maxFreq > k) {
            freq[s[left]]--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
