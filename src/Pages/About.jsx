import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Content_about from '../Components/Content_about/Content_about';
import Footer from '../Components/Footer/Footer';


function About(props) {

	return (
		<div className="reactsite">

		<Header links={props.links}/>
		<Content_about />
		<Footer />
		
		</div>
		
	);
}

export default About;