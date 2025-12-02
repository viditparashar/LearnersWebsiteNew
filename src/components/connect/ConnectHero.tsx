'use client';

import React from 'react';
import { ArrowRight, GraduationCap, Briefcase, Mail } from 'lucide-react';
import styles from './ConnectHero.module.scss';

import Link from 'next/link';
import { useEnquiry } from '@/context/EnquiryContext';

export const ConnectHero = () => {
    const { openEnquiry } = useEnquiry();

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <span className={styles.badge}>We’d love to hear from you</span>
                <h1 className={styles.title}>Connect With Us</h1>
                <p className={styles.subtitle}>
                    Whether you have a question about admissions, careers, or just want to say hello, we’re here to help.
                </p>

                <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <GraduationCap size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Admission Enquiry</h3>
                        <p className={styles.cardDesc}>
                            Interested in joining our LGS family? Get all the details about our admission process and criteria.
                        </p>
                        <button onClick={openEnquiry} className={styles.link} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}>Enquire Now <ArrowRight size={16} /></button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <Briefcase size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Careers</h3>
                        <p className={styles.cardDesc}>
                            Passionate about education? Explore open positions and join our team of dedicated educators.
                        </p>
                        <a href="#" className={styles.link}>View Openings <ArrowRight size={16} /></a>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <Mail size={28} />
                        </div>
                        <h3 className={styles.cardTitle}>Newsletter</h3>
                        <p className={styles.cardDesc}>
                            Stay updated with the latest news, events, and achievements from Learner Global School.
                        </p>
                        <Link href="/newsletter" className={styles.link}>Subscribe <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
