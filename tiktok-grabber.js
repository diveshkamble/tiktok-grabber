#!/usr/bin/env node
const yargv = require('yargs');
const chalk = require ('chalk');
const figlet = require ('figlet');
const clear = require('clear');
const {GetImages} = require('./index');
const inquirer = require('./inquirer');
clear();
console.log(chalk.red(figlet.textSync('tiktok-grabber',{horizontalLayout:'full'})));

yargv
.command('fetch','fetch data',{},async function(argv)
{if(argv.username)
{
GetImages(argv.username,argv.count);
}
else
{
 const answer = await inquirer.getInput();
 GetImages(answer.username,answer.count)
}
})
.usage('Usage: $0 fetch -u [username] -c[num]')
.usage('Usage: $0 fetch')
.example('$0 fetch',' prompt to type in username and count')
.alias('fetch','f')
.option('u')
.string('u')
.option('c')
.number('c')
.alias('u','username')
.alias('c','count')
.nargs('u',1)
.example("$0 fetch -u foobar -c 5", "fetch 5 posts of user 'foobar'")
.default('c',100)
.help('h')
.alias('h','help')
.demandCommand()
.argv

