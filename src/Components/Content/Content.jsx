import React, { Component } from 'react';
import style from './style.css';
import dog from '../../assets/imgs/dog_cover.png';
import image_1 from '../../assets/imgs/image 1.png';
import image_2 from '../../assets/imgs/image 2.png';
import image_3 from '../../assets/imgs/image 3.png';
import image_4 from '../../assets/imgs/image 4.png';
import image_5 from '../../assets/imgs/image 5.png';
import image_6 from '../../assets/imgs/image 6.png';
function Content() {

	return (
		<div className="content">
			<div className = "dog_div">
				<img className = "dog_img" src={dog} alt='' />
			</div>
			<div className = "news">
				<p className = "style1">БЕСПЛАТНАЯ ДОСТАВКА ОТ 10000тг</p>
				<p className = "style2">Сделайте заказ и 
				получите подарок!</p>
			</div>
			<h1>Акции!</h1>
			<div className = "card_div">
			<div className = "card">
				<img className = "image_1" src={image_1} alt='' width="127" height="164"/>
				<div className = "description_img">
				<p className = "text">Pedigree,сухой корм для взрослых собак всех пород,уп.13 кг</p>
				
				<p> Цена: <span className = "red_text">15000тг</span></p>
				
				<button className = "buy_button">
					Купить
				</button>
				</div>
			</div>

			<div className = "card">
				<img className = "image_1" src={image_2} alt='' width="127" height="164"/>
				<div className = "description_img">
				<p className = "text">Royal Canin British Shorthair Adult для взрослых кошек</p>
				
				<p> Цена: <span className = "red_text">9000тг</span></p>
				
				<button className = "buy_button">
					Купить
				</button>
				</div>
			</div>

			<div className = "card">
				<img className = "image_1" src={image_3} alt='' width="127" height="164"/>
				<div className = "description_img">
				<p className = "text">RIO Корм для средних попугаев</p>
				
				<p> Цена: <span className = "red_text">15000тг</span></p>
				
				<button className = "buy_button">
					Купить
				</button>
				</div>
			</div>

			<div className = "card">
				<img className = "image_1" src={image_4} alt='' width="127" height="164"/>
				<div className = "description_img">
				<p className = "text">BLITZ ADULT BEEF & RICE, корм для взрослых собак,     15 кг</p>
				
				<p> Цена: <span className = "red_text">32000тг</span></p>
				
				<button className = "buy_button">
					Купить
				</button>
				</div>
			</div>

			<div className = "card">
				<img className = "image_1" src={image_5} alt='' width="127" height="164"/>
				<div className = "description_img">
				<p className = "text">ECO-Premium ,комкующийся древесный наполнитель 20л</p>
				
				<p> Цена: <span className = "red_text">15000тг</span></p>
				
				<button className = "buy_button">
					Купить
				</button>
				</div>
			</div>

			<div className = "card">
				<img className = "image_1" src={image_6} alt='' width="127" height="164"/>
				<div className = "description_img">
				<p className = "text">Плетеный домик-лежанка с подушками - 54х43х54 см</p>
				
				<p> Цена: <span className = "red_text">15000тг</span></p>
				
				<button className = "buy_button">
					Купить
				</button>
				</div>
			</div>

			
			</div>
		</div>
		
	);
}

export default Content;