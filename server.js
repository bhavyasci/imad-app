var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});





var articles= {
   articleOne : {
                     title: 'ARTICLE One | BHAVYA SHAH',
                       heading: 'ARTICLE ONE',
                     date: '1 Sept 2017',
                       content: `
             
             <h4>Personal</h4>
               <p>
              This is some personal information   about me. 
               </p>

          <h4>Professional</h4>
           <p>
           This is a list of my work experiences: 
            </p>
         <ol>
          <li> Company A: Worked as some very seriously</li>
          <li> Company B: Worked without seriousness </li>
         </ol>
         
        
            `
       
              },
    articleTow:{
        
    }   ,
    articleThree:{}
        

};

function createTemplate(data){
    
    var title=data.title;
    var heading=data.heading;
    var date= data.date;
    var content= data.content;

     var template=
    `
    
    
    <html>
    <head>
        <title>
            ${title}
        </title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
      <div class="container">  
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        
        <h3>${heading}</h3>
        
          <div>
            ${date}
          </div>
        
           <div>   
          ${content}
         
        </div> 
     </div>
</body>
</html>

    
    
    
    `
;

return(template);

}








app.get('/article-ONE', function (request ,response){
   response.send(createTemplate(articleOne)); 
});




app.get('/article-one', function (request ,response){
   response.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});

app.get('/article-two', function (request ,response){
   response.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (request ,response){
   response.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
