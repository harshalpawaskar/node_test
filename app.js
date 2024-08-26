const os = require('os')

const user = os.userInfo()

//console.log(user)
//console.log(os.uptime())

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}

//console.log(os)
//console.log(currentOs)

const path = require('path')

//console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'test.txt')
//console.log(filePath)

const base = path.basename(filePath)
//console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
//console.log(absolute)

const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our home page')
  } else if (req.url === '/about') {
    res.write('Welcome to our about page')
  } else {
    res.write(
      `<h1>Oops!</h1><p>We can't find the page you entered.</p><a href="/">Back Home</a>`
    )
  }

  res.end()
})

//server.listen(4000)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
