import React from 'react';
import Image from 'next/image';
import styles from './Mentors.module.scss';
import { Button } from '../ui/Button';

const mentors = [
    {
        name: 'Shree Shankar Guruji',
        role: 'Spiritual Leader',
        image: '/images/leaders/ShankarGuruji.jpg',
        videoTitle: 'Shree Shankar Guruji'
    },
    {
        name: 'Mr. Narayan Murthy',
        role: 'Founder Infosys',
        image: '/images/leaders/NarayanMurthy.jpg',
        videoTitle: 'Narayan Murthy'
    },
    {
        name: 'Mr. Mohandas Pai',
        role: 'Chairman Aarin Capital',
        image: '/images/leaders/MohandasPai.jpg',
        videoTitle: 'Mohandas Pai'
    },
    {
        name: 'Mr. K. Dinesh',
        role: 'Co-founder Infosys',
        image: '/images/leaders/KDinesh.jpg',
        videoTitle: 'K. Dinesh'
    }
];

export const Mentors = () => {
    return (
        <section className={styles.mentors}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Interaction with Leaders</h2>
                    <Button href="/mentors" variant="primary" size="sm">View All Leaders</Button>
                </div>

                <div className={styles.grid}>
                    {mentors.map((mentor, index) => (
                        <div key={index} className={styles.mentorWrapper}>
                            <div className={styles.imageCircle}>
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    fill
                                    className={styles.mentorImage}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{mentor.name}</h3>
                                <p className={styles.role}>{mentor.role}</p>
                            </div>
                            <div className={styles.videoThumbnail}>
                                {/* Placeholder for video thumbnail */}
                                <div className={styles.playButton}>▶</div>
                                <span className={styles.videoLabel}>{mentor.videoTitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
