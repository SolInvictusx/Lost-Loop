import { useState } from "react";

const FormComponent = () => {
    // const [data, setData] = useState({ firstname: "", lastname: "", email: "", subject: "", message: "" });
    // const handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setData({ ...data, [name]: value });
    // };


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data);
    // }

    return (
        <form method="POST" name="contact" data-netlify="true" >
            <h1>Contact <span>Here</span></h1>
            <label><input type="text" name="firstname" id="" value={data.firstname} placeholder="First Name" className="form-text" /></label>
            <label><input type="text" name="lastname" id="" value={data.lastname} placeholder="Last Name" className="form-text" /></label>
            <label><input type="email" name="email" id="" value={data.email} placeholder="Example@gmail.com" className="form-text" /></label>
            <label><input type="text" name="subject" id="" value={data.subject} placeholder="Subject" className="form-text" /></label>
            <label><textarea name="message" id="" cols="30" value={data.message} rows="10" placeholder="Message" className="form-text" /></label>
            <button type="submit">Submit</button>
        </form>

    )
}

export default FormComponent;