import React, { useState } from 'react';
import './Create.css';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function Create() {
	const [text, setText] = useState('');
	const [handleCreate, { data }] = useMutation(createPost, {
		variables: {
			text
		}
	});
	if (data) console.log('USER ID >>>', data.createPost.post);
	return (
		<>
			<input type="text" onChange={e => setText(e.target.value)} />
			<button onClick={handleCreate}>Create</button>
		</>
	);
}

const createPost = gql`
	mutation($text: String!) {
		createPost(text: $text) {
			ok
			post {
				text
				userId
			}
			errors {
				path
				message
			}
		}
	}
`;
export default Create;
