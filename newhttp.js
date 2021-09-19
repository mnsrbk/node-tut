const http = require('http');
const serv = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page!')
  }
  if (req.url === '/about') {
    res.end('Welcome to our about page!')
  }
  res.end(`
    <h1>Ooops!</h1>
  `)
})

serv.listen(3000)