#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2005;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number :",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin number!!!");
    const operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Your balance is insufficient");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastAns = await inquirer.prompt([
            {
                name: "fastAmount",
                message: "Select your amount :",
                type: "list",
                choices: [2000, 4000, 5000, 8000, 10000]
            }
        ]);
        let fastCash = myBalance - fastAns.fastAmount;
        console.log(`Your remaining Balance is : ${fastCash}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your balnce is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
