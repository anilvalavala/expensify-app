const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT;

const publicPath = path.join(__dirname, '../', 'public')

//app.use is used to customize express server by setting up middleware
//middleware is something that gets executed for each request
//For example we might need to log something when each request arrives server
//All such sorts of functionality is included in static function in express class
app.use(express.static(publicPath));

//This is similat to apiFallBack setting for dev-server
//Responisble to load pages if requested directly using url, instead of clicking on appropriate buttons
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port ? port : 3000, () => {console.log('Express server is up')});