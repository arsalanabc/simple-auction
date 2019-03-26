const db = require('./pg_config')
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('hello world'))

app.get('/items', (req, res) => {db.getItems(req, res)})
app.get('/item/:itemId', (req, res) => {db.getItems(req, res)})
app.get('/user/:userId', (req, res) => {db.getUserById(req, res)})
app.get('/description/:itemId', (req, res) => {db.getDescriptionById(req, res)})
app.get('/images/:itemId', (req, res) => {db.getImagesById(req, res)})
app.get('/bidsbyuser/:userId', (req, res) => {db.getBidByUser(req, res)})
app.get('/bidsbyitem/:itemId', (req, res) => {db.getBidByItem(req, res)})

app.listen(port, () => console.log('example of app listening'))


module.exports = app;