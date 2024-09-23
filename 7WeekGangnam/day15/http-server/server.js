
const http = require('http');

const server = http.createServer((req, res) => {
    // 서버 로직 작성

    const path = url.parse(req.url, true).pathname;
    if(path == "/user"){

    }
    else if (path == "/feed"){
      
    }
    else if (path == "/community"){
      
    }

    res.setHeader("Content-Type","text/html")
    res.end("OK")
});

server.listen("3000", () => {
    console.log('Server is running on http://localhost:3000');
});
