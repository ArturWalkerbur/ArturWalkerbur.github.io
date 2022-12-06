import React, { Component } from 'react';
import style from './style.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {listOfCategory} from './listOfCategory';


function Content_catalog() {

	const {category} = useParams();
	const navigate = useNavigate();


	const CategoryVal = ({ category }) => {
	  	if(category == 'cats') {
	  		return(
			<div className='content_catalog'>
				<h2 className="categoryTitle">{listOfCategory.cats[0]}</h2>
				<div className = "allProducts">
					<div className="catalog_row">
					{listOfCategory.cats[1].map((item, idx) =>(
						<div className="cardOfProduct">
							<div className="imgOfProduct">
								<img className = "categoryimg" src={listOfCategory.cats[1][idx].img} alt='' />
							</div>

							<div className="infoOfProduct">
								<div className="titleOfProduct">
									{listOfCategory.cats[1][idx].title}
								</div>
								<div className="priceOfProduct">
									ЦЕНА: <b>{listOfCategory.cats[1][idx].price}тг</b>
								</div>
								<div className="buyOfProduct">
									<button className="BtnBuyProduvt" onClick={() => navigate("/product/"+listOfCategory.cats[1][idx].id)}>Купить</button>
								</div>
							</div>
						</div>
					))}
					</div>
				</div>
        	</div>);
	  	} else if(category == 'dogs'){
	  		return(
			<div className='content_catalog'>
				<h2 className="categoryTitle">{listOfCategory.dogs[0]}</h2>
				<div className = "allProducts">
					<div className="catalog_row">
					{listOfCategory.dogs[1].map((item, idx) =>(
						<div className="cardOfProduct">
							<div className="imgOfProduct">
								<img className = "categoryimg" src={listOfCategory.dogs[1][idx].img} alt='' />
							</div>

							<div className="infoOfProduct">
								<div className="titleOfProduct">
									{listOfCategory.dogs[1][idx].title}
								</div>
								<div className="priceOfProduct">
									ЦЕНА: <b>{listOfCategory.dogs[1][idx].price}тг</b>
								</div>
								<div className="buyOfProduct">
									<button className="BtnBuyProduvt" onClick={() => navigate("/product/"+listOfCategory.dogs[1][idx].id)}>Купить</button>
								</div>
							</div>
						</div>
					))}
					</div>
				</div>
        	</div>);

		} else if(category == 'rats'){
			return(
			<div className='content_catalog'>
				<h2 className="categoryTitle">{listOfCategory.rats[0]}</h2>
				<div className = "allProducts">
					<div className="catalog_row">
					{listOfCategory.rats[1].map((item, idx) =>(
						<div className="cardOfProduct">
							<div className="imgOfProduct">
								<img className = "categoryimg" src={listOfCategory.rats[1][idx].img} alt='' />
							</div>

							<div className="infoOfProduct">
								<div className="titleOfProduct">
									{listOfCategory.rats[1][idx].title}
								</div>
								<div className="priceOfProduct">
									ЦЕНА: <b>{listOfCategory.rats[1][idx].price}тг</b>
								</div>
								<div className="buyOfProduct">
									<button className="BtnBuyProduvt" onClick={() => navigate("/product/"+listOfCategory.rats[1][idx].id)}>Купить</button>
								</div>
							</div>
						</div>
					))}
					</div>
				</div>
        	</div>);
	  	} else if(category == 'birds'){
	  		return(
			<div className='content_catalog'>
				<h2 className="categoryTitle">{listOfCategory.birds[0]}</h2>
				<div className = "allProducts">
					<div className="catalog_row">
					{listOfCategory.birds[1].map((item, idx) =>(
						<div className="cardOfProduct">
							<div className="imgOfProduct">
								<img className = "categoryimg" src={listOfCategory.birds[1][idx].img} alt='' />
							</div>

							<div className="infoOfProduct">
								<div className="titleOfProduct">
									{listOfCategory.birds[1][idx].title}
								</div>
								<div className="priceOfProduct">
									ЦЕНА: <b>{listOfCategory.birds[1][idx].price}тг</b>
								</div>
								<div className="buyOfProduct">
									<button className="BtnBuyProduvt" onClick={() => navigate("/product/"+listOfCategory.birds[1][idx].id)}>Купить</button>
								</div>
							</div>
						</div>
					))}
					</div>
				</div>
        	</div>);
	  	} else if(category == 'fishes'){
	  		return(
			<div className='content_catalog'>
				<h2 className="categoryTitle">{listOfCategory.fishes[0]}</h2>
				<div className = "allProducts">
					<div className="catalog_row">
					{listOfCategory.fishes[1].map((item, idx) =>(
						<div className="cardOfProduct">
							<div className="imgOfProduct">
								<img className = "categoryimg" src={listOfCategory.fishes[1][idx].img} alt='' />
							</div>

							<div className="infoOfProduct">
								<div className="titleOfProduct">
									{listOfCategory.fishes[1][idx].title}
								</div>
								<div className="priceOfProduct">
									ЦЕНА: <b>{listOfCategory.fishes[1][idx].price}тг</b>
								</div>
								<div className="buyOfProduct">
									<button className="BtnBuyProduvt" onClick={() => navigate("/product/"+listOfCategory.fishes[1][idx].id)}>Купить</button>
								</div>
							</div>
						</div>
					))}
					</div>
				</div>
        	</div>);
	  	} else if(category == 'reptiles'){
	  		return(
			<div className='content_catalog'>
				<h2 className="categoryTitle">{listOfCategory.reptiles[0]}</h2>
				<div className = "allProducts">
					<div className="catalog_row">
					{listOfCategory.reptiles[1].map((item, idx) =>(
						<div className="cardOfProduct">
							<div className="imgOfProduct">
								<img className = "categoryimg" src={listOfCategory.reptiles[1][idx].img} alt='' />
							</div>

							<div className="infoOfProduct">
								<div className="titleOfProduct">
									{listOfCategory.reptiles[1][idx].title}
								</div>
								<div className="priceOfProduct">
									ЦЕНА: <b>{listOfCategory.reptiles[1][idx].price}тг</b>
								</div>
								<div className="buyOfProduct">
									<button className="BtnBuyProduvt" onClick={() => navigate("/product/"+listOfCategory.reptiles[1][idx].id)}>Купить</button>
								</div>
							</div>
						</div>
					))}
					</div>
				</div>
        	</div>);
	  	}
	}
  	
	return (

		<CategoryVal category={category} />
		
	);
}

export default Content_catalog;