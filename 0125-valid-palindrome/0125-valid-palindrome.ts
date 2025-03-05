function isPalindrome(s: string): boolean {
     const str:string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed:string = str.split('').reverse().join('');
    return str === reversed;
};
