// Home.js
var React = require('react');

var Home = React.createClass({
  render: function() {
    return <div>
    	<h1>Welcome</h1>
    	<h2>Project Columbia City</h2>
    	<h3>Project Ballard</h3>
    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lorem vitae lacus dictum tristique.
    	Aenean a quam elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
    	In faucibus, mi vel vulputate euismod, sapien neque elementum nisi, id sodales mauris dolor in lorem.
    	Nunc eu velit pretium nisl blandit pretium nec nec purus. Donec tempus tristique ligula, vel consequat tellus faucibus quis.
    	Praesent interdum diam vel ipsum malesuada sodales. Vestibulum auctor lorem justo, non sollicitudin nulla tempor facilisis.
    	Fusce nec leo suscipit, euismod nulla sed, vulputate diam. Nam fermentum accumsan bibendum.</p>
    </div>
  }
});

module.exports = Home;