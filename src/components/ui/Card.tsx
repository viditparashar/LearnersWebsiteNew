import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = true
}) => {
    return (
        <div className={`${styles.card} ${hoverEffect ? styles.hover : ''} ${className}`}>
            {children}
        </div>
    );
};

export const CardImage: React.FC<{ src?: string; alt?: string; children?: React.ReactNode; className?: string }> = ({
    src,
    alt = '',
    children,
    className = ''
}) => {
    return (
        <div className={`${styles.cardImage} ${className}`}>
            {src ? (
                <img src={src} alt={alt} className={styles.image} />
            ) : (
                children
            )}
        </div>
    );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = ''
}) => {
    return (
        <div className={`${styles.cardContent} ${className}`}>
            {children}
        </div>
    );
};
