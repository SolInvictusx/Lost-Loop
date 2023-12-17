import React, { useState } from 'react';

const FormComponent = () => {
    const [submissionResult, setSubmissionResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new URLSearchParams(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (response.ok) {
                // Handle success
                setSubmissionResult('success');
            } else {
                // Handle error
                setSubmissionResult('error');
            }
        } catch (error) {
            setSubmissionResult('error');
        }
    };

    return (
        <div>
            <form
                method="POST"
                action="/contact"
                name="contact"
                onSubmit={handleSubmit}
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

            {submissionResult === 'success' && (
                <p className='form-result-success'>Success! We will get back to you soon.</p>
            )}

            {submissionResult === 'error' && (
                <p className='form-result-fail'>Oh no! The submission failed. Please try again.</p>
            )}
        </div>
    );
};

export default FormComponent;
