const inquirer = require('inquirer');
const shapes = require('./lib/shapes')
const circles = require('./lib/circles')
const squares = require('./lib/squares')
const triangles = require('./lib/triangles')


// Prompt the user with questions about desired shape using inquirer
const questions = [
    {
        type: 'input',
        message: 'Enter up to three characters.',
        name: 'logoText',
    },
    {
        type: 'input',
        message: 'Enter text color.',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Select shape: ',
        name: 'logoShape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        message: 'Enter shape color.',
        name: 'shapeColor',
    }
]

// Render shape

// write file