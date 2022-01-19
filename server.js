/*
question breakdown=

so the user will can will give us input and using that input we have to give him timestamp

so let's think which type of input can user give us 
1.2022-01-17
2.unix timestamp means an integer
3.nothing means blank input
 */

// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// // your first API endpoint... 
// app.get("/api/hello", function (req, res) {
//   res.json({greeting: 'hello API'});
// });

//api endpoint for timestamp
app.get("/api/:dateInput?", function(req,res){
  //let's store the input in some const
  const dateInput=req.params.dateInput;
  let date;
  // console.log(!dateInput);
  //if user enter's empty input then output should today's date
  if(!dateInput){
    date = new Date(); 
  }
  else{
    //simple regx that checks yyyy-mm-dd
    let dateFormate= /\d{4}-\d{2}-\d{2}/.test(dateInput);
    // console.log(dateFormate);
    // console.log(typeof(dateInput));
    if(dateFormate){
      //the input will e string we have to converted it to int
      date = new Date(parseInt(dateInput));
    }
    else{
      // console.log(new Date(parseInt(dateInput)));
      if(!isNaN(dateInput)){
      date = new Date(parseInt(dateInput));
      }else{
      date = new Date(dateInput);
      }
    }

    
  }
  // console.log(date);

  // sending the json response 
  if(date.toString() === "Invalid Date"){
    res.json({
      'error':date.toUTCString()
    })
  }
  else{
  res.json({
    unix:date.getTime(),
    utc:date.toUTCString() 
  })
}
})

// listen for requests :)
var listener = app.listen(process.env.PORT||3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
