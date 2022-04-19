// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
        type: "checkbox",
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
// const questions = ["What is your program called?", "What is your program description?", "How can users install your service?",
//                     "How to use your service?", "How to run your programs tests?", "What are the contribution guidelines?",
//                     "What license would you like? ('MIT', 'Apache', or blank)", "Your email:", "Developer name(s):", "Your Github username:"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log("Writing your README...");
            const markdownText = generateMarkdown(response);
            writeToFile("README.md", markdownText);
            console.log("Your README is done!");
        })
}

// Function call to initialize app
init();
