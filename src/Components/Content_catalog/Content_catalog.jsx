import React, { Component } from 'react';
import style from './style.css';
import about_1 from '../../assets/imgs/cat_1.png';
import about_2 from '../../assets/imgs/cat_2.png';
import about_3 from '../../assets/imgs/cat_3.png';
import puppy_1 from '../../assets/imgs/puppy_1.png';
import puppy_2 from '../../assets/imgs/puppy_2.png';
import puppy_3 from '../../assets/imgs/puppy_3.png';
import birds_1 from '../../assets/imgs/birds_1.png';
import birds_2 from '../../assets/imgs/birds_2.png';
import birds_3 from '../../assets/imgs/birds_3.png';
function Content_catalog() {

	return (
		<div className='content_catalog'>
            <div className='products_for_cat'>
                <div>
                    <h2>Товары для кошек</h2>
                </div>
                <div className='cat_div'>
                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={about_1} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">Felix Sensation,кусочки индейки с беконом в соусе для кошек,пауч 85гр.</p>
				
				    <p> Цена: <span className = "red_text">15000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>

                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={about_2} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">Kitekat сухой корм для кошек Мясной пир,уп.1,9 кг.</p>
				
				    <p> Цена: <span className = "red_text">9000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>

                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={about_3} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">Whiskas,влажный корм для котят желе с телятиной,уп.28*85 гр.</p>
				
				    <p> Цена: <span className = "red_text">15000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>
                </div>
            </div>


            <div className='products_for_cat'>
                <div>
                    <h2>Товары для собак</h2>
                </div>
                <div className='cat_div'>
                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={puppy_1} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">ROYAL CANIN MAXI PUPPY ДЛЯ ЩЕНКОВ КРУПНЫХ ПОРОД</p>
				
				    <p> Цена: <span className = "red_text">15000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>

                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={puppy_2} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">СУХОЙ КОРМ PRO PLAN MEDIUM ADULT SENSITIVE DIGESTION </p>
				
				    <p> Цена: <span className = "red_text">9000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>

                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={puppy_3} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">ROYAL CANIN MINI ADULT ДЛЯ ВЗРОСЛЫХ СОБАК МЕЛКИХ ПОРОД</p>
				
				    <p> Цена: <span className = "red_text">15000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>
                </div>
            </div>


            <div className='products_for_cat'>
                <div>
                    <h2>Товары для птиц</h2>
                </div>
                <div className='cat_div'>
                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={birds_1} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">RIO КОРМ ДЛЯ ВОЛНИСТЫХ ПОПУГАЙЧИКОВ</p>
				
				    <p> Цена: <span className = "red_text">15000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>

                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={birds_2} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">RIO КОРМ ДЛЯ СРЕДНИХ ПОПУГАЕВ</p>
				
				    <p> Цена: <span className = "red_text">9000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>

                <div className='card_cats_1'>
                    <img className = "cat_products_1" src={birds_3} alt='' width="127" height="164"/>
				    <div className = "description_of_img_1">
				    <p className = "text_1">PADOVAN GRANDMIX PARROCCHETTI КОРМ ДЛЯ СРЕДНИХ ПОПУГАЕ</p>
				
				    <p> Цена: <span className = "red_text">15000тг</span></p>
				
				    <button className = "buy_button">
					Купить
				    </button>
				    </div>
                </div>
                </div>
            </div>

        </div>
	);
}

export default Content_catalog;