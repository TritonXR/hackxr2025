'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProp {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProp> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                className={`bg-white rounded-t-xl flex w-full justify-between items-center py-4 px-6 text-left group hover:border-highlight hover:border-4 border-4 border-dim
                    ${!isOpen && 'rounded-b-xl [transition:border-radius_200ms_ease_300ms]'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-black group-hover:text-highlight group-hover:translate-x-2 transition-all duration-200">
                    {question}
                </h2>
                <ChevronDown
                    className={`h-5 w-5 text-background group-hover:text-highlight transition-all duration-200
                    ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 bg-dim rounded-b-xl
                ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-10 py-4">
                    <p className="text-gray-600">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
