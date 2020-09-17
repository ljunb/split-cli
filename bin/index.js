#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const git = require('../commands/git');

program.command('push')
  .description('push local changes to remote with split-cli')
  .action(git);

program.parse(process.argv);
