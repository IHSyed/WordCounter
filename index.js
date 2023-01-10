#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//import { Console } from "console";
async function query() {
    const ans = await inquirer.prompt([
        {
            name: "para",
            type: "input",
            message: chalk.blueBright(`Please enter the Paragraph or sentence for WORD & ALPHABET COUNT `)
        }
    ]);
    // Words Count, without White Space.
    const words = ans.para.trim().split(" ");
    console.log(words);
    console.log();
    console.log(`The number of WORDS in the paragraph/sentence are : ${words.length}`);
    console.log();
    // Character Count. Characters without White Space.
    const remove_char = ans.para.replace(/[^A-Za-z]+/g, "");
    //console.log(remove_char);
    console.log;
    console.log(`The number of CHARACTERS in the paragraph/sentence are : ${remove_char.length}`);
    console.log();
}
//query();
async function repeat() {
    do {
        await query();
        var repeatAgain = await inquirer
            .prompt([
            {
                type: "input",
                name: "repeat",
                message: chalk.bgYellow("Do you want to Repeat")
            }
        ]);
    } while (repeatAgain.repeat === "Y" || repeatAgain.repeat === "y" || repeatAgain.repeat === "Yes" || repeatAgain.repeat === "yes");
}
repeat();
