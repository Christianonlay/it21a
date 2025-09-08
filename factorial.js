const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log("factorial appication");

console.log("1. say hello");
console.log("2. compute factorial");
console.log("3. exit");

rl.question("enter your choice (1-3)", choice =>{
    if(choice==="1"){
        console.log ("hello there!");
    } else if (choice==="2"){
        console.log ("factorial!");

        rl.question("Enter a number for factorial: ", (numStr)=>{
            let num = parseInt(numStr);
            if (isNaN() ) || num <0){
                console.log("Please enter a non-negative integer");
        
    } else {
         let fact = 1;
         for(let i = 1; i <= num ; i itt){

         }
        console.log("The factorial of "+ num + " fact);
    }

});
