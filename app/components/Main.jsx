var React = require('react');
var Navigation = require('Navigation');


// var Main = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<Navigation/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });

// to use stateless function components assign to function and pass props
// then modify this.props.children -> props.children
var Main = (props) => {
	return (
		<div>
			<div>
				<div>
					<Navigation />
					<p>Main.jsx Rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;