import React from 'react';
import styles from './CurriculumSection.module.scss';
import { Card, CardContent } from '@/components/ui/Card';

interface CurriculumSectionProps {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    points: string[];
    highlight?: string;
}

export const CurriculumSection = ({ id, title, subtitle, description, points, highlight }: CurriculumSectionProps) => {
    return (
        <section id={id} className={styles.section}>
            <div className={styles.container}>
                <Card className={styles.card}>
                    <CardContent className={styles.content}>
                        <div className={styles.textWrapper}>
                            <h2 className={styles.title}>{title}</h2>
                            {subtitle && <div className={styles.subtitleBanner}>{subtitle}</div>}
                            <p className={styles.description}>{description}</p>

                            {highlight && (
                                <div className={styles.highlight}>
                                    <p>{highlight}</p>
                                </div>
                            )}

                            <ul className={styles.points}>
                                {points.map((point, index) => (
                                    <li key={index} className={styles.point}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
