var filterBlock = React.createClass({

    displayName: 'filterBlock',
  
    propTypes: {
      title: React.PropTypes.string.isRequired, // заголовок
   //  wordList: React.PropTypes.array.isRequired
     wordList:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
         text: React.PropTypes.string.isRequired,
        })
       ),
       //deffChoise: React.PropTypes.string.isRequired,
    },

    getInitialState: function () {
      return {
        isSort:false,
        filterStr:'',
        currWordList:this.props.wordList

      };
    },


 /*   getInitialState: function() {  //состояние по умолчанию
      return { 
        selectedWord: null,
        choisetext:this.props.deffchoise,
      };
    },
     wordSelected: function(word) {

      this.setState( {selectedWord:word} );
    },*/

    
    filterChange: function(e){
      this.setState({filterStr:e.target.value},this.processList);
      //this.processList();
      
      },

      sortClicked: function(e){
      this.setState({isSort:e.target.checked},this.processList);
     // this.setState({isSort:!this.state.isSort},);
    
    
    },


    reset: function(){
  this.setState({isSort:false, filterStr:"",currWordList:props.wordList},this.processList)
},
processList:function(){
  let list=this.props.wordList;  //.slice()
  if(this.state.filterStr)//{
    list=list.filter(s=>s.includes(this.state.filterStr));
 // }
  if(this.state.isSort){
    if(list===this.props.wordList)
    list=list.slice();
    list.sort();
  }
 // return list;
 this.setState({currWordList,list});
 },
  

 render: function() {

  var currWordList=this.props.wordList.map( v =>
    React.DOM.div({key:v.code,className:'list_item'},v.text
    )
    );

  return React.DOM.div( {className:'filterBlock'}, 
React.DOM.input( {type:'checkbox',checked:this.state.isSort, onChange: this.sortClicked} ),
React.DOM.input( {type:'text',value:this.state.isSort, onChange: this.filterChange} ),
React.DOM.input( {type:'button', onClick:this.reset} ),
React.DOM.div( {className:'word_list'},this.state.currWordList.join("\n"),currWordList  ),
  );
  
    },


    /*  var listCode=this.props.list.map( v =>
          React.DOM.div({key:v.code,className:'list_item'},v.text)
          
        );*/
     /*   var inputsCode=this.props.inputs.map( v =>
       
          React.DOM.input({key:v.code,type:'checkbox',className:'inputs_checkbox'}),
          React.DOM.input({key:v.code,type:'text',className:'inputs_checkbox'})

        
        );*/
   /*   return React.DOM.div( {className:'filterBlock'}, 
        React.DOM.h1( {className:'title'}, this.props.title ),
        React.DOM.input( {type:'text',className:'ChoiseLetter'} ),

        React.DOM.div( {className:'list'}, listCode )
  
      );
    },*/
  
  });