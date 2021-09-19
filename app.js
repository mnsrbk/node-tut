const os = require('os');
const fs = require('fs');
const http = require('http');

// const EventEmitter = require('events'); //it is a class

const Logger = require('./logger');
// console.log(logger);
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener called');
  console.log(arg);
})

logger.log('Hello world');

// var total = os.totalmem();
// var free = os.freemem();
// console.log(`Total memory: ${total/1024}`);
// console.log('Free memory: ' + free/1024);

// const files = fs.readdirSync('./');
fs.readdir('./', function(err, files) {
  if (err) console.log(`Error: ${err}`);
  // else console.log(`Result: ${files}`)
});

//Events
// const EventEmitter = require('events'); //it is a class
// const emitter = new EventEmitter();
//Register a listener of event
// emitter.on('messageLogged', (arg) => {
//   console.log('Listener called');
//   console.log(arg);
// })
//Raise an event
// emitter.emit('messageLogged', {id:1, url: 'google.com'});

//HTTP SERVER
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world fron NodeJS');
    res.end()
  }
  if (req.url === '/api/v1/courses') {
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});

// server.on('connection', (socket) => {
//   console.log('new connection')
// })

server.listen(3000);

console.log('Listening to port 3000')