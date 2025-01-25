'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQItemProp {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProp> = ({ question, answer }) => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="group hover:cursor-pointer"
        >
            <div
                className="bg-background group-hover:border-highlight flex w-full justify-between items-center py-4 px-6 text-left border-2 border-white
                transition-all duration-700 ease-in-out"
            >
                <h2 className="text-white group-hover:translate-x-2 transition-all duration-700 ease-in-out">
                    {question}
                </h2>
                <ChevronDown
                    className="h-5 w-5 text-white group-hover:text-highlight transition-all duration-700 ease-in-out
                    group-hover:rotate-180"
                />
            </div>
            <div 
                className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out bg-highlight rounded-b-xl"
            >
                <div className="overflow-hidden">
                    <div className="px-10 py-4">
                        <p className="text-foreground">{answer}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FAQItem;