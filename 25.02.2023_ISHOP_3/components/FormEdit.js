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

  state = {
  currName:this.props.name,
  currPrice:this.props.price,
  currCount:this.props.count,
  nameError: "",
  priceError: "",
  countError: "",
  valid: true,
  cardMode: 0 
  };

  validate = () => {
    let nameError="", priceError="", countError="", valid ;
    if(this.state.currName.length<3)
      nameError="Введите большее количество символов";
    

    if(isNaN(this.state.currPrice))
      priceError= "Введите стоимость";
    
    if(isNaN(this.state.currCount))
      countError= "Введите количество";
    
    valid=(!nameError)&&(!priceError)&&(!countError);
    this.setState({nameError,priceError,countError,valid});
  

  };

  changeName = (EO) => { 
    this.setState({currName:EO.target.value}, this.validate);
  };
  changePrice = (EO) => { 
    this.setState({currPrice:parseInt(EO.target.value)}, this.validate);
  };

  changeCount = (EO) => { 
    this.setState({currCount:parseInt(EO.target.value)}, this.validate);
  };

 /* editRow=(EO)=>{
    const isOkEdit=window.confirm("Вы действительно хотите редактировать товар?");
    if(isOkEdit){
      this.props.cbEditRow(this.props.code);
    }
  
  }*/

  save = (EO) => {
    this.props.cbSave(this.props.code,{name:this.state.currName, price:this.state.currPrice, count:this.state.currCount});
  } 
  cancel = (EO) => {
    this.props.cbCancel(this.props.selItemCode===!this.props.code);
  }

  



  render() {

  return (
    <form className={(this.props.prodItemCode===this.props.code)?"visible edit":"edit"}>
    <h3>{`Редактирование товара ${this.props.name}`}</h3>

    <div>
        <span>Наименование: </span>
        <input value={this.state.currName}
            type="text"
            name="name"
            onChange={this.changeName}

        />
        {<span style={{ color: 'red' }}>{this.state.nameError}</span>}
    </div>

    <div>
        <span>Стоимость: </span>
        <input
            value={this.state.currPrice}
            type="number"
            name="price"
            onChange={this.changePrice}

        />
        {<span style={{ color: 'red' }}>{this.state.priceError}</span>}
    </div>

    <div>
        <span>Количество: </span>
        <input
            value={this.state.currCount}
            type="number"
            name="count"
            onChange={this.changeCount}

        />
        {<span style={{ color: 'red' }}>{this.state.countError}</span>}
    </div>
    
    <input
        type="button"
        onClick={this.save}
        value="Сохранить"
        disabled={!this.state.valid}
    />
    <input type="button" onClick={this.cancel} value="Отмена" />
</form>


  );
}

}

export default FormEdit;

