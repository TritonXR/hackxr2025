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
    {
        question: 'Does everyone on my team need to apply?',
        answer: 'Yes, admittances are tied to the individual, not the group.',
    },
    {
        question: 'Should I have a team? How many people can be on my team?',
        answer: 'Teaming is not necessary, but we do recommend you do so on our discord. Teams should consist of 1-4 people.',
    },
    {
        question: 'Will this event go overnight?',
        answer: 'No, the space closes at 11pm daily, please arrange living spaces independently.',
    },
    {
        question:
            'Can I submit a prebuilt project/begin building my project before the hack begins?',
        answer: 'No, all projects must be created at the start of the hack. We will be checking github repos/file creation dates.',
    },
];

function FAQ() {
    return (
        <section id="faq" className="w-full p-8">
            <h1 className="py-12 text-center">Frequently Asked Questions</h1>
            <div className="max-w-2xl mx-auto pb-24">
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
        </section>
    );
}

export default FAQ;
