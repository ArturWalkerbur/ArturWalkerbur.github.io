import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Pedigree from '../Components/Products/Pedigree';



function Product(props) {

	return (
		<div className="reactsite">
		
		<Header links={props.links}/>
		<Pedigree />
		<Footer />

		</div>
		
	);
}

export default Product;