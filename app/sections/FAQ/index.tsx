import React from 'react';
import FAQItem from './components/FAQItem';

const FAQData = [
    {
        question: 'Do I need experience to join?',
        answer: 'No experience is needed! We will be hosting workshops prior to the event to help prep students for the Hackathon.',
    },
    {
        question: 'What do I need to bring?',
        answer: 'Please bring your laptop, headset (if you have your own), and chargers.',
    },
    {
        question: 'Do I need to bring or own a headset to participate?',
        answer: 'No! We will provide Metaquest 2 and 3 headsets for participants to borrow during the hackathon.',
    },
    {
        question: 'Will food be provided?',
        answer: 'Yes! We will be providing lunch and dinner for both hackathon days.',
    },
];

function FAQ() {
    return (
        <main id="faq" className="pt-16 h-screen w-full p-8">
            <h1 className="py-4 text-center">Frequently Asked Questions</h1>
            <div className="max-w-2xl mx-auto">
                <div className="rounded-lg divide-y-4 divide-black">
                    {FAQData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default FAQ;
