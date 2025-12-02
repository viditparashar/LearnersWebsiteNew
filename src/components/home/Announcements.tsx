'use client';

import React from 'react';
import { Calendar } from 'lucide-react';
import styles from './Announcements.module.scss';

export const Announcements = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Upcoming Events</span>
                    <h2 className={styles.title}>Latest Announcements</h2>
                </div>

                <div className={styles.card}>
                    <div className={styles.dateBox}>
                        <span className={styles.month}>Dec</span>
                        <span className={styles.day}>22</span>
                        <span className={styles.year}>2025</span>
                    </div>

                    <div className={styles.content}>
                        <h3 className={styles.eventName}>National Maths Day</h3>
                        <div className={styles.eventDate}>
                            <Calendar size={18} />
                            Monday, December 22nd
                        </div>
                        <p className={styles.description}>
                            Honoring the birth anniversary of Indian mathematician Srinivasa Ramanujan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
