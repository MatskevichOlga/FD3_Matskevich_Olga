var IShop = React.createClass({

    displayName: 'IShop',
  
    propTypes: {
      title: React.PropTypes.string.isRequired, // заголовок
      header: React.PropTypes.array.isRequired, // заголовки в таблице
      products: React.PropTypes.array.isRequired, // товары и характеристики
      // products:React.PropTypes.arrayOf(
      //   React.PropTypes.shape({
      //     code: React.PropTypes.number.isRequired,
      //     count: React.PropTypes.number.isRequired,
      //     text: React.PropTypes.string.isRequired,
       //     image: React.PropTypes.string.isRequired,
      //   })
      // )
  
    },

    getDefaultProps: function () {
      return {
        title: "Введите верно наименование магазина",
        products: [{ text:"ошибка", price:"ошибка", image:"https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png", count:"ошибка" }]

      }
  },


  
    render: function() {
  
      var productsCode=this.props.products.map( v =>
          React.DOM.div({key:v.code,className:'product'},
          React.DOM.div({className:'product_item'},v.text),
          React.DOM.div({className:'price'},v.price),
          React.DOM.div({className:'image'},
          React.DOM.img({src:v.image}) ),        
            React.DOM.div({className:'count'},v.count),
          )
        );
        var headerCode=this.props.header.map( v =>
          React.DOM.div({key:v.code,className:'header_title'},v.text),

        );
      return React.DOM.div( {className:'IShop'}, 
        React.DOM.h1( {className:'title'}, this.props.title ),
        React.DOM.div( {className:'header'}, headerCode ),
        React.DOM.div( {className:'products'}, productsCode )
  
      );
    },
  
  });