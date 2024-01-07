import { useState } from "react";
import '../css/accordion.css'

const dataAnswers = [
    {
        question: 'Do you offer delivery on your beef or merhandise?',
        answer: 'Currently, we only allow for pickup. In the future, we will allow for purchases of our merchandise online, and possibly our beef soon after! As for now, please see our contact page to reach out to us for more details about pickup.'
    }, {
        question: 'How long can the beef be stored to maintain optimal quality',
        answer: 'We recommend that the beef be consumed within 1 - 1.5 years after purchase, for maximum quality. However, as long as the beef is stored properly and kept frozen, it will be safe to eat indefinitely!',
    }, {
        question: 'Do you accept online payments and/or require down payments for beef or merchandise?',
        answer: 'We currently do not offer online payments, as we move forward, this will likely become a feature on our site. As for down payments, we are quite flexible. We ask our customers who are interested in pre-ordering contact us about down payment information, and for all other requests, payment can be made at time of pickup.'
    }, {
        question: 'Where are you located?',
        answer: 'We are located in central Missouri, just a few miles outside the small town of Rich Fountain.'
    }, {
        question: 'Is the beef inspected or regulated by any agency or government body?',
        answer: 'All our beef is processed at local state-inspected facilities to ensure the safety and the quality of our products.'
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
