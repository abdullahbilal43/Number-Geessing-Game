import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

console.log(figlet.textSync("Number Guessing Game !"));

do {
let input = await inquirer.prompt([{
    name: "guess",
    type: "number",
    message: "Guess The Number Between 0 to 10"}
]);

let answer = Math.floor(Math.random());

if(input.guess==answer){
    console.log(chalk.bold.blue("You Guessed Right."));
    break;
}
else{
    console.log(chalk.red.bold.italic("You Guessed Wrong."));
}
} while (true);