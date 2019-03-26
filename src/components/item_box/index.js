import React, { useState, useEffect } from 'react'
import './index.css'
import Description from './description'
import HighestBidder from './highestBidder'
import Images from './image'


const ItemBox = () => {

	const [items, setItems] = useState([]);

	const getItems = () => {
		fetch('http://localhost:3000/items')
	    .then(response => response.json())
      	.then(items => setItems(items))
		.catch(err => {throw err})
		}

	// const getUser = id => {
	// 	fetch(`http://localhost:3000/user/${id}`)
	// 	.then(response => response.json())
	// 	.then(data => data)
	// 	.catch(err => {throw err})
	// }

	useEffect(
			 getItems,
			 []
			)
	

	return (<div>
				{items.map(item => 
				<div className='itembox'> 
						<div className="item_info">
							<Images itemId={item.id} />
							<text> £{item.price}.00 </text>
							<HighestBidder userId={item.highest_bidder} />
							<button> Button </button>
						</div>

						<div className="item_description">
							<div className="item_title">
								<h2>{item.name}</h2>
							</div>
							<Description itemId={item.id} />
						</div>
				</div>
				)}
			</div>)
}

export default ItemBox