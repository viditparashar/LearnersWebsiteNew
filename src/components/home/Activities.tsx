'use client';

import React, { useState } from 'react';
import styles from './Activities.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const activities = [
    {
        id: 'smart-class',
        title: 'Smart Classrooms',
        image: '/images/smart-class.png',
        video: '/images/video.mp4',
        tag: 'Interactive Learning',
        description: 'Experience the future of education with our fully equipped smart classrooms featuring interactive displays and digital learning tools.'
    },
    {
        id: 'stem',
        title: 'STEM Labs',
        image: '/images/stem-lab.png',
        tag: 'Innovation Hub',
        description: 'Our state-of-the-art STEM labs are designed to foster curiosity and hands-on learning with robotics, 3D printing, and more.'
    },
    {
        id: 'library',
        title: 'Library',
        image: '/images/library.png',
        tag: 'Knowledge Center',
        description: 'Access a vast collection of digital and physical resources in our modern library designed for research and quiet study.'
    },
    {
        id: 'sports',
        title: 'Sports Complex',
        image: '/images/ground.jpeg',
        tag: 'Physical Excellence',
        description: 'World-class sporting facilities including basketball courts, football grounds, and indoor sports arenas.'
    },
    {
        id: 'clubs',
        title: 'Clubs and Societies',
        image: '/images/clubs.jpeg',
        tag: 'Co-Curricular',
        description: 'Join a variety of clubs and societies to pursue your passions, from music and dance to debate and coding.'
    }
];

export const Activities = () => {
    const [activeId, setActiveId] = useState(activities[0].id);
    const activeActivity = activities.find(a => a.id === activeId) || activities[0];

    return (
        <section className={styles.activities}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Beyond the Classroom</h2>
                </div>

                <div className={styles.contentWrapper}>
                    {/* Left Side: List */}
                    <div className={styles.list}>
                        {activities.map((activity) => (
                            <button
                                key={activity.id}
                                className={`${styles.listItem} ${activeId === activity.id ? styles.active : ''}`}
                                onClick={() => setActiveId(activity.id)}
                            >
                                {activity.title}
                            </button>
                        ))}

                        {/* Enquire Button as a list item style or separate button below list */}
                        <Link href="/connect" className={styles.enquireButton}>
                            Enquire Now <span>→</span>
                        </Link>
                    </div>

                    {/* Right Side: Display Area */}
                    <Link href="/life#gallery" className={styles.displayArea}>
                        <div className={styles.mediaWrapper}>
                            {activeActivity.video ? (
                                <video
                                    src={activeActivity.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={styles.activityVideo}
                                />
                            ) : (
                                <Image
                                    src={activeActivity.image}
                                    alt={activeActivity.title}
                                    fill
                                    className={styles.activityImage}
                                    style={{ objectFit: 'cover' }}
                                />
                            )}
                            <div className={styles.overlay}></div>
                        </div>

                        <div className={styles.content}>
                            <span className={styles.tag}>{activeActivity.tag}</span>
                            <p className={styles.description}>{activeActivity.description}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
