import React, {useState} from 'react'


const Additems = () => {

	const [item, setItem] = useState({images:[], descriptions:[]})

	const addDescription = (e) =>{
		item.descriptions.push("")
		setItem({...item})
		e.preventDefault()
	}

	const addImages = (e) =>{
		if(item.images.length >= 3) {
			item.error = "Max image limit is reached"
			setItem({...item})
			return null
		}
		item.images.push("")
		setItem({...item})
		e.preventDefault()
	}

	const updateDescription = (e,i) =>{
		if(e.target.value) {
			item.error = "Please enter the description"
			setItem({...item})
			return null
		}
		item.descriptions[i]=e.target.value
	}
	const updateImage = (e,i) =>{
		item.descriptions[i]=e.target.value
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(item)
	}
	return (
		<form onSubmit={handleSubmit}>
		<text> {item.error}</text>
			<h3> Please enter the item details below: </h3>
			<label> Item name: </label>
			<input type='text' value={item.name} />
			<br/>
			<label> Starting bid price: </label>
			<input type='text' value={item.price} />
			<br/>
			<label> Descriptions: </label>
			{item.descriptions.map(
				(point, index) => (
					<div key={index}>

						<label> {index}: </label>
						<input type='text' id={'description-'+index}
						onChange={e=>updateDescription(e, index)}/>
						
					</div>
					)
				)}

			<button onClick={addDescription}>+</button>
			<br/>
			<label> Images: </label>
			{item.images.map(
				(point, index) => (
					<div key={index}>

						<label> {index}: </label>
						<input type='file' id={'image-'+index}
						onChange={e=>updateImage(e, index)}/>
						
					</div>
					)
				)}

			<button onClick={addImages}>+</button>
			<br/>
			<button type='Submit'> Submit </button>
		</form>
		)
}

export default Additems
