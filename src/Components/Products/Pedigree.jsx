import React, { Component, useState } from 'react';
import style from './style.css';
import {stocks} from '../../assets/imgs/stocks.js';
import ModalOrder from '../Modals/ModalOrder';

function Pedigree() {

	const [count, setCount] = useState(1);
	const [show, setShow] = useState(false);


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
					<img className = "prodImg" src={stocks[0]} alt='' />
				</div>
				<div className="charContainer">
					<div className= "charInfo">
						<ul className="charList">
							<li>
								<b>Производитель</b>: ПЕДИГРИ
							</li>
							<li>
								<b>Модель</b>: 02572
							</li>
							<li>
								<b>Артикул</b>: 02572
							</li>
							<li>
								<b>Наличие</b>: В наличии
							</li>
						</ul>
						<div className="prodPrice">15600₸</div>
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
				<p>Рацион PEDIGREE® — это полезная и вкусная еда, приготовленная с учетом физиологических потребностей собак,
				еда, которой нужно кормить регулярно.Проведенные исследования показывают, что у собак, которых регулярно кормили PEDIGREE®,
				улучшалось пищеварение и, как следствие, общее здоровье.Ветеринарный врач судит о здоровье собаки по нескольким признакам,
				а вам следует обращать внимание на качество ее стула.</p>
			</div>
			<ModalOrder show={show} />
		</div>
		
	);
}

export default Pedigree;