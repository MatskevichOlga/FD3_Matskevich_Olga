import React from 'react';
import PropTypes from 'prop-types';

import './Products.css';

class Products extends React.Component {
  static propTypes = {
    code: PropTypes.number.isRequired,
    //id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    selItemCode:PropTypes.number,
    cardMode:PropTypes.number,
    cbSelectRow:PropTypes.func.isRequired,
    cbDeleteRow:PropTypes.func.isRequired,
    cbEditRow:PropTypes.func.isRequired,
    image:PropTypes.string.isRequired,
   // cbShowCard:PropTypes.func.isRequired,

  };



productClicked=(EO)=>{
  //e.preveantDefault();
  this.props.cbSelectRow(this.props.code);
}
deleteRow=(EO)=>{
  EO.stopPropagation();
 const isOk=window.confirm("Вы действительно хотите удалить товар?");
 if(isOk){
  this.props.cbDeleteRow(this.props.code);
 
 }

}

editRow=(EO)=>{
/*  const isOkEdit=window.confirm("Вы действительно хотите редактировать товар?");
  if(isOkEdit)*/
    this.props.cbEditRow(this.props.code);
  

}

  render() {

  return (
    <div className={(this.props.selItemCode===this.props.code)?"green product":"blue product"}  onClick={this.productClicked}>

    <div className="product_item" >{this.props.name}</div>
    <div className="price">{this.props.price}</div>
    <div className="image"><img src={this.props.image} alt="image" /></div>
    <div className="count">{this.props.count}</div>
    <div className="button"><button onClick={this.editRow}>Редактировать</button>
    <button onClick={this.deleteRow} >Удалить</button></div>
    
    </div>


  );
}

}

export default Products;

