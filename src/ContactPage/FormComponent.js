

const FormComponent = () => {
    return (
        <form>
            <h1>Contact <span>Here</span></h1>
            <input type="text" name="first-name" id="" placeholder="First Name" />
            <input type="text" name="last-name" id="" placeholder="Last Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="text" name="subject" id="" placeholder="Subject" />
            <textarea name="message" id="" cols="30" rows="10" placeholder="Message" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormComponent;