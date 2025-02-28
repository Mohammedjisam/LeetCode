function minWindow(s: string, t: string): string {
    if (t.length === 0) return "";
    let frequencies = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        let targetEntry = frequencies.get(t[i]);
        frequencies.set(t[i], targetEntry ? targetEntry + 1 : 1);
    }
    let have = 0;
    let need = frequencies.size;
    let left = 0;
    let right = 0;
    let resLength = Number.MAX_SAFE_INTEGER;
    let resRange: number[] = [];
    while (right < s.length) {
        let entry = s[right];
        if (frequencies.has(entry)) {
            frequencies.set(entry, frequencies.get(entry)! - 1);
            if (frequencies.get(entry) === 0) have++;
        }
        while (have == need) {
            if (resLength > right - left + 1) {
                resLength = right - left + 1;
                resRange = [left, right];
            }
            let deleted = s[left++];
            if (frequencies.has(deleted)) {
                if (frequencies.get(deleted) === 0) have--;
                frequencies.set(deleted, frequencies.get(deleted)! + 1);
            }
        }
        right++;
    }
    return resLength === Number.MAX_SAFE_INTEGER ? "" : s.substring(resRange[0], resRange[1] + 1);
};