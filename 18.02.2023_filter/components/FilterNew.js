import React from 'react';
import PropTypes from 'prop-types';

import './filter.css';


class Filter extends React.Component {

  static propTypes = {
      title: PropTypes.string.isRequired,
      words:PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
        })
      ),
  
    };

    state = {
      isSort:false,
        filterStr:'',
        currWordList:this.props.words
      };


  filterChange = (e) => {
    this.setState({filterStr:e.target.value},this.processList); 
    };

    sorting = () =>{
        this.state.currWordList.sort();
    }
    sortClicked = (e) =>{
    this.setState({isSort:e.target.checked},this.sorting);
   // this.setState({isSort:!this.state.isSort},);
  };

  reset = (e) =>{
    this.setState({isSort:false, filterStr:""/*,currWordList:this.props.words*/},this.processList)
  };


  processList = () =>{
    let list=this.props.words.slice();
    if(this.state.filterStr){
      list=list.filter(s => s.text.includes(this.state.filterStr));
    };
    if(this.state.isSort===true)
      //if(list===this.props.words)
    //  list=list.slice();
      list.sort(); 
   this.setState({currWordList:list});
   };

   render() {
    const titleCode=this.props.title

//this.state.currWordList.join("\n")
    const currWordListCode=this.state.currWordList.map( v => {
     return <div key={v.text} className='list_item'>{v.text}</div>
 
    });
    

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


