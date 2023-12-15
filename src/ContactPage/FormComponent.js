
const FormComponent = () => {

    return (
        <form method="POST" action="/contact" name="contact" >
            <input type="hidden" name="form-name" value="contact" />
            <h1>Contact <span>Here</span></h1>
            <input required type="text" name="firstname" placeholder="First Name" className="form-text" />
            <input required type="text" name="lastname" placeholder="Last Name" className="form-text" />
            <input required type="email" name="email" placeholder="Example@gmail.com" className="form-text" />
            <input required type="text" name="subject" placeholder="Subject" className="form-text" />
            <textarea required name="message" cols="30" rows="10" placeholder="Message" className="form-text"></textarea>
            <button type="submit">Submit</button>
        </form>

    )
}

export default FormComponent;