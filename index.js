console.log("starting up ...")


// import express JS module into app
// and creates its variable.
var express = require('express');
var app = express();
  


// Home page route.
app.get('/audio', callAudio)

app.listen(3000, function() {
    console.log('server running on port 3000');
} )

  
function callAudio(req, res) {
    
    console.log("get audio")

    var spawn = require("child_process").spawn;
      
    //var process = spawn('afplay', ['./alrarm.mp3'] )

    
    var process = spawn('omxplayer', ["./audio.aif"])
    
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    } )
}