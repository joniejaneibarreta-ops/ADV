let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filtered = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filtered.push(num);
        count++;
    }
}
console.log( `Found ${count} numbers: [${filtered.join(", ")}]`);