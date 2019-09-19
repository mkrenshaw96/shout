import React from 'react';
import Placeholder from './Assets/placeholder.jpeg';
import Direct from './Assets/direct.svg';
import './Profile.css';

function Profile(props) {
	return (
		<div id="profile-wrapper">
			<Head />
			<Data />
			<Interactions />
			<Grid />
		</div>
	);
}

function Head(props) {
	return (
		<div id="head-wrapper">
			<img src={Placeholder} alt="profile" id="head-profile-img" />
			<div id="head-data-cont">
				<div id="head-username">username</div>
				{/* <div id="head-tag">tag</div> */}
				<div id="head-bio">bio</div>
				{/* <div id="head-link">link</div> */}
			</div>
		</div>
	);
}

function Data(props) {
	return (
		<div id="data-wrapper">
			<div id="data-width-wrapper">
				<div className="data-cont">
					<div className="data-number">100</div>
					<div className="data-label">Posts</div>
				</div>
				<div className="data-cont">
					<div className="data-number">100</div>
					<div className="data-label">Following</div>
				</div>
				<div className="data-cont">
					<div className="data-number">100</div>
					<div className="data-label">Followers</div>
				</div>
			</div>
		</div>
	);
}

function Interactions(props) {
	return (
		<div id="interactions-wrapper">
			<button id="interactions-follow-btn">Follow</button>
			<button id="interactions-message-btn">
				<img src={Direct} alt="direct" id="interactions-message-img" />
			</button>
		</div>
	);
}

function Grid(props) {
	return (
		<div id="grid-wrapper">
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
			<div className="grid-box"></div>
		</div>
	);
}

export default Profile;
