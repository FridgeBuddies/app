/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var home = require('./routes/home');
var homeB = require('./routes/homeB');
var freezer = require('./routes/freezer');
var freezerB = require('./routes/freezerB');
var fridge = require('./routes/fridge');
var fridgeB = require('./routes/fridgeB');
var recipes = require('./routes/recipes');
var recipesB = require('./routes/recipesB');
var pantry = require('./routes/pantry');
var pantryB = require('./routes/pantryB');
var add = require('./routes/add');
var addB = require('./routes/addB');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.set('partial', path.join(__dirname, 'public/partials'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/home', home.view);
app.get('/homeB', homeB.view);
app.get('/freezer', freezer.view);
app.get('/freezerB', freezerB.view);
app.get('/fridge', fridge.view);
app.get('/fridgeB', fridgeB.view);
app.get('/recipes', recipes.view);
app.get('/recipesB', recipesB.view);
app.get('/pantry', pantry.view);
app.get('/pantryB', pantryB.view);
app.get('/add', add.view);
app.get('/addB', addB.view);
//app.get('/hello/:userName', hello.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
