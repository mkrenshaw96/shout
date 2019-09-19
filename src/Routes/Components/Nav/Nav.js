import React from 'react';
// import { Redirect } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
	const active = props.location.pathname;

	function goTo(location) {
		props.history.push(location);
	}

	return (
		<div id="nav">
			<div className={active === '/' ? 'nav-text-active' : 'nav-text'} onClick={e => goTo('/')}>
				feed
				<div className={active === '/' ? 'indicator-active' : 'indicator'}></div>
			</div>
			<div className={active === '/discover' ? 'nav-text-active' : 'nav-text'} onClick={e => goTo('/discover')}>
				explore
				<div className={active === '/discover' ? 'indicator-active' : 'indicator'}></div>
			</div>
			<div className={active === '/create' ? 'nav-text-active' : 'nav-text'} onClick={e => goTo('/create')}>
				create
				<div className={active === '/create' ? 'indicator-active' : 'indicator'}></div>
			</div>
			<div className={active === '/activity' ? 'nav-text-active' : 'nav-text'} onClick={e => goTo('/activity')}>
				activity
				<div className={active === '/activity' ? 'indicator-active' : 'indicator'}></div>
			</div>
			<div className={active === '/profile' ? 'nav-text-active' : 'nav-text'} onClick={e => goTo('/profile')}>
				profile
				<div className={active === '/profile' ? 'indicator-active' : 'indicator'}></div>
			</div>
		</div>
	);
}

export default Nav;
