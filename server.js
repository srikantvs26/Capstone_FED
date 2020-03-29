//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.use(allowCrossDomain);

// Serve only the static files form the dist directory
app.use(express.static('./dist/OnlineDietSystem'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/OnlineDietSystem/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);