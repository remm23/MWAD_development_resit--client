import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Placeholder image
import placeholder from '../images/placeholder.jpg';


const Store = () => {
	return(
		<Carousel>		
			<Carousel.Item>
				<img
				className="d-block w-100"
				src={placeholder}
				alt="First slide"
				/>
				<Carousel.Caption>
				<h3>First slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src={placeholder}
				alt="Second slide"
				/>
				<Carousel.Caption>
				<h3>Second slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100"
				src={placeholder}
				alt="Third slide"
				/>
				<Carousel.Caption>
				<h3>Third slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default Store;