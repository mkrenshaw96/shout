import React from 'react';
import './Feed.css';
import Pen from './Asset/pen.svg';
import PP from './Asset/profilepic.jpeg';
import Dots from './Asset/dots.svg';
import Location from './Asset/location.svg';
import Like from './Asset/heart.svg';
import Comment from './Asset/comment.svg';
import Share from './Asset/share.svg';
import Star from './Asset/star.svg';
import Forest from './Asset/forest.jpeg';

function Feed(props) {
	return (
		<div id="feed-wrapper">
			<Title />
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
				<SinglePost key={x} />
			))}
		</div>
	);
}

function Title() {
	return (
		<div id="feed-heading">
			<div id="feed-title">Feed</div>
			<img src={Pen} alt="Create" id="feed-create-btn" />
		</div>
	);
}

function SinglePost(props) {
	return (
		<div className="post-wrapper">
			<Header />
			<Content />
			<Media />
			<Interactions />
		</div>
	);
}

function Header(props) {
	return (
		<div className="post-header">
			<div className="post-user-data">
				<img src={PP} alt="profile" className="post-user-img" />
				<div className="post-user-info">
					<div className="post-user-name">Anothony Cortez</div>
					<div className="post-place-time-data">
						<div className="post-time">30 min ago</div>
						<img src={Location} alt="location" className="post-location-img" />
						<div className="post-location">London, United Kingdom</div>
					</div>
				</div>
			</div>
			<img src={Dots} alt="options" className="post-options" />
		</div>
	);
}

function Content(props) {
	return (
		<div className="post-cont">
			<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt velit qui dolorem quae
				quibusdam eum, aliquid reprehenderit deserunt animi culpa accusantium illum voluptates veniam. Saepe,
				consectetur. Similique, quibusdam possimus.
			</div>
		</div>
	);
}

function Media(props) {
	return <img src={Forest} alt="media" className="post-media" />;
}

function Interactions(props) {
	return (
		<div className="post-interactions">
			<div className="interactions-left-links">
				<img src={Like} alt="like" className="interactions-icon-btn iib-space" />
				<div className="interactions-num iib-space">968</div>
				<img src={Comment} alt="comment" className="interactions-icon-btn iib-space" />
				<div className="interactions-num iib-space">24</div>
				<img src={Share} alt="share" className="interactions-icon-btn iib-space" />
			</div>
			<img src={Star} alt="favorite" className="interactions-icon-btn" />
		</div>
	);
}

export default Feed;
