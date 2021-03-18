import React from 'react';

const Customer = (props) => {
	return(
		<tr>
			<td>{props.id}</td>
			<td>{props.firstname}</td>
			<td>{props.lastname}</td>
			<td>{props.username}</td>
			<td>{props.company}</td>
			<td>{props.address}</td>
			<td>{props.postcode}</td>
			
		</tr>
	)
}

export default Customer;