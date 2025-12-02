import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    fullWidth = false,
    ...props
}) => {
    const rootClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

    if (href) {
        return (
            <Link href={href} className={rootClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={rootClassName} {...props}>
            {children}
        </button>
    );
};
