const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('hello world'))

app.get('/auctions', (request, response) => 
  	response.send('auctions')
)

app.listen(port, () => console.log('example of app listening'))


module.exports = app;