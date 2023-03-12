import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/FilterNew';

let titleText='Сортировка списка';
let wordsArr=require('./words.json');

ReactDOM.render(
  <Filter
    title={titleText}
    words={wordsArr}
  />
  , document.getElementById('container') 
);

