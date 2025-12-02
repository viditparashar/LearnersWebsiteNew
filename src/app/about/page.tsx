import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import styles from './page.module.scss';
import { Card, CardContent } from '@/components/ui/Card';
import { FacultyGrid } from '@/components/about/FacultyGrid';
import { AboutHero } from '@/components/about/AboutHero';
import { FounderNote } from '@/components/about/FounderNote';
import { PrincipalNote } from '@/components/about/PrincipalNote';
import { RecentlySection } from '@/components/about/RecentlySection';

export default function About() {
    return (
        <main id="main-content" className={styles.main}>
            <Header />

            <AboutHero />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <Card className={styles.missionCard}>
                            <CardContent className={styles.cardContent}>
                                <h2 className={styles.sectionTitle}>Our Mission</h2>
                                <p className={styles.text}>
                                    To provide a nurturing environment that fosters intellectual curiosity,
                                    critical thinking, and emotional intelligence, empowering students to become
                                    compassionate global leaders.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className={styles.missionCard}>
                            <CardContent className={styles.cardContent}>
                                <h2 className={styles.sectionTitle}>Our Vision</h2>
                                <p className={styles.text}>
                                    To be a beacon of educational excellence, shaping holistic individuals
                                    who contribute positively to society through innovation and integrity.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <FounderNote />
            <PrincipalNote />

            <section className={styles.faculty}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Faculty</h2>
                    <div className={styles.facultyGrid}>
                        <FacultyGrid />
                    </div>
                </div>
            </section>

            <RecentlySection />

            <Footer />
        </main>
    );
}
