const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown")


const questions = [
    {
        type: "input", 
        message: "What is your project title?", 
        name: "Title"
    }, 

    {
        type: "input",
        message: "Please provide badge links",
        name: "badge"
    },

    {
        type: "input", 
        message: "Please provide a description of your project", 
        name: "Description"
    },

    {
        type: "input", 
        message: "What are the steps required to install your project?", 
        name: "Installation"
    },

    {
        type: "input", 
        message: "Provide instructions for use", 
        name: "Usage"
    },

    {
        type: "input",
        message: "Please provide the project license",
        name: "license"
    },

    {
        type: "input", 
        message: "Please list project contributors", 
        name: "Contributors"
    },

    {
        type: "input", 
        message: "Please provide test instructions", 
        name: "Test"
    },

    {
        type: "input", 
        message: "Your Github username", 
        name: "UserName"
    },

    {
        type: "input", 
        message: "Provide Email Address", 
        name: "Email"
    },
];

function writeToFile(fileName, data) {

fs.writeFile("./demo/"+fileName, data, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Successfully wrote: " + fileName);
})

}

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("DemoREADME.md", generateMarkdown(data));
    })
}

init();