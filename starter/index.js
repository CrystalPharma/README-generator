const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your project GitHub repository name?',
        name: 'repoName',
    },
    {
        type: 'input',
        message: 'Please write a brief description for your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please write a brief instructions on how to install the project',
        default: 'npm i',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What would you like to let the user to know about using the app?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license would you use for your project?',
        choices: ['MIT', 'GNU General Public License v3.0', 'Apache License 2.0', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'How would you like users or developers to contribute for your project?',
        default: 'Pull requests are welcome. For major changes, please open an issue first to discuss further on  how you would like to ammend. Thank you.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What test did you perform for the project app?',
        default: 'npm test',
        name: 'test',
    },
    {
        type: 'input',
        message: 'How do users or clients contact if there is any question related to the project repo?',
        default: 'Please do not hesitate to contact me via email should there be any question related to the project app',
        name: 'question',
    },

]).then(data => {
    const { username, email, name, repoName, description, instructions, usage, license, contributing, test, question } = data;
    const readme = `# ${name}
## Description
${description}
    
## Table of Contents
- [Description](#Description)
- [Table of Contents](#Table-of-Contents)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)
- [Badges](#Badges)

## Installation
${instructions}
## Usage
${usage}
    
## License
${license}
    
## Contributing
${contributing}
    
## Test
${test}
    
## Questions
${question} on ${email}

## Badges
[![GitHub](https://img.shields.io/github/languages/top/${username}/${repoName})

![GitHub](https://img.shields.io/github/license/${username}/${repoName})`


    const filename = `${name.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile("README.md", readme, (err) =>
        err ? console.log(err) : console.log('You have successfully created a standard README.md!')
    );
});

// function to write README file
// function writeToFile(fileName, data) {
// }


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
