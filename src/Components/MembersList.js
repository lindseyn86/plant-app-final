import React, { useState, useEffect } from 'react';

function MembersList() {
	const [members, setMembers] = useState([]);
	const [updatedFirstName, setUpdatedFirstName] = useState('');
	const [updatedLastName, setUpdatedLastName] = useState('');
	const [updatedState, setUpdatedState] = useState('');
	const [updatedFavePlant, setUpdatedFavePlant] = useState('');
	const [updatedEmail, setUpdatedEmail] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://666c475449dbc5d7145d6d4b.mockapi.io/Members');
			const jsonData = await response.json();
			setMembers(jsonData);
		};

		fetchData();
	}, []);

	function updateMember(e, memberObject) {
		e.preventDefault();
		const API_URL = 'https://666c475449dbc5d7145d6d4b.mockapi.io/Members';

		let updatedMemberObject = {
			...memberObject,
			firstName: updatedFirstName || memberObject.firstName,
			lastName: updatedLastName || memberObject.lastName,
			state: updatedState || memberObject.state,
			favePlant: updatedFavePlant || memberObject.favePlant,
			email: updatedEmail || memberObject.email,
		};

		fetch(`${API_URL}/${memberObject.id}`, {
			method: 'PUT',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedMemberObject)
		}).then(() => {
			setUpdatedFirstName('');
			setUpdatedLastName('');
			setUpdatedState('');
			setUpdatedFavePlant('');
			setUpdatedEmail('');
			const fetchData = async () => {
				const response = await fetch('https://666c475449dbc5d7145d6d4b.mockapi.io/Members');
				const jsonData = await response.json();
				setMembers(jsonData);
			};

			fetchData();
		});
	}

	return (
		<div>
			{members.map(member => (
				<div key={member.id} className="member-info row">
					<div className="member-details">
						<h3>{member.firstName} {member.lastName}</h3>
						<div className="row">
							<div className="col-4">
								<label>Lives in </label><span> <strong>{member.state}</strong></span>
							</div>
							<div className="col-4">
								<label>{member.firstName}'s Favorite Plant is </label><span> {member.favePlant}</span>
							</div>
							<div className="col-4">
								<a className="btn btn-green" href={`mailto:${member.email}`}>Email Member</a>
							</div>
						</div>
					</div>
					<div className="update-form">
						<form className="row" onSubmit={(e) => updateMember(e, member)}>
							<strong>Update Member Info</strong>
							<div className="col-4">
							<label>Update Name</label><br/>
								<span>
									<span><input value={updatedFirstName} onChange={(e) => setUpdatedFirstName(e.target.value)} placeholder="First Name" /></span>
									<span><input value={updatedLastName} onChange={(e) => setUpdatedLastName(e.target.value)} placeholder="Last Name" /></span>
								</span>
							</div>
							<div className="col-2">
								<span>
									<label>Update State</label>
									<input value={updatedState} onChange={(e) => setUpdatedState(e.target.value)} placeholder="State" />
								</span>
							</div>
							<div className="col-2">
								<span>
									<label>Update Favorite Plant</label>
									<input value={updatedFavePlant} onChange={(e) => setUpdatedFavePlant(e.target.value)} placeholder="Favorite Plant" />
								</span>
							</div>
							<div className="col-2">
								<span>
									<label>Update Email</label>
									<input value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} placeholder="Email" />
								</span>
							</div>
							<div class="col-1">
								<button className="btn btn-green" type="submit">Update</button>
							</div>
						</form>
					</div>
				</div>
			))}
		</div>
	);
}

export default MembersList;
