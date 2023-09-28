const http = require("http");
const route = require("./route.js");

const port = 4020;
const server = http.createServer((req, res)=>{

    //Issues with CORS solved
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204); 
        res.end();
        return;
    }
    route(req, res);
});

server.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
});