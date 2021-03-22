import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormSignup = () => {

	return (
	<>
		<Form.Group>
			<Form.Label>First Name</Form.Label>
			<Form.Control type="text" placeholder="John" name="firstname"/>
		</Form.Group>

		<Form.Group>
			<Form.Label>Last Name</Form.Label>
			<Form.Control type="text" placeholder="Doe" name="lastname"/>
		</Form.Group>

		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="example@example.com" name="email"/>
		</Form.Group>

		<Form.Group controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Password" name="password"/>
		</Form.Group>

		<Form.Group>
			<Form.Label>Company</Form.Label>
			<Form.Control type="text" placeholder="costco" name="company"/>
		</Form.Group>

		<Form.Group>
			<Form.Label>Address</Form.Label>
			<Form.Control type="text" placeholder="64 main street london" name="address"/>
		</Form.Group>

		<Form.Group>
			<Form.Label>Post code</Form.Label>
			<Form.Control type="text" placeholder="postcode" name="postcode"/>
		</Form.Group>
		<Button variant="primary" type="submit">
			Login
		</Button>
	</>
	)
}

export default FormSignup;