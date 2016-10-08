var React = require('react');
var ScreamButton = require('./Components/Button.jsx');
var ReverseString = require('reverse-string');
var TextInput = require('./Components/Input.jsx');

//Create the main React component.
var App = React.createClass({

  getInitialState : function(){
    return{
      tagName : 'li',
      buttonName : 'Make Bold',
      isLarge : false,
      value : '',
      heading : '',
      stringsMatch : 'No Match'
    }
  },
//This does something when the button is clicked.
  doSomething : function(){
    alert('If this buttons working, that means React is on the Server, AND the Client.');
  },


//Looping Data in React.js
loopData : function(name,i){

      //Render a state tag name in there.
    if(this.state.isLarge == false){
      return(
        <this.state.tagName key={i}>{name}</this.state.tagName>
      )
}

  if(this.state.isLarge == true){
    return(
      <this.state.tagName key={i}>{i + 1}) {name} </this.state.tagName>
    )
  }

  },

  //Making the tags bold.
  boldList : function(){

if(this.state.isLarge == false){

    this.setState({
      tagName : 'h1',
      buttonName : 'Make Small',
      isLarge : true
    });

}

if(this.state.isLarge == true){

  this.setState({
    tagName : 'li',
    buttonName : 'Make Large',
    isLarge : false
  });

}

  },

  handleChange : function(event) {

//Reversing the string.
var newString = ReverseString(event.target.value);


   this.setState({
     value: event.target.value,
     heading : newString
   });

if(newString.length === 0){
  this.setState({
    stringsMatch : ''
  });
}

if(event.target.value == newString && newString.length > 1){

  this.setState({
    stringsMatch : 'Both Word(s) Match'
  });

}else{

  this.setState({
    stringsMatch : 'No Match'
  });

  }


 },

  //Render everything at the end.
  render : function(){

if(this.state.stringsMatch == 'No Match'){

  var divStyle = {
    color : 'red'
  }

}

if(this.state.stringsMatch == 'Both Word(s) Match'){

  var divStyle = {
    color : '#76EE00'
  }

}


    return(

      <html>

          <head>

            <title>Serverside React</title>
            <link rel="stylesheet" href="/style.css" />

          </head>

          <body>
    <div>
<h1>Palindrome Checker</h1>
    <p style={divStyle}>Status : {this.state.stringsMatch}</p>

          <h2>Normal:  {this.state.value}</h2>


          <h2>Reversed: {this.state.heading}</h2>

          <input
        type="text"
        placeholder={this.state.value}
        onChange={this.handleChange}
      />

    <br/>

    <br/>

          <button onClick={this.boldList}>{this.state.buttonName}
          </button>

    <ul>

{/* Below is the way you loop the data in an array.*/}
   {this.props.data.map(this.loopData)}

    </ul>

    </div>


{/*This is what defines the inner html so you can use props*/}
    <script dangerouslySetInnerHTML={{
        __html : 'window.PROPS=' + JSON.stringify(this.props)
    }}/>

    {/*The bundle.js script tag.*/}
          <script src='/bundle.js' />
          </body>

          </html>

    )
  }


});

//Export the whole component.
module.exports = App;
