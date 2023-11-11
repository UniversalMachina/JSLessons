const prompt = require('prompt-sync')();

let answer = prompt("you aproach a dark forrest, do you go 1. Left, or 2. Right?");
if (answer == "1"){
    console.log("you've decided to go left");
    answer = prompt("There is a chest do you open it? 1. No. 2. Yes")
    if (answer == "1"){
        console.log("You die poor");
        
    
    } 
    
    else if  (answer == "2"){
        console.log("The chest eats you");
    
    }

} 

else if  (answer == "2"){
    console.log("Pick a number from 1 to 5")
    for(let i = 0; i <10; i++){
        answer= prompt("your answer here");
        if(answer == "3"){
            console.log("you win the game");
            break;
        }
        else{
            console.log("guess again");
        }
        while(true){
            console.log("you've entered an endless pit of death");

        }
    }

}