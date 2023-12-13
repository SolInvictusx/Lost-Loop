import { useState } from "react";

const FormComponent = () => {
    const [data, setData] = useState({ firstname: "", lastname: "", email: "", subject: "" });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <h1>Contact <span>Here</span></h1>
            <input type="text" name="firstname" id="" onChange={handleChange} value={data.firstname} placeholder="First Name" className="form-text" />
            <input type="text" name="lastname" id="" onChange={handleChange} value={data.lastname} placeholder="Last Name" className="form-text" />
            <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="Example@gmail.com" className="form-text" />
            <input type="text" name="subject" id="" onChange={handleChange} value={data.subject} placeholder="Subject" className="form-text" />
            <textarea name="message" id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder="Message" className="form-text" />
            <button type="submit">Submit</button>
        </form>


    )
}

export default FormComponent;