//Install express server
const express = require('express');
const path = require('path');

const app = express();


// Serve only the static files form the dist directory
app.use(express.static('./dist/OnlineDietSystem'));

app.get('/*', function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();    
res.sendFile(path.join(__dirname,'/dist/OnlineDietSystem/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);