const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
  let file = req.url === '/' ? 'index.html' : req.url.replace(/^\//,'');
  const safe = path.normalize(file).replace(/^\.\.(\/|\\)/,'');
  const full = path.join(__dirname,safe);
  fs.readFile(full,(err,data)=>{
    if(err){res.writeHead(404); return res.end('Not found');}
    const ext=path.extname(full); const types={'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.jpg':'image/jpeg','.png':'image/png'};
    res.writeHead(200,{'Content-Type':types[ext]||'text/plain'}); res.end(data);
  });
});
server.listen(port,'0.0.0.0',()=>console.log(`AdventureGo running on ${port}`));
