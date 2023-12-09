import { useState } from "react";
import '../css/accordion.css'

const dataAnswers = [
    {
        question: 'How fresh is the beef?',
        answer: 'The beef that we sell has been processed no more than 1-2 months prior, and has been stored in our freezers to preserve maximum quality. However, it is often the case that we take pre-orders on our beef, and as such hold onto the beef for only a few days before being released to our customers!'
    }, {
        question: 'Do you offer delivery on your beef or merhandise?',
        answer: ''
    }, {
        question: 'Do you offer ice or refigeration for beef purchased?',
        answer: '',
    }, {
        question: 'How long can the beef be stored to maintain optimal quality',
        answer: '',
    }, {
        question: 'Do you accept online payments and/or require down payments for beef or merchandise?',
        answer: ''
    }, {
        question: 'What happens if something is wrong with my purchase?',
        answer: ''
    }, {
        question: 'Where are you located?',
        answer: ''
    }, {
        question: 'Is the beef inspected or regulated by any agency or government body?',
        answer: ''
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
                                {accordion === index ? (<> <span className="verticle">-</span> </>) : (<> <span className="verticle">+</span> </>)}
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
