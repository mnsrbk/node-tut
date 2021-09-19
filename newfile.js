// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});


//Non-blocking async approach
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  const first = res;
  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err)
      return
    }
    const second = res;
    writeFile ('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, res) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(res);
    })
  })
})