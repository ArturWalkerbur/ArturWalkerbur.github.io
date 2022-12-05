import React, { Component } from 'react';
import style from './style.css';
import dog from '../../assets/imgs/dog.png';
import about_1 from '../../assets/imgs/about_1.png';
import about_2 from '../../assets/imgs/about_2.png';
import about_3 from '../../assets/imgs/about_3.png';
function Content() {

	return (
		<div className='content_about'>
            <div className='about_1'>
                <img className = "img_about_1" src={about_1} alt='' width="367" height="213"/>
                <div className='description_1'>
                        <b>The Zoolove.kz</b> – Интернет-магазин товаров для домашних животных.
                    <br />В нашем ассортименте огромный выбор всего необходимого 
                    <br />для кошек, собак, домашних грызунов и птиц.
                        <br />На страницах нашего Интернет-магазина вы найдёте большой выбор кормов
                    <br />от лучших мировых производителей, лакомства, наполнители, одежду и аксессуары, 
                    <br />а так же – ветеринарные препараты.
                </div>
            </div>

            <div className='about_2'>
                <img className = "img_about_2" src={about_2} alt='' width="294" height="227"/>
                <div className='description_1'>
                   Вы можете оплатить сделанный заказ нашему курьеру при получении покупки, <br />либо осуществить онлайн-оплату на сайте банковской картой.<br />
                Мы всегда готовы к обратной связи с нашими дорогими покупателями.<br /> Ваши замечания и предложения – залог нашего развития!<br />
                Как приобрести товар для животных в нашем магазине<br />
                При любых затруднениях обращайтесь за помощью к менеджерам магазина,<br /> которые обладают большим опытом содержания и ухода за животными.<br /> Если нужного товара нет в наличии, то наш сотрудник предупредит вас о дне поступления.<br />
                Приобрести какую-либо продукцию в магазине зоотоваров несложно.
                <ul>
                <li>Проще всего сделать заказ непосредственно на сайте нашего магазина.</li>
                <li>Заявку можно отправить на электронную почту нашего сайта.</li>
                <li>Позвонить по телефону в компанию и сделать заказ устно.</li>
                </ul>
                </div>
            </div>
           
            <div className='about_3'>
                <img className = "img_about_3" src={about_3} alt='' width="204" height="195"/>
                <div className='description_1'>
                Что мы предоставляем:
                <ul>
                <li><a className="linkin" href="/">Товары для кошек</a></li>
                <li><a className="linkin" href="/">Товары для собак</a></li>
                <li><a className="linkin" href="/">Товары для птиц</a></li>
                <li><a className="linkin" href="/">Товары для грызунов</a></li>
                <li><a className="linkin" href="/">Товары для рыб</a></li>
                <li><a className="linkin" href="/">Товары для рептилий</a></li>
                </ul>
                </div>
            </div>


        </div>
	);
}

export default Content;