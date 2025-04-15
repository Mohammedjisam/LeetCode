function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let line: string[] = [];
    let lineLength = 0;

    for (let word of words) {
        if (lineLength + line.length + word.length > maxWidth) {
            let spacesToAdd = maxWidth - lineLength;
            let lineStr = "";

            if (line.length === 1) {
                lineStr = line[0] + " ".repeat(spacesToAdd);
            } else {
                const spaceBetween = Math.floor(spacesToAdd / (line.length - 1));
                const extraSpaces = spacesToAdd % (line.length - 1);

                for (let i = 0; i < line.length; i++) {
                    lineStr += line[i];
                    if (i < line.length - 1) {
                        lineStr += " ".repeat(spaceBetween + (i < extraSpaces ? 1 : 0));
                    }
                }
            }

            result.push(lineStr);
            line = [];
            lineLength = 0;
        }

        line.push(word);
        lineLength += word.length;
    }

    // Last line (left-justified)
    const lastLine = line.join(" ") + " ".repeat(maxWidth - (line.join(" ").length));
    result.push(lastLine);

    return result;
}
