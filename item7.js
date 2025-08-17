let words = ["apple", "banana", "cherry", "grape"];
let transformed = [];

for(let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = "";

    for(let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
    }
    transformed.push(reversedWord.toUpperCase());
}
console.log("Original words:", words);
console.log("Transformed words:", transformed);