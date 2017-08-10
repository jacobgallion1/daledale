var express = require('express');
var socket = require('socket.io');

//connect to todocontroller file
var todoController = require('./controllers/todoController');

var app = express();
var server = app.listen(3000, function(){
	console.log('listening to requests on port 3000');

});

app.set('view engine', 'ejs');

//static files and applies to all public files
app.use(express.static('public'));



//fire controllers
todoController(app);


//Socket setup
var io = socket(server);

io.on('connection', function(socket){
	console.log('made socket connection', socket.id);

});



