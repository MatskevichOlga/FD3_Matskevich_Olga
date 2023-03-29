import React from 'react';
import PropTypes from 'prop-types';

import './filter.css';


class Filter extends React.Component {

  static propTypes = {
      title: PropTypes.string.isRequired,
      words:PropTypes.array.isRequired,

  
    };

    state = {
      isSort:false,
        filterStr:'',
        currWordList:this.props.words
      };


  filterChange = (e) => {
    this.setState({filterStr:e.target.value},this.processList); 
    };

    sortClicked = (e) =>{
   this.setState({isSort:e.target.checked},this.processList);
   // this.setState({isSort:!this.state.isSort},);
  };

  reset = (e) =>{
    this.setState({isSort:false, filterStr:""/*,currWordList:this.props.words*/},this.processList)
  };


  processList = () =>{
    let list=this.props.words.slice();
    if(this.state.filterStr){
      list=list.filter(s => s.includes(this.state.filterStr));
    };
    if(this.state.isSort===true)
      //if(list===this.props.words)
    //  list=list.slice();
      list.sort(); 
   this.setState({currWordList:list});
   };

   render() {
    const titleCode=this.props.title

    const currWordListCode= this.state.currWordList.join("\n");
    //this.state.currWordList.map( v => {
    // return <div className='list_item'>{this.state.currWordList.join("\n")}</div>

  //  });  
// key={v.text}
    return (
        <div className="filterBlock">
             <h3 className="title">{titleCode}</h3>
             <input type="checkbox" checked={this.state.isSort} onChange={this.sortClicked} />
             <input type="text" value={this.state.filterStr} onChange={this.filterChange} />
             <input type="button" value="Cброс" onClick={this.reset} />
             <div className='word_list'>{currWordListCode}</div>

        </div>

    )
    }
      
}

export default Filter;



