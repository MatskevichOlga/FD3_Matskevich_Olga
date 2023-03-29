import React from 'react';
import PropTypes from 'prop-types';

//class RainbowFrameHOC extends React.Component {
  const withRainbowFrame = colors => Comp => {
  
 return class RainbowFrameHOC extends React.Component {

  render() {
     let rainbowFrameCode=<Comp {...this.props}/>;
     for (let color of colors){
      rainbowFrameCode=<div style={{textAlign: 'center', border:`solid 6px ${color}`, padding: "6px"}}>{rainbowFrameCode}</div>
    }

  return (
    <div style={{ width: 500, textAlign: 'center', margin: '10px auto' }}>{rainbowFrameCode}</div>
  )
}

}
  }



export {withRainbowFrame};