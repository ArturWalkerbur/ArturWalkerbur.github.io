import React, { Component } from 'react';
import style from './style.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import felix1 from '../../assets/imgs/felix1.jpg';

function Content_catalog() {

	const {category} = useParams();
  	const navigate = useNavigate();

	return (
		<div className='content_catalog'>
			<h2 className="categoryTitle">Товары для {category}</h2>
			<div className = "allProducts">
				
				<div className="catalog_row">
					<div className="cardOfProduct">
						<div className="imgOfProduct">
							<img className = "categoryimg" src={felix1} alt='' />
						</div>

						<div className="infoOfProduct">
							<div className="titleOfProduct">
								Felix Sensation,кусочки индейки с беконом в соусе для кошек,пауч 85гр.
							</div>
							<div className="priceOfProduct">
								ЦЕНА: <b>15000тг</b>
							</div>
							<div className="buyOfProduct">
								<button className="BtnBuyProduvt" onClick={() => navigate("/product/2")}>Купить</button>
							</div>
						</div>
					</div>
					<div className="cardOfProduct">
						<div className="imgOfProduct">
							<img className = "categoryimg" src={felix1} alt='' />
						</div>

						<div className="infoOfProduct">
							<div className="titleOfProduct">
								Felix Sensation,кусочки индейки с беконом в соусе для кошек,пауч 85гр.
							</div>
							<div className="priceOfProduct">
								ЦЕНА: <b>15000тг</b>
							</div>
							<div className="buyOfProduct">
								<button className="BtnBuyProduvt">Купить</button>
							</div>
						</div>
					</div>
					<div className="cardOfProduct">
						<div className="imgOfProduct">
							<img className = "categoryimg" src={felix1} alt='' />
						</div>

						<div className="infoOfProduct">
							<div className="titleOfProduct">
								Felix Sensation,кусочки индейки с беконом в соусе для кошек,пауч 85гр.
							</div>
							<div className="priceOfProduct">
								ЦЕНА: <b>15000тг</b>
							</div>
							<div className="buyOfProduct">
								<button className="BtnBuyProduvt">Купить</button>
							</div>
						</div>
					</div>
				</div>



			</div>
        </div>
	);
}

export default Content_catalog;