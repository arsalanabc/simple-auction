import React, { useEffect, useState } from 'react'


const Description = (props) =>{

	const [descriptions, setDescription] = useState([])
	
	const getDescription = () => {
		 fetch(`http://localhost:3000/description/${props.itemId}`)
		.then(response => response.json())
		.then(description => setDescription(description))
		.catch(err => {throw err})
	} 

	useEffect(getDescription, [])


	return(
		<ul>
		{descriptions.map(point => <li> {point.description}  </li>)}
		</ul>
		)
	
	
}

export default Description

