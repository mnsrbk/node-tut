const EventEmitter = require('events'); //it is a class


const path = require('path')

// console.log(__filename);
// console.log(__dirname);
var url = 'http://site.com/log'

class Logger extends EventEmitter{
  log (message) {
    console.log(message)
    //Raise an event
    this.emit('messageLogged', {id:1, url: 'google.com'});
  }
}


module.exports = Logger;
// module.exports.endPoint = url;
// var obj = path.parse(__filename);
// console.log(obj)
