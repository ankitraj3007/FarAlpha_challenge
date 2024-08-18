const http=require('http');
const hostname='0.0.0.0';
const port=80;

const server=http.createServer((req,res)=>{
if(req.url==='/sayHello'){
res.statusCode=200;
res.setHeader('Content-Type','application/json');
res.end(JSON,stringify({message:"Hello User"}));
}else{
res.statusCode=404;
res.end('Not Found');
}
});

server.listen(port,hostname,()=>{
console.log('server running at hostname: ${hostname},port: ${port}/');
});
