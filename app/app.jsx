var React = require('react'),
	ReactDOM = require('react-dom'),
	Main = require('Main');

// object de-structuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// require foundation using css! loader but use style loader first
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyle')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);