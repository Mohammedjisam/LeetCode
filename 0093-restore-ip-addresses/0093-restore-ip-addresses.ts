function restoreIpAddresses(s: string): string[] {
    const result: string[] = [];
    function backtrack(start: number, path: string[], segmentCount: number): void {
        if (segmentCount === 4 && start === s.length) {
            result.push(path.join('.'));
            return;
        }
        if (segmentCount >= 4) return;
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;
            const segment = s.substring(start, start + len);
            if ((segment.length > 1 && segment[0] === '0') || +segment > 255) continue;
            path.push(segment);
            backtrack(start + len, path, segmentCount + 1);
            path.pop();
        }
    }
    backtrack(0, [], 0);
    return result;
}
