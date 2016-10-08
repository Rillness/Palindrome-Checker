var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./App.jsx');
var mongoose = require('mongoose');
var props = window.PROPS;


ReactDOM.render(React.createElement(Component, props), document);
