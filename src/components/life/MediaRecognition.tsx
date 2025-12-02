'use client';

import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';
import styles from './MediaRecognition.module.scss';

const recognitions = [
    {
        id: 1,
        icon: <Award size={32} />,
        title: 'Best Innovation in Education 2023',
        subtitle: 'Education World India School Rankings'
    },
    {
        id: 2,
        icon: <Trophy size={32} />,
        title: 'Top 10 International Schools',
        subtitle: 'Times Education Icons Karnataka'
    },
    {
        id: 3,
        icon: <Medal size={32} />,
        title: 'Excellence in Sports Infrastructure',
        subtitle: 'National School Awards 2024'
    }
];

export const MediaRecognition = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Media Recognition</h2>
                </div>

                <div className={styles.grid}>
                    {recognitions.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.subtitle}>{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
