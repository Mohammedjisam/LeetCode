function lengthOfLongestSubstring(s: string): number {
    let map: Map<string, number> = new Map();  
    let left: number = 0;       
    let maxLength: number = 0;    
    for (let right: number = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(left, (map.get(s[right]) as number) + 1);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
