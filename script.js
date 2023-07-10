// script.js

// Get the form element
const form = document.getElementById('contactForm');
// Add an event listener to the form
form.addEventListener('submit',function(event) {
	event.preventDefault(); // Prevent form submission
	// Get the form input values
	const name=document.getElementById('name').value;
	const email=document.getElementById('email').value;
	const message=document.getElementById('message').value;
	// Perform form validation
	if (name.trim()===''||email.trim()===''||message.trim()==='') {
		alert('Please fill in all fields.');
		return;
	}
	// Perform form submission
	alert(`Thank you, ${name}! Your message has been submitted.`);
	form.reset();
});
