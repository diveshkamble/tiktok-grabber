const TikTokScraper = require('tiktok-scraper');
const fs = require('fs');
const Path = require('path');
const axios  = require('axios');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const load = new Spinner('Downloading');
const chalk = require('chalk');
const userdir = './videos';
module.exports = {
 GetImages :async(username,count) => {
    try {
        load.start();
        const posts = await TikTokScraper.user(username, { number: count });
        if(posts.collector.length>0)
        {
            if(!fs.existsSync(userdir)){

                console.log(chalk.red('videos directory does not exist, creating videos directory...'))
                fs.mkdirSync(userdir,{recursive:true})
            }
           
           

        for(i=0;i<posts.collector.length;i++)
        {
           const  videoId = posts.collector[i].id;
            const videoUrl = posts.collector[i].videoUrl;
            
            const videoName = videoId+".mp4";
            const path = Path.resolve(__dirname, userdir,videoName );
            const writer = fs.createWriteStream(path)
            const response = await axios({
                url:videoUrl,
                method: 'GET',
                responseType: 'stream'
              })

              response.data.pipe(writer)
              console.log(chalk.yellow(' '+videoName));
              console.log(chalk.green('Download Completed.'))

        }
        
        load.stop();
        console.log(chalk.green('Task Successfully Completed....'));
        console.log(chalk.yellow('Videos path: ',Path.resolve(__dirname,userdir)));
    }
    else
    console.log(chalk.red('No Posts found!'));
        
    } catch (error) {
        console.log(chalk.red(error));
    }
},
}