const readline = require("readline");

const r1 = readline.createInterface({
    input:ProcessingInstruction.stdin,
    output:process.stdout
})

console.log("Factorial Appication");

console.log("1. say hello");
console.log("2. Compute Factorial");
console.log("3. exit");

rl.question("Enter your choice (1-3)", choice =>{
    if(choice==="1"){
        console.log ("hello there!");
    } else if (choice==="2"){
        console.log ("factorial!");
    } else if (choice==="3"){
         console.log ("exit!");
    } else{
        console.log("Invalid Choice.Please Try Again");
    }


})
