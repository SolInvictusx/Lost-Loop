import { useState } from "react";

const FormComponent = () => {
    // const [data, setData] = useState({ firstname: "", lastname: "", email: "", subject: "" });
    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setData({ ...data, [name]: value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data);
    // }

    return (
        // <form method="POST" onSubmit={handleSubmit} id="contact-form" name="contact" netlify >
        //     <h1>Contact <span>Here</span></h1>
        //     <label><input type="text" name="firstname" id="" onChange={handleChange} value={data.firstname} placeholder="First Name" className="form-text" /></label>
        //     <label><input type="text" name="lastname" id="" onChange={handleChange} value={data.lastname} placeholder="Last Name" className="form-text" /></label>
        //     <label><input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="Example@gmail.com" className="form-text" /></label>
        //     <label><input type="text" name="subject" id="" onChange={handleChange} value={data.subject} placeholder="Subject" className="form-text" /></label>
        //     <label><textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder="Message" className="form-text" /></label>
        //     <button type="submit">Submit</button>
        // </form>

        <form method="POST" name="contact" netlify>
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>


    )
}

export default FormComponent;