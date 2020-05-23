const inquirer = require('inquirer');
module.exports={
    getInput:()=>{
        const questions =[ {
            name:'username',
            type:'input',
            message:'please enter username',
            validate:function(value){
                if(value.length)
                return true;
                else
                return 'Please enter valid username';
            }
        },
       { name:'count',
       type:'input',
       message:"please enter posts count (default:100)",
       validate:function(value){
           if(value<=0)
           return true;
           else
           return 'please enter a valid posts count';
       }
    },
    

    ]
    return inquirer.prompt(questions);
    }

};

