var React = require('react');

var TestInput = React.createClass({
  render : function(){
    return(
       <input type="text" name="name" value="hello"/>
    )
  }
});

module.exports = TestInput;
