const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const simpleQuestions = [
    {
        type: "input",
        message: "What is your program called?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your program description?",
        name: "description"
    },
    {
        type: "input",
        message: "Developer name(s):",
        name: "name"
    }
];
const questions = [
    {
        type: "input",
        message: "What is your program called?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your program description?",
        name: "description"
    },
    {
        type: "input",
        message: "How can users install your service?",
        name: "installation"
    },
    {
        type: "input",
        message: "How to use your service?",
        name: "usage"
    },
    {
        type: "input",
        message: "How to run your programs tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        type: "list",
        message: "What license would you like?",
        choices: ["MIT", "Apache", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "Developer name(s):",
        name: "name"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername"
    }
];

function writeToFile(fileName, data) {
    console.log("Writing your README...");
    fs.writeFileSync(fileName, data);
    console.log("Your README is done!");
}

function init() {
    inquirer.prompt([{type: "list", message: "What kind of README would you like?", choices: ["Basic", "All included"], name: "type"}])
        .then(response => {
            if (response.type === "Basic") {
                inquirer.prompt(simpleQuestions)
                    .then(answers => {
                        const markdownText = generateMarkdown(answers, true);
                        writeToFile("README.md", markdownText);
                });
            } else {
                inquirer.prompt(questions)
                    .then(answers => {
                        const markdownText = generateMarkdown(answers);
                        writeToFile("README.md", markdownText);
                });
            }
        })
    
}

init();
