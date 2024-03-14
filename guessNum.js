#! /usr/bin/env node
import inquirer from "inquirer";
async function game() {
    console.log(" ====== Welcome to Guess the Number Game! ====== ");
    console.log(`You have 3 attempts to guess the number between 1 to 50.`);
    let secretNumber = Math.trunc(Math.random() * 50 + 1);
    let maxAttempt = 1;
    for (let attempt = 0; attempt <= 2; attempt++) {
        let { guess } = await inquirer.prompt([
            {
                name: "guess",
                type: "input",
                message: "Enter your Number",
            },
        ]);
        let convertNo = parseInt(guess);
        if (convertNo > 50 || convertNo < 1) {
            console.log("Invalid NO ,Please provid no  between 1 - 50");
        }
        else if (guess == secretNumber) {
            console.log(` ===== Congratulations! You guessed the Correct Number '${secretNumber}' in ${maxAttempt} attempts.! ===== `);
            return;
        }
        else if (secretNumber > guess) {
            console.log("Try a Higher Number");
            maxAttempt++;
        }
        else {
            console.log("Try a Smaller Number");
            maxAttempt++;
        }
    }
    console.log(`Game Over! The number was ${secretNumber}`);
}
game();
