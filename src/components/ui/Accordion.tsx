'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.scss';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    isOpen = false,
    onClick
}) => {
    return (
        <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button
                className={styles.header}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={styles.title}>{title}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div
                className={styles.content}
                style={{ maxHeight: isOpen ? '500px' : '0' }}
            >
                <div className={styles.innerContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: { title: string; content: React.ReactNode }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};
