import React from 'react'
import ItemBox from '../components/item_box'

const Bidding = () => {

	return (
		<div className="myBids">
			<div>
            	My Bids
          	</div>
          	<div className="activeBids">
            	Active Bids
            	<ItemBox />
          	</div>
        </div>
         )
}

export default Bidding