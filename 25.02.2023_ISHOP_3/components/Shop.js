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
  };


  cbSelectRow = (code) => {     //callback выбора строки
    this.setState( {selItemCode:code} );
  }
  cbDeleteRow = (code) => {     //callback удаления строки 
    this.setState( {items:this.state.items.filter(s=>s.code!==code)} );
  }

  cbEditRow = (code) => { //callback добавления формы строки
    this.setState( {prodItemCode:code} );
  }
/*
  editProduct = (product) => {
    this.setState({ editProduct: product })
}
 
*/

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
      const infoCode=this.state.items.map( v =>
        <InfoCard  key={v.code} name={v.name} count={v.count}
        image={v.image} price={v.price} code={v.code}
        selItemCode={this.state.selItemCode}

  
        />
      )
        const formEditCode=this.state.items.map( v =>
          <FormEdit  key={v.code} name={v.name} count={v.count}
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
