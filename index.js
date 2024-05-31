#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow("\n<<<<<<<<<< Wellcome To The FaizCode-Contact Menu Project >>>>>>>>>>\n"));
let contacts = [];
let ContactSerialNumber = 1;
async function InputContactMenu() {
    let InputOption = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: "Select Your Option",
            choices: ["Add Contact", "View Contact", "Close Menu"],
        },
    ]);
    let { option } = InputOption;
    console.log(option);
    if (option === "Add Contact")
        addContact();
    if (option === "View Contact")
        viewContact();
    if (option === "Close Menu")
        console.log(chalk.magentaBright(`\nThank You For Using.`));
}
InputContactMenu();
async function addContact() {
    let InputContactDetail = await inquirer.prompt([
        {
            name: "personName",
            type: "input",
            message: "Enter Person Name:",
        },
        {
            name: "personNum",
            type: "number",
            message: "Enter Contact Number:",
        },
    ]);
    let { personName, personNum } = InputContactDetail;
    contacts.push({
        ID: ContactSerialNumber++,
        Name: personName,
        PhoneNo: personNum,
    });
    console.log(chalk.cyan(`\nNew Contact Has Been Added.\n`));
    InputContactMenu();
}
async function viewContact() {
    if (contacts.length > 0)
        contacts.forEach((user) => console.log(chalk.greenBright(`\n${user.ID}. Person Name: ${user.Name} --- Contact Number: ${user.PhoneNo}\n`)));
    else
        console.log(chalk.redBright(`\nNo Contacts Available\n`));
    InputContactMenu();
}
