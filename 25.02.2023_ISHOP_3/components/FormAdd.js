import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class FormAdd extends React.Component {
  static propTypes = {

        code: PropTypes.number.isRequired,
        //id: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        selItemCode:PropTypes.number,
      //  image:PropTypes.string.isRequired,
  /*      cbChangeName:PropTypes.func.isRequired,
        cbChangePrice:PropTypes.func.isRequired,
        cbChangeCount:PropTypes.func.isRequired,
        cbEditRow:PropTypes.func.isRequired,*/
       // cbCancel:PropTypes.func.isRequired,

  };

  state = {
  addName:this.props.name,
  addPrice:this.props.price,
  addCount:this.props.count,
  nameError: "",
  priceError: "",
  countError: "",
  valid: true,
  cardMode: 0,
  };

  validate = () => {
    let nameError="", priceError="", countError="", valid ;
    if(this.state.addName.length<3)
      nameError="Введите большее количество символов";
    

    if(isNaN(this.state.addPrice))
      priceError= "Введите стоимость";
    
    if(isNaN(this.state.addCount))
      countError= "Введите количество";
    
    valid=(!nameError)&&(!priceError)&&(!countError);
    this.setState({nameError,priceError,countError,valid});
  

  };

  newName = (EO) => { 
    this.setState({addName:EO.target.value}, this.validate);
  };
  newPrice = (EO) => { 
    this.setState({addPrice:parseInt(EO.target.value)}, this.validate);
  };

  newCount = (EO) => { 
    this.setState({addCount:parseInt(EO.target.value)}, this.validate);
  };

 /* editRow=(EO)=>{
    const isOkEdit=window.confirm("Вы действительно хотите редактировать товар?");
    if(isOkEdit){
      this.props.cbEditRow(this.props.code);
    }
  
  }*/

  save = (EO) => {
    this.props.cbSave(this.props.code,{name:this.state.addName, price:this.state.addPrice, count:this.state.addCount});

  } 
 cancel = (EO) => {
    this.props.cbCancel();
    //this.setState({cardMode:0});
  }

  

//&&(this.state.cardMode==2)

  render() {

  return (
    <form className="visible edit">
    <h3>Добавление нового товара</h3>

    <div>
        <span>Наименование: </span>
        <input value={this.state.addName}
            type="text"
            name="name"
            onChange={this.newName}

        />
        {<span style={{ color: 'red' }}> {this.state.nameError}</span>}
    </div>

    <div>
        <span>Стоимость: </span>
        <input
            value={this.state.addPrice}
            type="number"
            name="price"
            onChange={this.newPrice}

        />
        {<span style={{ color: 'red' }}> {this.state.priceError}</span>}
    </div>

    <div>
        <span>Количество: </span>
        <input
            value={this.state.addCount}
            type="number"
            name="count"
            onChange={this.newCount}

        />
        {<span style={{ color: 'red' }}> {this.state.countError}</span>}
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
export default FormAdd;

