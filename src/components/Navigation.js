import React, { useState, useEffect } from 'react';

// react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

const Navigation = (props) => {

	
	const [title, setTitle] = useState('hello');
	
	useEffect(() => {
		const currentPath = window.location.pathname.slice(1);
		if (currentPath === "") {setTitle('login')}
		else { setTitle(currentPath) }
	},[]);

	return(
		<>
		<Navbar bg='dark' variant='dark'>
			<Link to='/'>
				<Navbar.Brand onClick={() => setTitle('login')}>My Store</Navbar.Brand>
			</Link>
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text >Sign up</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
		<Jumbotron>
          <Container>
            <h1>{title}</h1>
          </Container>
        </Jumbotron>
		</>
	)
}

export default Navigation;