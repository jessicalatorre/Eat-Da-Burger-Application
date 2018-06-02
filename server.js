//step 3 - server.js set up port to listen to server

// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//can use this port, so our express server can listen on it. This syntax used for deploying to heroku
var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine; this is an express-handlebars npm module
var exphbs = require('express-handlebars');

//set up engine to run handlebars. In documentation: Note: the route is in the routes file: not in this one. Example of documentation

        // // var express = require('express');
        // var exphbs  = require('express-handlebars');
        
        // var app = express();
        
        // app.engine('handlebars', exphbs({defaultLayout: 'main'}));
        // app.set('view engine', 'handlebars');
        
        // app.get('/', function (req, res) {
        //     res.render('home');
        // });
        
        // app.listen(3000);
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them. 
//requiring routes with the routes path allows us to use the routes file separately. 
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

//invoking port function
app.listen(port);
