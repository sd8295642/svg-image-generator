const inquirer = require('inquirer');
const Circle = require('./lib/circles')
const Square = require('./lib/squares')
const Triangle = require('./lib/triangles')
const { writeFile } = require('fs/promises');


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

inquirer.prompt(questions)
.then(({ logoText, textColor, logoShape, shapeColor }) => {
    let selectedShape;

    if(logoShape === 'Circle'){
        selectedShape = new Circle(shapeColor, logoText, textColor);
    } else if (logoShape === 'Square'){
        selectedShape = new Square(shapeColor, logoText, textColor);
    } else {
        selectedShape = new Triangle(shapeColor, logoText, textColor);
    }
return writeFile('logo.svg', selectedShape.render()).then(() => {
    console.log('Logo created!')
});
})
