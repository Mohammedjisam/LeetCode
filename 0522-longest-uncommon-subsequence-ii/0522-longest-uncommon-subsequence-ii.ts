function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++;
        }
    }
    return !(i < s.length)
};

function findLUSlength(strs: string[]): number {
    // sort decending by length
    strs.sort(function (a, b) { return b.length - a.length })

    const dictionary = new Map<string, boolean>();

    for (let i = 0; i < strs.length; i++) {
        const cur = strs[i];

        let checkForSubsec = false;
        for (let [key, val] of dictionary) {
            if (isSubsequence(cur, key)) {
                checkForSubsec = true;
                break;
            }
        }

        dictionary.set(cur, !checkForSubsec)
    }

    // input was sorted and strings were added in order of descending
    // length, so the first not rejected entry would be the LUS
    for (let [key, val] of dictionary) {
        if (val) {
            return key.length;
        }
    }

    return -1;
};