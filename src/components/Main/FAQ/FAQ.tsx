
import React, { useState } from 'react';
import styles from './FAQ.module.css';
import faqData from './data/faqData.json'; 
import BtnUp from '../../BtnUp/BtnUp';
import BtnDown from '../../BtnDown/BtnDown';

// Определяем интерфейс для данных вопросов и ответов
interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Функция для переключения раскрытия ответа
    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
                {faqData.map((item: FAQItem, index: number) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.question} onClick={() => toggleAnswer(index)}>
                            <span>{item.question}</span>
                            {activeIndex === index ? <BtnUp /> : <BtnDown />}
                        </div>
                        {activeIndex === index && (
                            <div className={styles.answer}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default FAQ;
