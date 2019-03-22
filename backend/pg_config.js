const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'simpleauction',
  password: 'admin',
  port: 5432
})


const getItems = (req, res) => {
	pool.query('SELECT * from items', (err, result) =>{
		res.send(result.rows)
	})
}

const getItemById = (req, res) => {
	const id = parseInt(req.params.itemId)
	pool.query(`SELECT * from items where ID = ${id}`, (err, result) =>{
		res.send(result.rows)
	})
}

const getDescriptionById = (req, res) => {
	const id = parseInt(req.params.itemId)
	pool.query(`SELECT description from descriptions where item_id = ${id}`, 
		(err, result) =>{
			res.send(result.rows)
	})
}

const getImagesById = (req, res) => {
	const id = parseInt(req.params.itemId)
	pool.query(`SELECT image_src from images where item_id = ${id}`, 
		(err, result) =>{
			res.send(result.rows)
	})
}

const getBidByUser = (req, res) => {
	const id = parseInt(req.params.userId)
	pool.query(`SELECT price, item_id from bids where user_id = ${id}`, 
		(err, result) =>{
			res.send(result.rows)
	})
}

const getBidByItem = (req, res) => {
	const id = parseInt(req.params.itemId)
	pool.query(`SELECT price, user_id from bids where item_id = ${id}`, 
		(err, result) =>{
			res.send(result.rows)
	})
}

module.exports = {
	getItems,
	getItemById,
	getDescriptionById,
	getImagesById,
	getBidByUser,
	getBidByItem

}
