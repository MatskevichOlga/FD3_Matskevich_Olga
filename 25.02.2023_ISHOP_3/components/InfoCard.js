import React from 'react';
import PropTypes from 'prop-types';

import './InfoCard.css';


class InfoCard extends React.Component {
  static propTypes = {
    code: PropTypes.number.isRequired,
    //id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    selItemCode:PropTypes.number,
    image:PropTypes.string.isRequired,
  //  cardMode:PropTypes.number.isRequired,


  };

  state = {
   selItemCode: null,
    cardMode: 0     // 0 - нет, 1 - просмотр, 2 - редактирование, 3 - добавление
  };


/*    <div className={(this.props.selItemCode===this.props.code)?"visible infoCard":"infoCard"}>*/
//&&(this.props.cardMode==1)
  render() {

  return (

      <div className={((this.props.selItemCode===this.props.code))?"visible infoCard":"infoCard"}>
        <h3>Информация</h3>
          <img src={this.props.image} alt="image"/>
        <div>
            {`Наименование: ${this.props.name}`}
        </div>
        <div>
            {`Стоимость: ${this.props.price} руб`}
        </div>
        <div>
            {`Количество: ${this.props.count} шт`}
        </div>
    </div>
);


  
}

}

export default InfoCard;

