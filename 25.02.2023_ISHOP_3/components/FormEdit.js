import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class FormEdit extends React.Component {
  static propTypes = {

        code: PropTypes.number.isRequired,
        //id: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        selItemCode:PropTypes.number,
        image:PropTypes.string.isRequired,
        cbChangeName:PropTypes.func.isRequired,
        cbChangePrice:PropTypes.func.isRequired,
        cbChangeCount:PropTypes.func.isRequired,
        cbEditRow:PropTypes.func.isRequired,

  };

  onChangeName = (EO) => { 
    this.props.cbChangeName(EO.target.value);
  };
  onChangePrice = (EO) => { 
    this.props.cbChangePrice(EO.target.value);
  };

  onChangeCount = (EO) => { 
    this.props.cbChangeCount(EO.target.value);
  };

  editRow=(EO)=>{
    const isOkEdit=window.confirm("Вы действительно хотите редактировать товар?");
    if(isOkEdit){
      this.props.cbEditRow(this.props.code);
    }
  
  }

  



  render() {

  return (
    <form className={(this.props.prodItemCode===this.props.code)?"visible edit":"edit"}>
    <h3>{`Редактирование товара ${this.props.name}`}</h3>

    <div>
        <span>Наименование: </span>
        <input defaultValue={this.props.name}
            type="text"
            name="name"
            onChange={this.onChangeName}

        />
        {!this.props.name && <span style={{ color: 'red' }}>Заполните корректно поле</span>}
    </div>

    <div>
        <span>Стоимость: </span>
        <input
            defaultValue={this.props.price}
            type="number"
            name="price"
            onChange={this.onChangePrice}

        />
        {!this.props.price && <span style={{ color: 'red' }}>Заполните корректно поле</span>}
    </div>

    <div>
        <span>Количество: </span>
        <input
            defaultValue={this.props.count}
            type="number"
            name="count"
            onChange={this.onChangeCount}

        />
        {!this.props.count && <span style={{ color: 'red' }}>Заполните корректно поле</span>}
    </div>
    
    <input
        type="button"
        onClick={this.save}
        value="Сохранить"
        disabled={!this.props.name | !this.props.price | !this.props.count}
    />
    <input type="button" onClick={this.cancel} value="Отмена" />
</form>


  );
}

}

export default FormEdit;

