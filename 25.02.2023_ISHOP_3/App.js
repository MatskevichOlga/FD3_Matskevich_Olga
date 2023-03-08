import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let titleText='Наличие авто на складе "Атлант-Н"';
let productsArr=require('./products.json');
let headerArr=[
  {text:'Наименование', code:1},
  {text:'Стоимость', code:2},
  {text:'Изображение', code:3},
  {text:'Остаток на складе', code:4},
  {text:'Удалить', code:5}
];

ReactDOM.render(
  <Shop 
    title={titleText}
    header={headerArr}
    products={productsArr}
  />
  , document.getElementById('container') 
);

