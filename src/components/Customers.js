import React from 'react';

import Table from 'react-bootstrap/Table';
import Customer from './Customer';

import fakeCustomers from '../fakeData/fakeCustomers';

const Customers = () => {
	return(
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
						<th>Company</th>
						<th>Address</th>
						<th>PostCode</th>
					</tr>
				</thead>
				{/* Data should be rendered via props */}
				<tbody>
					{fakeCustomers.map(customer => 
						<Customer
						key={customer.id}
						id={customer.id}
						firstname={customer.firstname}
						lastname={customer.lastname}
						username={customer.username}
						company={customer.company}
						address={customer.address}
						postcode={customer.postcode}
						/>
						)}
				</tbody>
			</Table>
		</div>
	)
}

export default Customers;