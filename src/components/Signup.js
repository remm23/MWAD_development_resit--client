import React from 'react';

import FormSignup from './FormSignup';

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Signup = () => {

	return (
		<Container className="login-container">
			<Row>
				<Col></Col>
				<Col xs={5}>
					<Form action='http://localhost:4000/signup' method='POST'>
						<FormSignup/>
					</Form>
				</Col>
				<Col></Col>
			</Row>
		</Container>
		
	);
}

export default Signup;