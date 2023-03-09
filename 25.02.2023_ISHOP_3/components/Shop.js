import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Products from './Products';
import InfoCard from './InfoCard';
import FormEdit from './FormEdit';

class Shop extends React.Component {

  static propTypes = {
  //  defaultProducts:React.PropTypes.array.isRequired,
   title: PropTypes.string.isRequired,
   header: PropTypes.arrayOf(
   PropTypes.shape({
   text:PropTypes.string.isRequired,
})
),
   products:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
      //  id: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image:PropTypes.string.isRequired,

      })
    ),

  };

  state = {
    selItemCode: null,
    items:this.props.products,
    prodItemCode:null,
    isEditMode: false,
    cardMode: 0     // 0 - нет, 1 - просмотр, 2 - редактирование, 3 - добавление
  };

  save = (code, newProps) => {
    let items=[...this.state.items];
    let itemIndex=items.findIndex(products => products.code===code);
    if(itemIndex===-1){
      return;
    }
    let newItem={...items[itemIndex]};
    newItem.name=newProps.name;
    newItem.price=newProps.price;
    newItem.count=newProps.count;
    items[itemIndex]=newItem;
    this.setState({items});


  }

   //callback выбора строки
  cbSelectRow = (code) => {  
    this.setState( {selItemCode:code} );
  }
   //callback удаления строки 
  cbDeleteRow = (code) => {    
    this.setState( {items:this.state.items.filter(s=>s.code!==code)} );
  }
//callback добавления формы строки
  cbEditRow = (code) => { 
    this.setState( {prodItemCode:code} );
  }

  editProduct = (product) => {
    this.setState({ editProduct: product })
}
 


//key={v.id}
  render() {
   const titleCode=this.props.title
    const headerCode=this.props.header.map( v  =>{
      return <div key={v.code} className="header_title">{v.text}</div>
    });

    const productsCode=this.state.items.map( v =>
      <Products  key={v.code} name={v.name} count={v.count}
      image={v.image} price={v.price} code={v.code}
      selItemCode={this.state.selItemCode}
      cbSelectRow={this.cbSelectRow}
      cbDeleteRow={this.cbDeleteRow}
      cbEditRow={this.cbEditRow}

      />
    )
    //this.props.selItemCode&&
      const infoCode=this.state.items.map( v =>
        <InfoCard  key={v.code} name={v.name} count={v.count}
        image={v.image} price={v.price} code={v.code}
        selItemCode={this.state.selItemCode}

  
        />
      )

      //this.state.cardMode===2&&this.props.selItemCode&&
        const formEditCode=this.state.items.map( v =>
          <FormEdit  cbSave={this.save} key={this.props.selItemCode} name={v.name} count={v.count}
          image={v.image} price={v.price} code={v.code}
          prodItemCode={this.state.prodItemCode}
          cbChangeName={this.onChangeName}
          cbChangePrice={this.onChangePrice}
          cbChangeCount={this.onChangeCount}
    
          />
      )


      return (
        <div className="IShop">
        <h1 className="title">{titleCode}</h1>
          <div className="header">{headerCode}</div>
          <div className="products">{productsCode}</div>
          <div className="card">{infoCode}</div>
          <div className="form">{formEditCode}</div>

        </div>
      )



  }

}

export default Shop;
