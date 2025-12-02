import React from 'react';
import styles from './StreamOverview.module.scss';
import { Card, CardContent } from '@/components/ui/Card';
import { BookOpen, GraduationCap, Users, Star, Trophy, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const streams = [
    {
        title: 'Foundational Stage',
        description: 'Pre-KG – Class 2: Play-based learning and skill development.',
        icon: <Star size={32} />,
        color: 'blue',
        link: '#foundational'
    },
    {
        title: 'Preparatory Stage',
        description: 'Class 3 – 5: Building strong foundations in literacy and numeracy.',
        icon: <BookOpen size={32} />,
        color: 'green',
        link: '#preparatory'
    },
    {
        title: 'Middle Stage',
        description: 'Class 6 – 8: Encouraging curiosity and critical thinking.',
        icon: <Users size={32} />,
        color: 'yellow',
        link: '#middle'
    },
    {
        title: 'Secondary Stage',
        description: 'Class 9 – 12: Academic rigor and holistic development.',
        icon: <Trophy size={32} />,
        color: 'red',
        link: '#secondary'
    }
];

export const StreamOverview = () => {
    return (
        <section className={styles.streams}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {streams.map((stream, index) => (
                        <Card key={index} className={styles.card}>
                            <CardContent className={styles.content}>
                                <div className={`${styles.iconWrapper} ${styles[stream.color]}`}>
                                    {stream.icon}
                                </div>
                                <h3 className={styles.title}>{stream.title}</h3>
                                <p className={styles.description}>{stream.description}</p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className={styles.button}
                                    href={stream.link}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className={styles.nepBanner}>
                    <div className={styles.nepContent}>
                        <div className={styles.nepIcon}>
                            <BadgeCheck size={48} />
                        </div>
                        <div className={styles.nepText}>
                            <h3>Accreditation & Standards</h3>
                            <p>
                                We strictly adhere to the <strong>National Education Policy (NEP) 2020</strong> guidelines and are proudly <strong>CBSE Affiliated</strong>, ensuring a world-class education for your child.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
