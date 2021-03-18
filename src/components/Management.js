import React from 'react';

// react-bootstrap 
import { Container, Row, Col } from 'react-bootstrap';

import Customers from './Customers';

const Management = () => {
	return(
		<div>
			<Container>
				<Row>
					<Col></Col>
					<Col md='auto'>
						<Customers/>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	)
}

export default Management;