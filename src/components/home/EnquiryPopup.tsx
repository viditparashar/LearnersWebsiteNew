'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './EnquiryPopup.module.scss';
import { useEnquiry } from '@/context/EnquiryContext';

export const EnquiryPopup = () => {
    const { isOpen, closeEnquiry, openEnquiry } = useEnquiry();

    useEffect(() => {
        // Show popup after a short delay, but only if not seen before
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenEnquiryPopup');
            if (!hasSeenPopup) {
                openEnquiry();
                sessionStorage.setItem('hasSeenEnquiryPopup', 'true');
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [openEnquiry]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your interest! We will contact you shortly.');
        closeEnquiry();
    };

    if (!isOpen) return null;

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={closeEnquiry} aria-label="Close popup">
                    <X size={20} />
                </button>

                <div className={styles.formSection}>
                    <h2 className={styles.title}>Admissions Open</h2>
                    <p className={styles.subtitle}>Join the league of future leaders.</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Student Name"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="tel"
                                placeholder="Parent's Mobile Number"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={styles.input}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <select className={styles.input} required defaultValue="">
                                <option value="" disabled>Select Grade</option>
                                <option value="pre-kg">Pre-KG</option>
                                <option value="lkg">LKG</option>
                                <option value="ukg">UKG</option>
                                <option value="1-5">Class 1-5</option>
                                <option value="6-8">Class 6-8</option>
                                <option value="9-10">Class 9-10</option>
                                <option value="11-12">Class 11-12</option>
                            </select>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Enquire Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
