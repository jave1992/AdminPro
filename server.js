//Install express server
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/adminpro'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/adminpro/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(PORT);
});