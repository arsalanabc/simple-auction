import React, { useState, useEffect } from 'react'
import './index.css'
import Description from './description'


const ItemBox = () => {

	const [title, setTitle] = useState('');
	const [items, setItems] = useState('[]');

	const getItems = () => {
		fetch('http://localhost:3000/items')
	    .then(response => response.json())
      	.then(data => data)
		.catch(err => {throw err})
		}

	// const getUser = id => {
	// 	fetch(`http://localhost:3000/user/${id}`)
	// 	.then(response => response.json())
	// 	.then(data => data)
	// 	.catch(err => {throw err})
	// }

	// const getImages = itemId => {
	// 	 fetch(`http://localhost:3000/images/${itemId}`)
	// 	.then(response => response.json())
	// 	.then(data => data)
	// 	//.then(image_src => console.log(image_src))
	// 	.catch(err => {throw err})
	// }

	useEffect(
			 getItems,
			 []
			)
	

	return (<div className="itembox"> 
				<div className="item_info">
					<img src="https://picsum.photos/200/300"/>
					<text> £45.00 </text>
					<text> winner </text>

					<button> Button </button>
				</div>

				<div className="item_description">
					<div className="item_title">
						<h2> 
							{title} 
						</h2>
					</div>
					<div className="item_list">
					<Description itemId={1} />
					</div>

				</div>

			</div>)

}

export default ItemBox