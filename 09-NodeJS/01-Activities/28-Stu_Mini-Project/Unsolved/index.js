const inquirer = require("inquirer");
const fs = require("fs");

const profile = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your title?"
        },
        {
            type: "input",
            name: "age",
            message: "How old are you?"
        },
        {
            type: "input",
            name: "job",
            message: "Describe your dream job"
        },
        {
            type: "list",
            name: "mastery",
            message: "what would you say is your mastery level of this material?",
            choices: [
                "no clue what I am doing",
                "some of it looks familiar",
                "I understand the concepts",
                "I can apply the concepts to build a functioning program",
                "I can fully design and build applications from scratch"
            ]
        }
    ])
    )
});
