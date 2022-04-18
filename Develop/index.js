// TODO: Include packages needed for this application
const fs = require("fs");
const prompt = require('prompt-sync')();

// TODO: Create an array of questions for user input
const questions = ["What is your program called?", "What is your program description?", "How can users install your service?",
                    "How to use your service?", "How to run your programs tests?", "What are the contribution guidelines?",
                    "What license would you like? ('MIT', 'GPL', or blank)", "Your Github username:",
                    "Your email:", "Developer name(s):"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    const answers = [];
    questions.forEach((element, index) => {
        const answer = prompt(questions[index] + " ");
        console.log();
        answers.push(answer);
    });
    writeToFile("README.md", answers);
}

// Function call to initialize app
init();
