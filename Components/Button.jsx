var React = require('react');

var ScreamButton = React.createClass({

  getInitialState : function(){
    return{name : 'Scream'}
  },

  scream : function(){
    alert('SCREEEAAAAMMMMM');
  },


  render : function(){

    this.setState({name : this.props.name});

    return <button onClick={this.scream} >{this.state.name}</button>

  }


});

module.exports = ScreamButton;
