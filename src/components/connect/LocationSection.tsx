'use client';

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import styles from './LocationSection.module.scss';

export const LocationSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left: Map */}
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.688636976786!2d77.3698663150821!3d28.61161398242605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce561e1e0c711%3A0x6d3d8e5d3e5e5e5e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Right: Location Card */}
                <div className={styles.locationCard}>
                    <div className={styles.pinIcon}>
                        <MapPin size={28} />
                    </div>
                    <h2 className={styles.title}>Visit Our Campus</h2>
                    <div className={styles.addressBlock}>
                        <p>Learner Global School</p>
                        <p>CA Site #1, Hanchya Main Rd</p>
                        <p>Sathgalli, Mysuru, Karnataka 570029</p>
                    </div>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.directionsLink}>
                        Get Directions <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};
