import { useState } from "react";
import '../css/accordion.css'

const dataAnswers = [
    {
        question: 'How fresh is the beef?',
        answer: 'The beef that we sell has been processed no more than 1-2 months prior, and has been stored in our freezers to preserve maximum quality. However, it is often the case that we take pre-orders on our beef, and as such hold onto the beef for only a few days before being released to our customers!'
    }, {
        question: 'Do you offer delivery on your beef or merhandise?',
        answer: 'Currently, we only allow for pickup. In the future, we will allow for purchases of our merchandise online, and possibly our beef soon after! As for now, please see our contact page to reach out to us for more details about pickup.'
    }, {
        question: 'Do you offer ice or refigeration for beef purchased?',
        answer: 'We provide our customers accomodations such as ice or dry ice if requested prior to purchase. Let us know if there are any special requests, such as coolers or special bags to maintain safety and quality for any extended trips.',
    }, {
        question: 'How long can the beef be stored to maintain optimal quality',
        answer: 'We recommend that the beef be consumed within 1 - 1.5 years after purchase, for maximum quality. However, as long as the beef is stored properly and kept frozen, it will be safe to eat indefinitely!',
    }, {
        question: 'Do you accept online payments and/or require down payments for beef or merchandise?',
        answer: 'We currently do not offer online payments, as we move forward, this will likely become a feature on our site. As for down payments, we are quite flexible. We ask our customers who are interested in pre-ordering contact us about down payment information, and for all other requests, payment can be made at time of pickup.'
    }, {
        question: 'What happens if something is wrong with my purchase?',
        answer: 'We strive to provide our customers with the best possible beef and merchandise without any mistakes in their orders, customized or otherwise. If for any reason you believe an error was made, or something is defective, please do not hestitate to contact us, and we will be happy to help. We value our customers, and therefore if replacements or special accomodations need to be made, we fully intend to.'
    }, {
        question: 'Where are you located?',
        answer: 'We are located in the heart of Missouri, in Linn, Osage County. As part of the breadbasket of the world, we do our part to bring high quality beef and other products from a small, family owned farm. For exact details about pickup and in regards to our address, please contact us on our contact page for more information.'
    }, {
        question: 'Is the beef inspected or regulated by any agency or government body?',
        answer: 'All of the beef we sell has been inspected by the FDA, and meets all requirements by this organization. We strive to be among the best beef producers in the state, and as such comply with health agencies that guarantee the safety and quality of food products sold.'
    }
]

const Accordion = () => {

    const [accordion, setActiveAccordion] = useState(-1);

    const toggleAccordion = (index) => {
        if (index === accordion) {
            setActiveAccordion(-1);
            return;
        }
        setActiveAccordion(index);
    }

    return (
        <div className="main-container">
            <div className="accordion-container">
                <div>
                    <h1 className="accordion-title">
                        Frequently Asked Questions
                    </h1>
                </div>
                <div className="accordion-faq">
                    {dataAnswers.map((item, index) => (
                        <div key={index} onClick={() => toggleAccordion(index)}>
                            <div className="accordion-faq-heading">
                                <h2 className={accordion === index ? "active" : ""}>{item.question}</h2>
                            </div>
                            <div>
                                {accordion === index ? (<> <span className="verticle"></span> </>) : (<> <span className="verticle"></span> </>)}
                            </div>
                            <div>
                                <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accordion;
