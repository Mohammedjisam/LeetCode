function minWindow(s, t) {
    let map = {}, left = 0, right = 0, minStart = 0, minLen = Infinity, count = t.length;
    for (let char of t) map[char] = (map[char] || 0) + 1;
    while (right < s.length) {
        if (map[s[right]] > 0) count--;
        map[s[right]]--;
        right++;
        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            map[s[left]]++;
            if (map[s[left]] > 0) count++;
            left++;
        }
    }
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}
