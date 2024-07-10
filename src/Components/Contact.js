import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_81ch41k', 'template_ee5doee', e.target, 'lindseyn86@gmail.com')
			.then((result) => {
				console.log(result.text);
				alert('Message sent successfully!');
			}, (error) => {
				console.log(error.text);
				alert('Message sent.');
			});

		setFormData({
			name: '',
			email: '',
			message: ''
		});
	};

	return (
		<form className="contact row" onSubmit={handleSubmit}>
			<div className="col-3">
				<label>
					Name:<br/>
					<input type="text" name="name" value={formData.name} onChange={handleChange} required />
				</label>
			</div>
			<div class="col-3">
				<label>
					Email:<br/>
					<input type="email" name="email" value={formData.email} onChange={handleChange} required />
				</label>
			</div>
			<div className="col-3">
				<label>
					Message:
					<textarea name="message" value={formData.message} onChange={handleChange} required />
				</label>
			</div>
			<button type="submit">Send</button>
		</form>
	);
};

export default ContactForm;
