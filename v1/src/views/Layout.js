// Layout.js
var React = require('react');

var Home = require('./Home');

var Layout = React.createClass({
  render: function() {
    return <div className="layout">
    	<header>
    		<h1><a href="#/">CSGOSCRIM</a></h1>
	    	<nav>
          <a href="#/orgs">Organizations</a>
          <a href="#/events">Events</a>
          <a href="#/servers">Servers</a>
          <a href="#/teams">Teams</a>
	    		<a href="#/matches">Matches</a>
          <a href="#/players">Players</a>
	    		<a href="#/messages">Messages</a>
	    		<a href="#/profile">Profile</a>
          <a href="logout">Logout</a>
	    	</nav>
    	</header>
    	<main>
			{this.props.children}
    	</main>
    </div>;
  }
});

module.exports = Layout;