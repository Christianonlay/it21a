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

function computerfactorial(){
    console.log("factorial");
    rl.question("Enter a number for factorial: ", (numstr) =>{
    let num = parseInt(numstr);

    if(isNaN(num) || num<0){
        console.log("Please enter a non-negative integer");
    } else {

        let fact = 1;
        for (let i = 1; i <= num ; i++){
            fact *=i;

        }
        console.log("The factorial of "+ num + " is " + fact);
    }
    backtoMenu();
});
}

function backtoMenu(){
    console.log("-------");
    console.log("1. back to menu");
    console.log("2. Exit");
    rl.question("what would you like to do next? (1-2) :", (backtoMenuChoice)=>{
        if()