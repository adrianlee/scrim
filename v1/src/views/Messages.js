// Messages.js
var React = require('react');

var MessageBrowser = require('../components/MessageBrowser');

var Messages = React.createClass({
  render: function() {
    return <div>
    	<h1>Messages</h1>
    	<MessageBrowser/>
    </div>;
  }
});

module.exports = Messages;