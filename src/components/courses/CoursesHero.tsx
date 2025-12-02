import React from 'react';
import styles from './CoursesHero.module.scss';
import Image from 'next/image';

export const CoursesHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/streams/schoolimage.png"
                    alt="Courses Hero"
                    fill
                    className={styles.bgImage}
                    priority
                />
                <div className={styles.overlay} />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Explore Our Curriculum</h1>
                <p className={styles.subtitle}>A structured learning journey from Pre-Primary to High School.</p>
            </div>
        </section>
    );
};
