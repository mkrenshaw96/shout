import React, { useState } from 'react';
import './Header.css';

function Header(props) {
	const [query, setQuery] = useState('');
	var location = props.location.pathname;

	function submitSearch(e) {
		e.preventDefault();
		console.log(query);
	}
	return (
		<div id="header">
			{location === '/discover' ? (
				<form onSubmit={e => submitSearch(e)} id="header-explore-form">
					<input
						type="text"
						placeholder="search..."
						id="header-explore-search"
						onChange={e => setQuery(e.target.value)}
					/>
					{/* HIDDEN SO IT DOESNT SHOW BUT USER CAN HIT ENTER TO ENTER SEARCH */}
					<button type="submit" hidden></button>
				</form>
			) : (
				'SHOUT'
			)}
		</div>
	);
}

export default Header;
