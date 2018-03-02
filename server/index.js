const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, '../dist')))

app.listen(PORT, (err) => {
  if (err) {
    console.log('there was a problem starting the server')
  } else {
    console.log('server listening port 3000')
  }
})
