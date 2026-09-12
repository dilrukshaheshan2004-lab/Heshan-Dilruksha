const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp'};
const server=http.createServer((req,res)=>{
  const requested=(req.url||'/').split('?')[0];
  const file=requested==='/'?'index.html':requested.replace(/^\//,'');
  const safe=path.normalize(file).replace(/^\.\.(\/|\\)/,'');
  const full=path.join(__dirname,safe);
  fs.readFile(full,(err,data)=>{if(err){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});return res.end('Not found');}const ext=path.extname(full).toLowerCase();res.writeHead(200,{'Content-Type':types[ext]||'text/plain; charset=utf-8','Cache-Control':ext==='.html'?'no-cache':'public, max-age=86400'});res.end(data);});
});
server.listen(port,'0.0.0.0',()=>console.log(`AdventureGo running on ${port}`));
