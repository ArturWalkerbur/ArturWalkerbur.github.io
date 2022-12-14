import React, { Component } from 'react';
import style from './style.css';
import logo from '../../assets/imgs/logo.png';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Footer() {

	const defaultState = {
		center: [43.235232, 76.909936],
		zoom: 17,
	};

	return (
		<div className = "footer">
			<div className="breaking">
				
			</div>
			<div className="yandexMap">
				<YMaps>
					<Map  defaultState={defaultState} width='1180px' height='280px'>
						<Placemark geometry={[43.235232, 76.909936]} />
					</Map>
				</YMaps>
			</div>
			
			<div className = "footer_top">
				<div className = "footer_logo">
				
					<img className = "footer_img" src={logo} alt='' />
					<h3 className = "title_footer">The ZooLove</h3>
					<div className = "bcCilke"></div>

				</div>
				<div className="footer_info">
					<div className='footer_contaner'>
						<h3 className='info_titile'>Основные ссылки</h3>
						<p className='footer_text'><a className='footer_link' href="/">Главная</a></p>
						<p className='footer_text'><a className='footer_link' href="/catalog">Каталог</a></p>
						<p className='footer_text'><a className='footer_link' href="/about">О нас</a></p>

					</div>

					<div className='footer_contaner'>
						<h3 className='info_titile'>Основные ссылки</h3>
						<p className='footer_text'>Пн-пт - 09:00 - 17:00 </p>
						<p className='footer_text'>Сб - выходной </p>
						<p className='footer_text'>Вс - выходной</p>

					</div>

					<div className='footer_contaner'>
						<h3 className='info_titile'>Наши контакты</h3>
						<p className='footer_text'><a className='footer_link' href="tel:+77771112233">87771112233</a></p>
						<p className='footer_text'><a className='footer_link' href="mailto:zakaz@thezoolove.kz">zakaz@thezoolove.kz</a></p>
						<p className='footer_text'>находится по адресу:</p>
						<p className='footer_text'>г. Алматы, ул. Сейфулина<br />392</p>

					</div>
				</div>

			</div>
		</div>
		
	);
}

export default Footer;