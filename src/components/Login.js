import React from 'react';

import MyForm from './MyForm';

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Login = () => {

	return (
		<Container className="login-container">
			<Row>
				<Col></Col>
				<Col xs={5}>
					<Form action='http://localhost:4000/login' method='POST'>
						<MyForm/>
					</Form>
				</Col>
				<Col></Col>
			</Row>
		</Container>
		
	);
}

export default Login;