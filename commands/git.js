const inquirer = require('inquirer');
const { spawn } = require('child_process');
const chalk = require('chalk');
const shell = require('shelljs');

const gitAction = () => {
  inquirer.prompt([
    {
      name: 'message',
      type: 'input',
      message: 'Commit message: \n'
    }
  ]).then(answers => {
    const { message } = answers;
    const params = [
      'git pull',
      'git add .',
      `git commit -m "${message}"` ,
      'git push origin master'
    ];
    params.map(cmd => shell.exec(cmd));
  });
};

module.exports = gitAction;
