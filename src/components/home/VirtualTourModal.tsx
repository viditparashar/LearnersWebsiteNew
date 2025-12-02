'use client';

import React from 'react';
import { X } from 'lucide-react';
import styles from './VirtualTourModal.module.scss';
import { useEnquiry } from '@/context/EnquiryContext';

interface VirtualTourModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const VirtualTourModal = ({ isOpen, onClose }: VirtualTourModalProps) => {
    const { openEnquiry } = useEnquiry();

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className={styles.videoWrapper}>
                    <video
                        controls
                        autoPlay
                        className={styles.video}
                        src="/images/Virtual Tour.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={styles.footer}>
                    <p className={styles.text}>Want to see more?</p>
                    <button
                        className={styles.enquireBtn}
                        onClick={() => {
                            onClose();
                            openEnquiry();
                        }}
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    );
};
