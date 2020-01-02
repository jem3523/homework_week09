/*
You are required to submit the following:
* write README file
* An animated GIF demonstrating the app functionality
* A generated PDF of your GitHub profile
* The URL of the GitHub repository  */

//load the libraries
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const pdf = require('html-pdf');
const generateHTML = require ('./generateHTML');

//set up the fs as a promise
const writeFileAsync = util.promisify(fs.writeFile);

//this async function asks questions in the terminal, creates a template, exports
//the html, then reads that html and converts it to a PDF
async function init() 
{
    try
    {
        const answers = await inquirer.prompt([
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "username"
            },
            {
            type: "list",
            message: "What is your favorite color?",
            name: "color",
            choices: ["green","blue","pink","red"]
            },
        ]);

        //await keep this from progressing until the reponse is returned
        const response = await axios.get("https://api.github.com/users/" + answers.username);

        //await keep this from progressing until the reponse is returned
        const responseStars = await axios.get("https://api.github.com/users/" + answers.username + "/starred");

        //because star count must be read across an array of potential repos ...
        let starCount = 0;
        for (let i =0; i< responseStars.data.length; i++)
        {   
            starCount = starCount + responseStars.data[i].stargazers_count;
        };

        //also, if there is no blog, be sure to add "#" to the href
        let blogURL = response.data.blog;
        if(blogURL == "")
        {blogURL = "#"};

        //create an object with all the required data for the template
        const data =
        {
        color : answers.color,
        imageURL : response.data.avatar_url,
        fullName : response.data.name,
        bio : response.data.bio,
        company : response.data.company,
        location : response.data.location,       
        profile : response.data.html_url,       
        blog : blogURL,        
        repoCount : response.data.public_repos,
        followersCount : response.data.followers,
        followingCount : response.data.following,
        starsURL : response.data.starred_url,
        starCount : starCount
        }

        //console.log(data)
        
        //pass the data into the template, resulting in returned html
        const html = generateHTML(data);

        //write the html file, then turn around and read it into a pdf generator
        await writeFileAsync("./output.html", html);
        let readHTML = await fs.readFileSync('output.html', 'utf8');
        pdf.create(readHTML).toFile('./output.pdf', function(err, res) 
        {
          if (err) return console.log(err);
          console.log(res);;
        })
    }

    catch (err) 
    {console.log("my error: " + err);}
}

init();
