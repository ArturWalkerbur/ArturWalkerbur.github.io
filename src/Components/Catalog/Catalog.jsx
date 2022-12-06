import React, { Component } from 'react';
import style from './style.css';
import {categoryImg} from '../../assets/imgs/categoryImg.js';
import { Link } from "react-router-dom";

function Catalog() {

	return (
		<div className="catalog">

			<h2 className="titleCatalog">Каталог товаров</h2>

			<div className="row">

				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[0]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><Link className="linkin" to="/catalog/cats">Товары для кошек</Link></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[1]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><Link className="linkin" to="/catalog/dogs">Товары для собак</Link></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[5]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><Link className="linkin" to="/catalog/rats">Товары для грызунов</Link></h3>
				</div>

			</div>
			<div className="row">

				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[4]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle"><Link className="linkin" to="/catalog/birds">Товары для птиц</Link></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[2]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle"><Link className="linkin" to="/catalog/fishes">Товары для рыб</Link></h3>
				</div>
				<div className="column">
					<div className="imgcat">
						<img className = "categoryimg" src={categoryImg[3]} alt='' />
						
					</div>
					
					<h3 className="categoryTitle2"><Link className="linkin" to="/catalog/reptiles">Товары для рептилии</Link></h3>
				</div>

			</div>

		</div>
		
	);
}

export default Catalog;