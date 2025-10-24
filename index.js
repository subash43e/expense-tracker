#!/usr/bin/env node

const { program } = require('commander');
const { readdirSync, writeFileSync, readFileSync } = require("node:fs");
const { join } = require('node:path');

const files = readdirSync(__dirname, { withFileTypes: true });
const checkingStoregeFile = files.find(file => file.name === 'db.json');
if (!checkingStoregeFile?.isFile) {
    writeFileSync(
        join(__dirname, 'db.json'),
        "[]", 'utf8'
    )
    console.log("File its not exist, Creating new file.")

}



program
    .version('1.0.0')
    .description('A simple expense tracker CLI');

program
    .command('add')
    .description('Add a new expense')
    .requiredOption('-d, --description <type>', 'Description of the expense')
    .requiredOption('-a, --amount <number>', 'Amount of the expense')
    .action((options) => {
        const amount = parseFloat(options.amount);
        if (isNaN(amount)) {
            console.log('Error: Amount must be a number.');
            process.exit(1);
        }
        let readedData = readFileSync("db.json", "utf8");
        if (!readedData) {
            readedData = "[]";
            writeFileSync('db.json', readedData, 'utf8');
        }
        const data = JSON.parse(readedData);
        const date = new Date()
        const newExpense = {
            id: data.length + 1,
            date: date,
            description: options.description,
            amount,
        };
        const newData = [...data, newExpense];
        writeFileSync("db.json", JSON.stringify(newData), 'utf-8');
        console.log(`Expense added successfully (ID: ${newExpense.id})`);
    });

program
    .command('list')
    .description('List all expenses')
    .action(() => {
        let readedData = readFileSync("db.json", "utf8");
        const data = JSON.parse(readedData);
        console.log(data)

    });

program.parse(process.argv);