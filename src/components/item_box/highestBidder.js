import React, { useEffect, useState } from 'react'

const HighestBidder = (props) => {

	const [user, setUser] = useState([])

	const getUser = () => {
		fetch(`http://localhost:3000/user/${props.userId}`)
		.then(response => response.json())
		.then(data => setUser(data))
		.catch(err => {throw err})
	}

	useEffect(getUser, [])

	return (<div className="item_list">
			{user.map(theUser => <div key={theUser.id}> <text> {theUser.username} </text> </div>)}
			</div>	
		)
}

export default HighestBidder
