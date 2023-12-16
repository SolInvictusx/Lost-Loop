import React from 'react';

const FormComponent = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new URLSearchParams(formData), // Use URLSearchParams to format the data
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (response.ok) {
                // Handle success
                console.log('Form submitted successfully');
                // Update your UI with a success message
            } else {
                // Handle error
                console.error('Form submission failed');
                // Update your UI with an error message
            }
        } catch (error) {
            console.error('An error occurred during form submission', error);
            // Update your UI with an error message
        }
    };

    return (
        <form
            method="POST"
            action="/contact"
            name="contact"
            onSubmit={handleSubmit} // Attach the submit handler
        >
            <input type="hidden" name="form-name" value="contact" />
            <h1>Contact <span>Here</span></h1>
            <input required type="text" name="firstname" placeholder="First Name" className="form-text" />
            <input required type="text" name="lastname" placeholder="Last Name" className="form-text" />
            <input required type="email" name="email" placeholder="Example@gmail.com" className="form-text" />
            <input required type="text" name="subject" placeholder="Subject" className="form-text" />
            <textarea required name="message" cols="30" rows="10" placeholder="Message" className="form-text"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
