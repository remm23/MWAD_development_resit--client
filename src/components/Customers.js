import React, { useState } from 'react';
import Customer from './Customer';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

// import fakeCustomers from '../fakeData/fakeCustomers';

// axios for get requests
import axios from 'axios';


const Customers = () => {

	const [data, setData] = useState([]);
	
	const getCustomerData = () => {		
		axios.get('http://localhost:4000/customers')
		.then(res => 
			setData(res.data)
		);
		console.log(data);
	}

	return(
		<div>
			<Container className='management-container'>
				<Row>
					<Col>
						{/* Update the table of customer data*/}
						<Button onClick={getCustomerData}>Update table</Button>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</Container>
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
					{/* map through data array to display customer info */}
					{data.map(customer => 
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