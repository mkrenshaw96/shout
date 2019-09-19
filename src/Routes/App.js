import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

//COMPONENTS
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Feed from './Components/Feed/Feed';
import Create from './Components/Create/Create';
import Nav from './Components/Nav/Nav';
import Discover from './Components/Discover/Discover';
import Activity from './Components/Activity/Activity';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Search from './Components/Seach/Search';

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
					<>
						<Header {...props} />
						<Component {...props} />
						<Nav {...props} />
					</>
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
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<PrivateRoute path="/" exact component={Feed} />
				<PrivateRoute path="/create" exact component={Create} />
				<PrivateRoute path="/discover" exact component={Discover} />
				<PrivateRoute path="/activity" exact component={Activity} />
				<PrivateRoute path="/profile" exact component={Profile} />
				<PrivateRoute path="/search" exact component={Search} />
			</Switch>
		</Router>
	);
}

export default App;
