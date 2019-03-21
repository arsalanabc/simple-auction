import React, { useState, useEffect } from 'react'
import './index.css'


const ItemBox = () => {
	
	const [stoppedTypingTime, setStoppedTypingTime] = useState(null)

	useEffect(() => {
			if (!stoppedTypingTime) return 
			const timer = setTimeout( () => {
		 		alert('validate')
			}
			, 2000)
		return () => {clearTimeout(timer)}
	}, [stoppedTypingTime])

	

	const updateStoppedTypingTime = () => {
		setStoppedTypingTime(Date.now)
	} 

	return (<div className="itembox"> 
				<div className="item_info">
					<img src="https://picsum.photos/200/300"/>
					<text> £45.00 </text>
					<text> winner </text>

					<button> Button </button>
				</div>

				<div className="item_description">
					<div className="item_title">
						<h2>Broken Time Machine </h2>
					</div>
					<div className="item_list">
						<ul>
							<li> This is an item  </li>
							<li> it has awesome feature </li>
							<li> dont even think twice about it dawg </li>
							<li> what are you waiting for </li>
							<li> just joking this shit is broken </li>
							<li> i am just being freacking honest with you man </li>
							<li> what else do you want me to do </li>
							<li> take it or go </li>
						</ul>
					</div>

				</div>

			</div>)

}

export default ItemBox;