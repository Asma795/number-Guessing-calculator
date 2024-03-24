#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n\tLet's play this simple game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const Answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number between 1 to 10",
    },
]);
if (Answer.userGuessNumber === randomNumber) {
    console.log(chalk.yellow("Congratulations ! You guess the correct number."));
}
else {
    console.log(chalk.green("Sorry, You guess the wrong number."));
}
