import React from 'react';
import PropTypes from 'prop-types';
class BR2JSX extends React.Component {
  
  static propTypes = {
    text: PropTypes.string.isRequired,
};
  
render() {
  let lines = this.props.text.split(/<br\s?\/?>/);
  let result="";

  for (let i=0; i<lines.length; i++){

/*    result.push(lines[i]);
    if(i<(lines.length-1))
    result.push(<br/>);*/
    if(i)
      result+=lines[i];
    result+=lines[i] + <br/>;

  }
return <div>{lines}</div>;
}
}


export default BR2JSX;



