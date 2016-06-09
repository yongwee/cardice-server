var
	PORT = 8090,
	app  = require('express')(),
	http = require('http').Server(app),
	io   = require('socket.io')(http);

io.on('connection', function(socket) {
	// TODO
	console.log('a user has connected');
});

http.listen(PORT, function() {
	console.log('listening on port: ' + PORT);
});
