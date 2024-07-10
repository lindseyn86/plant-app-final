import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default function SignUp() {

	const API_URL = 'https://666c475449dbc5d7145d6d4b.mockapi.io/Members';
	const [members, setMembers] = useState([]);

	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');
	const [newState, setNewState] = useState('');
	const [newFavePlant, setNewFavePlant] = useState('');
	const [newEmail, setNewEmail] = useState('');

	function newMember(e) {
		e.preventDefault();

		fetch(API_URL, {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				firstName: newFirstName,
				lastName: newLastName,
				state: newState,
				favePlant: newFavePlant,
				email: newEmail,
			})
		})
		.then(response => {
			if (response.ok) {
				alert("Sign up successful!");
				setNewFirstName('');
				setNewLastName('');
				setNewState('');
				setNewFavePlant('');
				setNewEmail('');
			} else {
				alert("Sign up failed!");
			}
		})
		.catch(error => {
			console.error("Error:", error);
			alert("Sign up failed!");
		});
	}

	return (
		<div className="form">
			<form onSubmit={newMember}>
				<h3>
					Sign Up To Become a Plant Society Member
				</h3>
				<label>First Name</label>
				<input value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)} placeholder="First Name" />
				<label>Last Name</label>
				<input value={newLastName} onChange={(e) => setNewLastName(e.target.value)} placeholder="Last Name" />
				<label>State of Residence</label>
				<input value={newState} onChange={(e) => setNewState(e.target.value)} placeholder="State" />
				<label>Email</label>
				<input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Email Address" />
				<label>Favorite Plant</label>
				<input value={newFavePlant} onChange={(e) => setNewFavePlant(e.target.value)} placeholder="Favorite Plant" />
				<button className="btn btn-green" type="submit">Sign Up</button>
			</form>
		</div>
	);
}
