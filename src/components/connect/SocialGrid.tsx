'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import styles from './SocialGrid.module.scss';

const socials = [
    { id: 'fb', name: 'Follow us on Facebook', icon: <Facebook size={28} />, class: 'facebook', url: '#' },
    { id: 'ig', name: 'Follow us on Instagram', icon: <Instagram size={28} />, class: 'instagram', url: '#' },
    { id: 'tw', name: 'Follow us on Twitter', icon: <Twitter size={28} />, class: 'twitter', url: '#' },
    { id: 'li', name: 'Connect on LinkedIn', icon: <Linkedin size={28} />, class: 'linkedin', url: '#' },
];

export const SocialGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {socials.map((social) => (
                        <a key={social.id} href={social.url} className={styles.card}>
                            <div className={`${styles.iconCircle} ${styles[social.class]}`}>
                                {social.icon}
                            </div>
                            <span className={styles.text}>{social.name}</span>
                            <span className={styles.link}>Visit Page <ArrowRight size={16} /></span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
