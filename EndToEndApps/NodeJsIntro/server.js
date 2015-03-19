var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	
	var request = {};
	for (var prop in req) {
    if (obj.hasOwnProperty(prop)) {
        request[prop] = req[prop];
    }
	}
	
	res.write(JSON.stringify(request.toString()));
	res.end();
}).listen(2222);