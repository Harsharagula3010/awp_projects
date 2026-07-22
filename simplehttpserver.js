const http = require('http');
const server = http.createServer(function(req,res){
			res.writeHead(200,{'content-type': 'text/plain'} );
			res.end('hello !your node js is working');
		});
const PORT = 3000 ;
server.listen(PORT, function(){
		console.log('server is running'+PORT+'\n');
	});
 