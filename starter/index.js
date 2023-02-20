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
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?"
    },
    {
        type: "input",
        name: "questions",
        message: "how can people contact you if they have questions about your work?"
    }
];

//uses inquirer to prompt user answers
const promptUser = (questions) => {
    inquirer.prompt(questions)
    .then((answers) => {
        //applies MIT badge and note to chosen licence
        new_answers = mitBadge(answers);
        console.log(new_answers);
        //makes the markdown content 
        const mdContent = generateMarkdown(new_answers);

        writeToFile('README.md', mdContent);
         
    })
}

function mitBadge (promptAnswers){
    console.log("chosen=" + promptAnswers.licence)
    if(promptAnswers.licence === "None"){
        promptAnswers.licence = ""
        promptAnswers.licenceMsg = "The application is not covered under a licence"
    }
    else if(promptAnswers.licence === "MIT"){
        promptAnswers.licence = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        promptAnswers.licenceMsg = "The application is covered under the MIT Licence"
    }
    else if(promptAnswers.licence === "Apache"){
        promptAnswers.licence = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        promptAnswers.licenceMsg = "The application is covered under the Apache Licence"
    }
    else if(promptAnswers.licence === "Mozilla"){
        promptAnswers.licence = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        promptAnswers.licenceMsg = "The application is covered under the Mozilla Licence"
    }
    else if(promptAnswers.licence === "GNU"){
        promptAnswers.licence = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        promptAnswers.licenceMsg = "The application is covered under the GNU Licence"
    }

    return promptAnswers
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd() + "/readmeFile/" + fileName), data, (err) => err && console.error(err))
}

// function to initialize program
function init() {
    promptUser(questions)

}

// function call to initialize program
init();
