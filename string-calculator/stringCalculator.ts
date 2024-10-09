export function add(numbers: string): number {
    if (numbers === "") return 0;

    // Check for custom delimiter
    const hasCustomDelimiter = numbers.startsWith("//");
    let delimiter = ",";
    let numString = numbers;

    // Handle custom delimiter
    if (hasCustomDelimiter) {
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterEnd);
        numString = numbers.substring(delimiterEnd + 1);
    }

    // Handle multiple delimiters
    const numberArray = numString.split(new RegExp(`[${delimiter}\n]`)).map(Number);

    // Check for negative numbers and throw an error if found
    const negatives = numberArray.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
}
