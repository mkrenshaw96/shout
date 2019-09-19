import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './Register.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [onSubmit, { loading, error, data }] = useMutation(createUser, {
		variables: {
			name: name,
			email: email,
			username: username,
			password: password
		}
	});

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) return <p>Error :{error.message}</p>;
	if (data) {
		const { ok, errors } = data.createUser;
		if (ok) {
			return <Redirect to="/login" />;
		} else {
			errors.map(x => console.log('MSG >>>', x.message, 'PATH >>>', x.path));
			return <div>ERROR</div>;
		}
	}

	return (
		<div id="register-wrapper">
			<form action="">
				<h4>See what’s happening in the world right now</h4>
				<br />
				<h5>Join shOut today.</h5>
				<br />
				<TextField
					type="text"
					label="Full Name"
					autoComplete="name"
					margin="dense"
					variant="outlined"
					className="input-item"
					required
					onChange={e => setName(e.target.value)}
				/>
				<TextField
					type="email"
					name="email"
					label="Email"
					autoComplete="email"
					margin="dense"
					variant="outlined"
					className="input-item"
					required
					onChange={e => setEmail(e.target.value)}
				/>
				<TextField
					type="username"
					label="Username"
					autoComplete="username"
					margin="dense"
					variant="outlined"
					className="input-item"
					required
					onChange={e => setUsername(e.target.value)}
				/>
				<TextField
					type="password"
					label="Password"
					autoComplete="password"
					margin="dense"
					variant="outlined"
					className="input-item"
					required
					onChange={e => setPassword(e.target.value)}
				/>
				<br />
				<Button
					variant="contained"
					color="primary"
					className="input-item"
					style={{ outline: 'none' }}
					onClick={onSubmit}
				>
					Sign Up
				</Button>
			</form>
		</div>
	);
}

const createUser = gql`
	mutation($name: String!, $email: String!, $username: String!, $password: String!) {
		createUser(name: $name, email: $email, username: $username, password: $password) {
			ok
			errors {
				path
				message
			}
		}
	}
`;

export default Register;
