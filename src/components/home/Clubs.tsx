import React from 'react';
import styles from './Clubs.module.scss';
import { Card, CardContent } from '../ui/Card';

const houses = [
    { name: 'Krishna House', color: 'yellow', description: 'Innovation & Tech' },
    { name: 'Kabini House', color: 'blue', description: 'Arts & Culture' },
    { name: 'Kaveri House', color: 'purple', description: 'Environmental Stewardship' },
    { name: 'Kapila House', color: 'red', description: 'Passion & Leadership' }
];

export const Clubs = () => {
    return (
        <section className={styles.clubs}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Houses</h2>
                    <p className={styles.subtitle}>Fostering team spirit and healthy competition.</p>
                </div>

                <div className={styles.grid}>
                    {houses.map((house, index) => (
                        <div key={index} className={`${styles.houseCard} ${styles[house.color]}`}>
                            <h3 className={styles.houseName}>{house.name}</h3>
                            <p className={styles.houseDesc}>{house.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
