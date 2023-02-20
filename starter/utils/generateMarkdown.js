// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ${answers.licence}

  ## Description
  ${answers.description}

  ## Table of Contents 
  1. [Installation](#Installation)
  2. [Licence](#Licence)
  3. [Usage](#Usage)
  4. [Contributers](#Contributers)
  4. [Tests](#Tests)
  5. [Contact for Questions](#Questions)

  ## Installation
  ${answers.installation}

  ## Licence 
  ${answers.licenceMsg}

  ## Usage
  ${answers.usage}

  ## Contributers
  ${answers.contributers}

  ## Tests
  ${answers.tests}

  ## Questions

  [GitHub](https://github.com/${answers.github})
  
  [Email](mailto:${answers.email})

  ${answers.questions}
`;
}

module.exports = generateMarkdown;
