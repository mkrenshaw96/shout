import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import LinearProgress from '@material-ui/core/LinearProgress';
import Placeholder from '../Profile/Assets/placeholder.jpeg';
import Dots from './Assets/dots.svg';
import './Feed.css';

function Home() {
	const feedQuery = gql`
		query {
			getMyFeed {
				ok
				post {
					text
					createdAt
					user {
						id
						username
						profilePicUrl
					}
				}
			}
		}
	`;

	const { data, loading, error } = useQuery(feedQuery);
	if (loading) return <LinearProgress color="secondary" />;
	if (error) return <LinearProgress />;
	if (data) console.log(data);

	return data.getMyFeed.ok
		? data.getMyFeed.post.map((post, key) => {
				return <Wrapper post={post} key={key} />;
		  })
		: null;
}

function Wrapper(props) {
	return (
		<div className="feed-wrapper">
			<Header postData={props.post} />
			<Content postData={props.post} />
			<Interactions postData={props.post} />
			<hr style={{ width: '85%' }} />
		</div>
	);
}

function Header(props) {
	console.log(props.postData.user.username);
	return (
		<div className="feed-header">
			<img src={Placeholder} alt="" className="feed-header-profile-picture" />
			<div className="feed-header-info">
				<div className="feed-header-username">{props.postData.user.username}</div>
				<div className="feed-header-location">Indianapolis, IN</div>
			</div>
			<div className="feed-header-time">2 mins ago</div>
		</div>
	);
}

function Content(props) {
	return (
		<div className="feed-content">
			{/* <img src={Placeholder} alt="pic" className="feed-img" /> */}
			<div className="feed-text">{props.postData.text}</div>
		</div>
	);
}

function Interactions(props) {
	return (
		<div className="feed-interactions">
			<div className="feed-interactions-data">
				<div className="feed-interactions-boxes">
					<div className="feed-interactions-like-btn"></div>
					<div className="feed-interactions-like-count">45</div>
				</div>
				<div className="feed-interactions-boxes">
					<div className="feed-interactions-comment-btn"></div>
					<div className="feed-interactions-comment-count">6</div>
				</div>
			</div>
			<img src={Dots} alt="options" className="feed-interactions-options" />
		</div>
	);
}

export default Home;
