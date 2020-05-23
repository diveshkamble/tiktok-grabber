#!/usr/bin/env node
const {program} = require('commander');
const yargv = require('yargs');
const {GetImages} = require('./index.js')
//console.log('hello');
/*
program.version('1.0.0');
(async function main(){
program
.option('-u','--username [uname]','tiktok username')
.option('-c','--count [count]','posts count',100)
.action((uname)=>{
    //console.log(uname.args[0]);
    if (uname.args.length=1)
    count =100;
    else count =uname.args[1];
    console.log(count);
    console.log(uname.args.length)
    console.log(uname.args);
    //console.log(program.uname)
    // GetImages(uname,program.count);
});

await program.parseAsync(process.argv);
})();
*/


yargv
.command('fetch','fetch data',{},function(argv){GetImages(argv.username,argv.count)})
.usage('Usage: $0 fetch -u [username] -c[num]')
.alias('fetch','f')
.demandOption(['u'])
.string('u')
.option('c')
.number('c')
.alias('u','username')
.alias('c','count')
.nargs('u',1)
.example("tiktok-grabber fetch -u foobar -c 5", "fetch 5 posts of user 'foobar'")
.default('c',100)
.help('h')
.alias('h','help')
.argv
