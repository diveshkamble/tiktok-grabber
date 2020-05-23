const TikTokScraper = require('tiktok-scraper');
const fs = require('fs');
const Path = require('path');
const axios  = require('axios');
module.exports = {
 GetImages :async(username,count) => {
    try {
        const posts = await TikTokScraper.user(username, { number: count });
        //console.log(posts);
        //console.log('bye');
       //console.log(username);
       console.log(count);
        //console.log(posts.collector.length);
        
        for(i=0;i<posts.collector.length;i++)
        {
           const  videoId = posts.collector[i].id;
            const videoUrl = posts.collector[i].videoUrl;
            console.log(videoUrl);
            const videoName = videoId+".mp4";
            const path = Path.resolve(__dirname, 'videos',videoName );
            const writer = fs.createWriteStream(path)
            const response = await axios({
                url:videoUrl,
                method: 'GET',
                responseType: 'stream'
              })

              response.data.pipe(writer)
              console.log('helloooo');


        }
        console.log('out of for loop');

    } catch (error) {
        console.log(error);
    }
},
}