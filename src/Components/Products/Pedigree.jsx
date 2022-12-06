import React, { Component, useState } from 'react';
import style from './style.css';
import ModalOrder from '../Modals/ModalOrder';
import {listOfProduct} from './listOfProduct';
import { useParams } from 'react-router-dom';


function Pedigree() {

	const [count, setCount] = useState(1);
	const [show, setShow] = useState(false);
	const {id} = useParams();

	const BtnOper = (pOperation) => {
		if(pOperation == '+'){
			setCount(count + 1);
		} else if(count > 1 && pOperation == '-') {
			setCount(count - 1);
		}
		
	};

	const BtnOrder = () => {
		setShow(true);
	};

	return (
		<div className="zooProduct">
			<div className="characteristics">

				<div className="prodImgCont">
					<img className = "prodImg" src={listOfProduct[id].img} alt='' />
				</div>
				<div className="charContainer">
					<div className= "charInfo">
						<ul className="charList">
							<li>
								<b>Производитель</b>: {listOfProduct[id].Manufacturer}
							</li>
							<li>
								<b>Модель</b>: {listOfProduct[id].Model}
							</li>
							<li>
								<b>Артикул</b>: {listOfProduct[id].Article}
							</li>
							<li>
								<b>Наличие</b>: {listOfProduct[id].Availability}
							</li>
						</ul>
						<div className="prodPrice">{listOfProduct[id].Price}₸</div>
					</div>
					<div className="counter">
						<h4 className="countText">Количество</h4>
						<div className="countManipulation">
							<button type="button" className="arifmeticBtnmin" onClick={() => BtnOper('-')}>-</button>
								<p className="countProd">{count}</p>
							<button className="arifmeticBtnplu" onClick={() => BtnOper('+')}>+</button>
						</div>
					</div>
					<div className="orderProd">
						<button className="orderBtn" onClick={() => BtnOrder()}>Заказать</button>
					</div>
				</div>

			</div>
			<div className="description">
				<h3>Обзор товара</h3>
				<p>{listOfProduct[id].Descrip}</p>
			</div>
			<ModalOrder show={show} />
		</div>
		
	);
}

export default Pedigree;