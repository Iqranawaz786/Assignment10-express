const path = require('path');
const express = require ("express");
const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

    app.listen(3000)
    console.log("listening on port 3000")