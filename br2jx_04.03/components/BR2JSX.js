import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
class BR2JSX extends React.Component {
  
 static propTypes = {
    text: PropTypes.string.isRequired,

};
  
render() {
  let lines = this.props.text.split(/<br\s?\/?>/);
//let result=[];

const result = lines.map((word, id) => {

  return (
    <React.Fragment key={id}>
        {id !== 0 && <br />} {word}
    </React.Fragment>
)

 /* for (let i=0; i<lines.length; i++){
    result.push(lines[i]);
    if(i<(lines.length-1))
    result.push(<br/>);*/

  // key={lines.length.toString()};
   // if(i)
    /*  result+=lines[i];
    result+=lines[i] + <br/>;*/

  })
return <div>{result}</div>;
}
}


export default BR2JSX;



