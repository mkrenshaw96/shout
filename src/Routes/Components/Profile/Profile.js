import React from 'react';
import './Profile.css';
import Placeholder from './Assets/placeholder.jpeg';

function Profile() {
	return (
		<>
			<div id="profile-data" style={{ backgroundImage: `url(${Placeholder})` }}>
				<h1>Profile</h1>
			</div>
		</>
	);
}

export default Profile;
