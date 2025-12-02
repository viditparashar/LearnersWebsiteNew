import React from 'react';
import styles from './Affiliates.module.scss';
import Image from 'next/image';

const affiliates = [
    'AOL', 'ToastMasters', 'NH', 'Bagaria Foundation', 'Educait', 'L&T'
];

export const Affiliates = () => {
    return (
        <section className={styles.affiliates}>
            <div className={styles.container}>
                <h2 className={styles.title}>In Collaboration with</h2>

                <div className={styles.grid}>
                    {affiliates.map((affiliate, index) => (
                        <div key={index} className={styles.logoWrapper}>
                            {/* Placeholder for logos */}
                            <span className={styles.logoText}>{affiliate}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
