import React from 'react';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

const Navigation = (props) => {

	return(
		<>
		<Navbar bg='dark' variant='dark'>
			<Link to='/'>
				<Navbar.Brand onClick={props.handleSetTitle}>My Store</Navbar.Brand>
			</Link>
			<Navbar.Collapse className='justify-content-end'>
				<Link to='/signup'>
					<Navbar.Text onClick={props.handleSetTitle}>Sign up</Navbar.Text>
				</Link>
			</Navbar.Collapse>
		</Navbar>
		<Jumbotron>
          <Container>
            <h1>{props.title}</h1>
          </Container>
        </Jumbotron>
		</>
	)
}

export default Navigation;