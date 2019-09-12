import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Feed from './Components/Feed/Feed';
import Create from './Components/Create/Create';
import decode from 'jwt-decode';

const isAuthenticated = () => {
	const token = localStorage.getItem('token');
	const refreshToken = localStorage.getItem('refreshToken');
	try {
		decode(token);
		decode(refreshToken);
	} catch (err) {
		return false;
	}
	return true;
};

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login'
						}}
					/>
				)
			}
		/>
	);
}

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<PrivateRoute path="/feed" exact component={Feed} />
				<PrivateRoute path="/create" exact component={Create} />
			</Switch>
		</Router>
	);
}

export default App;
