import React from 'react';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

const Navigation = () => {
	return(
		<>
		<Navbar bg='dark' variant='dark'>
			<Link to='/'>
				<Navbar.Brand>My Store</Navbar.Brand>
			</Link>
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text >Sign up</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
		<Jumbotron>
          <Container>
            <h1>Customer Database</h1>
          </Container>
        </Jumbotron>
		</>
	)
}

export default Navigation;