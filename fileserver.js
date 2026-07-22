const { server } = require('./server');
const PORT = 2001;
server.listen(PORT, function(){
        console.log('server started.......\n');
        console.log('server is listening on '+PORT+'\n');
});
