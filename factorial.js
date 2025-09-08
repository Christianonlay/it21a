const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function mainMenu(){


console.log("factorial appication");

console.log("1. say hello");
console.log("2. compute factorial");
console.log("3. exit");



rl.question("Enter your choice (1-3):", choice =>{
    if(choice==="1"){
        console.log ("hello there!");
    } else if (choice==="2"){
         computerfactorial();
    } else if (choice==="3"){
        console.log("Existing program...Goodbye");
        rl.close();
    } else{
        console.log("Invalid choice. Please Try agian");
        mainMenu();

    }
})


}
