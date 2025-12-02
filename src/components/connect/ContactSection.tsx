'use client';

import React from 'react';
import { Phone, Mail, ArrowRight, Download, Send } from 'lucide-react';
import styles from './ContactSection.module.scss';

export const ContactSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Form */}
                <div className={styles.formColumn}>
                    <div className={styles.formHeader}>
                        <h2 className={styles.formTitle}>Send us a Message</h2>
                        <p className={styles.formDesc}>
                            Fill out the form below and our admissions team will get back to you within 24 hours.
                        </p>
                    </div>

                    <form className={styles.formGrid}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" placeholder="John Doe" className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input type="email" placeholder="john@example.com" className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Phone Number</label>
                            <input type="tel" placeholder="+91 98765 43210" className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Child's Name (Optional)</label>
                            <input type="text" placeholder="Child's Name" className={styles.input} />
                        </div>

                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Select Grade Interested In</label>
                            <select className={styles.select}>
                                <option value="">Select Grade</option>
                                <option value="nursery">Nursery</option>
                                <option value="primary">Primary (1-5)</option>
                                <option value="middle">Middle (6-8)</option>
                                <option value="secondary">Secondary (9-10)</option>
                                <option value="senior">Senior Secondary (11-12)</option>
                            </select>
                        </div>

                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Your Message / Enquiry</label>
                            <textarea placeholder="How can we help you?" className={styles.textarea}></textarea>
                        </div>

                        <div className={styles.fullWidth}>
                            <button type="button" className={styles.submitBtn}>
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Info Cards */}
                <div className={styles.infoColumn}>
                    {/* Contact Info */}
                    <div className={styles.infoCard}>
                        <div className={styles.contactBlock}>
                            <div className={styles.iconCircle}>
                                <Phone size={24} />
                            </div>
                            <div className={styles.blockContent}>
                                <h4>Call Us</h4>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className={styles.contactBlock}>
                            <div className={styles.iconCircle}>
                                <Mail size={24} />
                            </div>
                            <div className={styles.blockContent}>
                                <h4>Email Us</h4>
                                <p>admissions@lgs.edu.in</p>
                            </div>
                        </div>
                    </div>

                    {/* Join Team */}
                    <div className={styles.joinCard}>
                        <h3>Join Our Team</h3>
                        <p>We are always looking for passionate educators to join our family.</p>
                        <a href="#" className={styles.applyBtn}>Apply Now <ArrowRight size={18} /></a>
                    </div>

                    {/* Brochure */}
                    <div className={styles.brochureCard}>
                        <div className={styles.brochureInfo}>
                            <div className={styles.downloadIcon}>
                                <Download size={20} />
                            </div>
                            <div className={styles.brochureText}>
                                <h4>School Brochure</h4>
                                <span>PDF Download (4.5 MB)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
