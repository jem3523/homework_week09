const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data)
{
return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.color].wrapperBackground};
         padding-top: 100px;
         height: 550px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         text-align: center;
         }
         .photo-header h1, .photo-header h2,.photo-header h3 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
        	padding-top: 100px;
	        padding-bottom: 50px;
	        padding-left: 100px;
	        padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           padding-bottom: 50px;
           border-radius: 6px;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      <body>
    <div class = "wrapper">
      <div class = "card">
        <div class = "photo-header">
          <image src = "${[data.imageURL]}">
          <h1>Hi!</h1>
          <h2>My name is ${[data.fullName]}!</h2>
          <h3>Currently @  ${[data.company]}</h3>
          <div class = "links-nav">
            <div class = "nav-link">
              <h4><a href = "https://www.google.com/maps/place/${[data.location]}" title = "https://www.google.com/maps/place/${[data.location]}"><i class="fas fa-location-arrow"></i> ${[data.location]}</a></h4>
            </div>
            <div class = "nav-link">
              <h4><a href = "${[data.profile]}" title = "${[data.profile]}"><i class="fab fa-github-alt"></i> GitHub</a></h4>
            </div>
            <div class = "nav-link">
              <h4><a href = "${[data.blog]}" title = "${[data.blog]}"><i class="fas fa-rss"></i> Blog</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class = "container">
    <div class = "row">
      <div class = "col">
        <h3>${[data.bio]}</h3>
      </div>
    </div>
    <div class = "row">
      <div class = "col">
        <div class = "card">
          <h3>Public Repositories</h3>
          <h3>${[data.repoCount]}</h3>
        </div>
      </div>
      <div class = "col">
        <div class = "card">
          <h3>Followers</h3>
          <h3>${[data.followersCount]}</h3>
        </div>
      </div>
    </div>
    <div class = "row">
      <div class = "col">
        <div class = "card">
          <h3>GitHub Stars</h3>
          <h3>${[data.starCount]}</h3>
        </div>
      </div>
      <div class = "col">
        <div class = "card">
          <h3>Following</h3>
          <h3>${[data.followingCount]}</h3>
        </div>
      </div>
    </div>
  </div>
  <div class = "wrapper"></div>
</body>
</html>
`};

//https://www.sitepoint.com/understanding-module-exports-exports-node-js/
//exports.generateHTML = generateHTML;
module.exports = generateHTML;