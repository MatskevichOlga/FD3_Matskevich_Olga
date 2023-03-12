import React from 'react';
import PropTypes from 'prop-types';
class RainbowFrame extends React.Component {
  
 static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
   
    const cbReduce = (rectangle, current) => {
      return (
          <div style={{ border: "solid 6px " + current, padding: "6px" }}>{rectangle}</div>
      )
  }

  const rainbowFrameCode = this.props.colors.reduce(cbReduce, this.props.children);

  return (
      <div style={{ width: 500, textAlign: 'center', margin: '40px auto' }}>{rainbowFrameCode}</div>
  );
}
}

export default RainbowFrame;

/************************* */
/*
class RainbowFrame extends React.Component {
  
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
     let rainbowFrameCode=this.props.children;
     for (let color of this.props.colors){
      rainbowFrameCode=<div style={{textAlign: 'center', border:`solid 6px ${color}`, padding: "6px"}}>{rainbowFrameCode}</div>
     }


  return (
    <div>{rainbowFrameCode}</div>
  )
}
}


export default RainbowFrame;*/