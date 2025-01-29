const morseCode = {
    a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.",
    g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..",
    m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.",
    s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
    y: "-.--", z: "--.."
};

var uniqueMorseRepresentations = function(words) {
    const set = new Set();
    for (let i = 0; i < words.length; i++) {
        let encryptedWord = "";
        for (let j = 0; j < words[i].length; j++) {
            const character = words[i][j];
            encryptedWord += morseCode[character];
        }
        set.add(encryptedWord);
    }
    return set.size;
};