const hp = require('http');
const fs = require('fs');
const PORT = 2001;
const data = "this is the  file";
const server = hp.createServer(function(request,response){
                fs.writeFile("one.txt",data,"utf-8" ,(err)=>{
                        if(err){
                                console.log(err);
                                return ;
                        }
                        response.write("contents written  into the file is : "+data);
                        response.end();
});
});

server.listen(PORT, function(){
        console.log('server started.......\n');
        console.log('server is listening on '+PORT+'\n');
});
