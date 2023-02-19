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
        type: "list",
        name: "licence",
        message: "what licence are you using?",
        choices: ["None","MIT","Apache","Mozilla", "GNU"],
    },
    {
        type: "input",
        name: "contributers",
        message: "who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "how has this been tested?"
    },
    {
        type: "input",
        name: "questions",
        message: "how can people contact you to ask questions?"
    }
];


const promptUser = (questions) => {
    inquirer.prompt(questions)
    .then((answers) => {
        new_answers = mitBadge(answers);
        console.log(new_answers);
        const mdContent = generateMarkdown(new_answers);

        writeToFile('README.md', mdContent);
         
    })
}

function mitBadge (promptAnswers){
    console.log("chosen=" + promptAnswers.licence)
    if(promptAnswers.licence === "None"){
        promptAnswers.licence = "No licence was used"
    }
    else if(promptAnswers.licence === "MIT"){
        promptAnswers.licence = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if(promptAnswers.licence === "Apache"){
        promptAnswers.licence = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if(promptAnswers.licence === "Mozilla"){
        promptAnswers.licence = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if(promptAnswers.licence === "GNU"){
        promptAnswers.licence = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }

    return promptAnswers
}

// function to write README file
function writeToFile(fileName, data) {
    //fs.writeFileSync('ReadMe.md')
    fs.writeFile(path.join(process.cwd() + "/dist/" + fileName), data, (err) => err && console.error(err))
}

// function to initialize program
function init() {

    promptUser(questions)

}

// function call to initialize program
init();
