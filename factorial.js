const readline = require("readline");

const r1 = readline.createInterface({
    input:ProcessingInstruction.stdin,
    output:process.stdout
})

console.log("Factorial Appication");

console.log("1. say hello");
console.log("2. Compute Factorial");
console.log("3. exit");