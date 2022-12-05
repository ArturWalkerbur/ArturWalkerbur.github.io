import React, { Component } from 'react';
import style from './style.css';
import {categoryImg} from '../../assets/imgs/categoryImg.js';

function Catalog() {

	return (
		<div className="catalog">

			<h2 className="titleCatalog">Каталог товаров</h2>

			<div className="row">

				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[0]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><a className="linkin" href="/">Товары для кошек</a></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[1]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><a className="linkin" href="/">Товары для собак</a></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[5]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><a className="linkin" href="/">Товары для грызунов</a></h3>
				</div>

			</div>
			<div className="row">

				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[4]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle"><a className="linkin" href="/">Товары для птиц</a></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[2]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle"><a className="linkin" href="/">Товары для рыб</a></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[3]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><a className="linkin" href="/">Товары для рептили</a></h3>
				</div>

			</div>

		</div>
		
	);
}

export default Catalog;