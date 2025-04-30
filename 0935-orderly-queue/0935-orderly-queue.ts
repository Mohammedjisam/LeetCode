function orderlyQueue(s: string, k: number): string {
    if (k > 1) return [...s].sort((a, b) => a.localeCompare(b)).join('');
    
    let res = s;
    [...s].forEach((_, i) => {
        if (i === 0) return; // skip the first letter
        const tmp = s.substring(i) + s.substring(0, i);
        if (res.localeCompare(tmp) > 0) res = tmp;
    });
    
    return res;
};