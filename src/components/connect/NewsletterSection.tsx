'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import styles from './NewsletterSection.module.scss';

export const NewsletterSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <Mail size={40} />
                </div>
                <h2 className={styles.title}>Stay Connected</h2>
                <p className={styles.subtitle}>
                    Subscribe to our newsletter to receive updates on admissions, events, and school achievements directly in your inbox.
                </p>

                <form className={styles.form}>
                    <input type="email" placeholder="Enter your email address" className={styles.input} />
                    <button type="button" className={styles.button}>Subscribe</button>
                </form>

                <p className={styles.footnote}>
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};
