import React, { useEffect, useState } from 'react'

const Images = (props) => {

	const [images, setImages] = useState([])

	const getImages = itemId => {
		 fetch(`http://localhost:3000/images/${props.itemId}`)
		.then(response => response.json())
		.then(data => setImages(data))
		//.then(image_src => console.log(image_src))
		.catch(err => {throw err})
	}

	useEffect(getImages, [])

	return (<div>{images.map(image => <img src={image.image_src} />)}</div>)
}

export default Images