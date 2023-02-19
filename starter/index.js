const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "please provide your project description"
    },
    {
        type: "input",
        name: "installation",
        message: "please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "what are the usage instructions?"
    },
    {
        type: "input",
        name: "licence",
        message: "what licence are you using?"
    },
    {
        type: "input",
        name: "contributers",
        message: "who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "banana tests"
    },
    {
        type: "input",
        name: "questions",
        message: "banana questions"
    }
];

const promptUser = (questions) => {
    inquirer.prompt(questions)
    .then((answers) => {
        
        const mdContent = generateMarkdown(answers);
        writeToFile('README.md', mdContent);
         
    })
}

// function to write README file
function writeToFile(fileName, data) {
    //fs.writeFileSync('ReadMe.md')
    console.log(process.cwd());
    fs.writeFile(path.join(process.cwd() + "/dist/" + fileName), data, (err) => err && console.error(err))
}

// function to initialize program
function init() {

    promptUser(questions)

}

// function call to initialize program
init();
