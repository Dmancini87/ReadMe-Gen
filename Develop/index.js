// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'title of your readme',
      },
      {
        type: 'input',
        name: 'description',
        message: 'the Readmes description',
      },
      {
        type: 'input',
        name: 'contents',
        message: 'the table of contents',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'how to install',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'usage information',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'contribution guidelines',
      },
      {
        type: 'input',
        name: 'test',
        message:'test instructions',
      },
      {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    ];


// TODO: Create a function to write README file
    // fs.writeFile(fileName, data, err => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("Success!")
    // });
function generateMarkdown(answers){
    return `

    title: ${answers.title}

    description: ${answers.description}

    contents: ${answers.contents}

    installation: ${answers.installation}

    usage: ${answers.usage}

    contribution: ${answers.contribution}

    test: ${answers.test}
    
    license: ${answers.license}
    `;

}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(function(answers)
    {
      const mD = generateMarkdown(answers);
        fs.writeFile(README.md, mD, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Success!")
        });
    });
 
}

// Function call to initialize app
init();
