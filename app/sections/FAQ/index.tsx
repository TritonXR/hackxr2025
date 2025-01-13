import React from 'react';
import FAQItem from './components/FAQItem';

const FAQData = [
    {
        question: 'blah blah',
        answer: 'hur hur',
    },
    {
        question: 'blah blah',
        answer: 'hur hur',
    },
    {
        question: 'blah blah',
        answer: 'hur hur',
    },
];

function FAQ() {
    return (
        <main id="faq" className="h-screen w-full border-white border">
            <h1 className='py-4 text-center'>Frequently Asked Questions</h1>
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
