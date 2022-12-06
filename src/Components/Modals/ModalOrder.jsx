import React, { Component, useState } from 'react';
import style from './style.css';




export default class ModalOrder extends Component {

	render() {

		if(this.props.show){
			return (
				<div className="modalOrder">
					<div className="modelWindow">
						<h3 className="modalTitle">
							Отправте заявку, и заказ прибудет через день
						</h3>
						<form className="formOrder">
						  <label className="lbls">
						    ФИО:
						    <input type="text" name="fullname" className="intutsstyle" />
						  </label><br />
						  <label className="lbls">
						    Эл. почта:
						    <input type="text" name="email" className="intutsstyle" />
						  </label><br />
						  <label className="lbls">
						    Номер:
						    <input type="text" name="number" className="intutsstyle" />
						  </label><br />
						  <button className="BtnSend">Отправить</button>
						</form>
						<button className="btnCancel" onClick={() => {window.location.reload();}}>
							x
						</button>
					</div>
				</div>
			);
		} else {
			
		}
	}
}
