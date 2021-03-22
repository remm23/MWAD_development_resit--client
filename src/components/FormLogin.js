import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormLogin = () => {


	return (
	<>
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="Enter email" name="email"/>
		</Form.Group>

		<Form.Group controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Password" name="password"/>
		</Form.Group>
		<Button variant="primary" type="submit">
			Login
		</Button>
	</>
	)
}

export default FormLogin;