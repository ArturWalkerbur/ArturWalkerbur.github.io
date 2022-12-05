import React, { Component } from 'react';
import logo from '../../assets/imgs/logo.png';
import style from './style.css';
import {menu} from './menu';

function Header() {

	return (
		<div className="header">

			<div className="logo">
				<img className = "logoimg" src={logo} alt='' />
				<h1 className = "title">The <b className = "Zoo">Zoo</b>love</h1>
			</div>
			<div className = "nav">
				<ul className="menu">
					{menu.map((item, idx) =>(
						<li className="menu-list" key={`menu item ${idx}`}>
							<a className="menu-items" href={item.link}>{item.title}</a>
						</li>
						))}
					
				</ul>
			</div>

		</div>
		
	);
}

export default Header;