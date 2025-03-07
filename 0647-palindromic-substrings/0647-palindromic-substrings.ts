function countSubstrings(s: string): number {
  let count = 0;
  const expandAroundCenter = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return count;
}