const kRows = [
  new Set("qwertyuiop"),
  new Set("asdfghjkl"),
  new Set("zxcvbnm")
];

function findWords(words: string[]): string[] {
  return words.filter((word) => {
    const chars = word.toLowerCase().split('');
    return kRows.some((row) => chars.every((c) => row.has(c)));
  });
}