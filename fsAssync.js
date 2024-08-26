const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Following is the conversation -\n${first}\n${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Done with this task')
      }
    )
  })
})

console.log('end')
