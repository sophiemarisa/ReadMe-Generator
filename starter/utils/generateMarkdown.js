// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ##Table of Contents 
  1. [Installation](#Installation)
  2. [Licence](#Licence)
  3. [Usage](#Usage)
  4. [Contributers](#Contributers)
  5. [Contact for Questions](#Questions)

  ## Installation
  ${answers.installation}

  ## Licence 
  ${answers.licence}

  ## Usage
  ${answers.usage}

  ## Contributers
  ${answers.contributers}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.questions}

`;
}

module.exports = generateMarkdown;
