import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Products from './Products';
import InfoCard from './InfoCard';
import FormEdit from './FormEdit';
import FormAdd from './FormAdd';

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
  //  cbCancel:PropTypes.func.isRequired,

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
    this.setState( {selItemCode:code, cardMode:1} );
  }
  
   //callback удаления строки 
  cbDeleteRow = (code) => {    
    this.setState( {items:this.state.items.filter(s=>s.code!==code)} );
  }
//callback добавления формы для редактирования
  cbEditRow = (code) => { 
    this.setState( {prodItemCode:code, cardMode:2} );
  }

  editProduct = (product) => {
    this.setState({ editProduct: product, cardMode:3 })
}

cbCancel = (code) =>{
  this.setState({ prodItemCode:code, cardMode:0 })

}
add = (EO) =>{
  this.setState({cardMode:3})
}


//key={v.id}
  render() {
   const titleCode=this.props.title
    const headerCode=this.props.header.map( v  =>{
      return <div key={v.code} className="header_title">{v.text}</div>
    });
// key={v.code} 
    const productsCode=this.state.items.map( v =>
      <Products name={v.name} count={v.count}
      image={v.image} price={v.price} code={v.code}
      key={this.props.selItemCode}
      selItemCode={this.state.selItemCode}
      cbSelectRow={this.cbSelectRow}
      cbDeleteRow={this.cbDeleteRow}
      cbEditRow={this.cbEditRow}
      editProduct={this.editProduct}
      cbCancel={this.cancel}
 

      />
    )
    //this.props.selItemCode&&
   // &&(this.props.cardMode===1)
   // key={v.code}
      const infoCode=this.state.items.map( v =>
        <InfoCard  name={v.name} count={v.count}
        key={this.props.selItemCode}
        image={v.image} price={v.price} code={v.code}
        selItemCode={this.state.selItemCode}
        cbSelectRow={this.cbSelectRow}

  
        />
      )
/*    cbChangeName={this.onChangeName}
          cbChangePrice={this.onChangePrice}
          cbChangeCount={this.onChangeCount}*/
      //this.state.cardMode===2&&this.props.selItemCode&&
        const formEditCode=this.state.items.map( v =>
          <FormEdit  cbSave={this.save} key={this.props.selItemCode} name={v.name} count={v.count}
          image={v.image} price={v.price} code={v.code}
          prodItemCode={this.state.prodItemCode}     
          editProduct={this.editProduct}
          cbCancel={this.cancel}
    
          />
      )

   // const formAddCode=this.state.items.map( v =>
     /*   <FormAdd  cbSave={this.save} key={this.props.selItemCode} name={v.name} count={v.count}
        image={v.image} price={v.price} code={v.code}
        prodItemCode={this.state.prodItemCode}     
        cbCancel={this.cancel}
  
        />*/
  
  //  )
      


      return (
        <div className="IShop">
        <h1 className="title">{titleCode}</h1>
          <div className="header">{headerCode}</div>
          <div className="products">{productsCode}</div>

          <input type="button" onClick={this.add} value="Добавить"  />
          {
            (this.state.cardMode==3)&&
            <div className="card">       
             <FormAdd  cbSave={this.save} key={this.props.selItemCode} name={this.state.addName} count={this.state.addCount}
 price={this.state.addPrice} 
            prodItemCode={this.state.prodItemCode}     
            cbCancel={this.cancel}/>
            </div>
          }
  
      
          {
            (this.state.cardMode==1)&&
           <div className="card">{infoCode}</div>
          }
         {
         // (this.state.cardMode==2)&&
              <div className="form">{formEditCode}</div>
         }
     

        </div>
      )



  }

}

export default Shop;
