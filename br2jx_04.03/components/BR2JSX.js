import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
class BR2JSX extends React.Component {
  
 static propTypes = {
    text: PropTypes.string.isRequired,
   // result:PropTypes.array.isRequired,
};
  
render() {
  let lines = this.props.text.split(/<br\s?\/?>/);
//  let result="";
let result=[];
  for (let i=0; i<lines.length; i++){
    result.push(lines[i]);
    if(i<(lines.length-1))
    result.push(<br/>);
  
   // if(i)
    /*  result+=lines[i];
    result+=lines[i] + <br/>;*/

  }
return <React.Fragment>{result}</React.Fragment>;
}
}


export default BR2JSX;



