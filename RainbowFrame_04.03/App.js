import React from 'react';
import ReactDOM from 'react-dom';
import RainbowFrame from './components/RainbowFrame';



/*
  render() {
      let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
      return (
          <RainbowFrame colors={colors}>
             <h2>Hello!</h2> 
          </RainbowFrame>
      );
  }*/

  let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  ReactDOM.render(
    <RainbowFrame colors={colors}>
          <h2>Hello!</h2> 
    </RainbowFrame>

    , document.getElementById('container') 
  );
  




