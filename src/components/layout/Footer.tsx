import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.scss';
import { Button } from '../ui/Button';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: About */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Learners Global School</h3>
                        <p className={styles.text}>
                            Shaping future leaders through holistic education, innovation, and values.
                            Join us in our journey of excellence.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/courses-admissions">Admissions</Link></li>
                            <li><Link href="/life">Life at Learners</Link></li>
                            <li><Link href="/connect">Careers</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin size={18} />
                                <span>Sathagalli, Mysore, Karnataka 570029</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li>
                                <Mail size={18} />
                                <span>admissions@lgs.edu.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className={styles.column}>
                        <h4 className={styles.subheading}>Newsletter</h4>
                        <p className={styles.text}>Subscribe to get the latest news and updates.</p>
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className={styles.input}
                                required
                            />
                            <Button type="submit" variant="primary" size="sm">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Learners Global School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
