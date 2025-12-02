'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FacultyGrid.module.scss';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const facultyMembers = [
    { id: 1, name: 'Ms Trupthi G', image: '/images/Ms Trupthi G.jpeg' },
    { id: 2, name: 'Shreedevi YJ', image: '/images/Shreedevi YJ.jpeg' },
    { id: 3, name: 'Ms Tanya KJ', image: '/images/Ms Tanya KJ.jpeg' },
    { id: 4, name: 'Ms. Krupa Nandakumar', image: '/images/Ms. Krupa Nandakumar.jpeg' },
    { id: 5, name: 'Mr MADHU KUMAR', image: '/images/Mr MADHU KUMAR.jpg' },
    { id: 6, name: 'ASHA JYOTHI.S', image: '/images/ASHA JYOTHI.S.jpeg' },
    { id: 7, name: 'Ms AMATUS SALMA MUNAZZA', image: '/images/Ms AMATUS SALMA MUNAZZA.jpg' },
    { id: 8, name: 'Ms. Shilpa.R', image: '/images/Ms. Shilpa.R.jpeg' },
    { id: 9, name: 'Mrs. Leelavathi S ', image: '/images/Mrs. Leelavathi S .jpeg' },
    { id: 10, name: 'Ms Suchithra. T . S', image: '/images/Ms Suchithra. T . S.jpg' },
    { id: 11, name: 'Numera Fathima ', image: '/images/Numera Fathima .jpeg' },
    { id: 12, name: 'Ms Mallika. M', image: '/images/Ms Mallika. M.jpg' },
    { id: 13, name: 'Mizba kouser', image: '/images/Mizba kouser.jpg' },
    { id: 14, name: 'Ms.Pooja.N', image: '/images/Ms.Pooja.N.jpg' },
    { id: 15, name: 'Vyshnavi Rahul', image: '/images/Vyshnavi Rahul.jpg' },
    { id: 16, name: 'MAHADEVA SWAMY M B', image: '/images/MAHADEVA SWAMY M B.jpeg' },
    { id: 17, name: 'Ms Deeparani M R', image: '/images/MsDeeparaniMR.jpeg' },
    { id: 18, name: 'Mrs. Antony Mary Swetha', image: '/images/Mrs. Antony Mary Swetha.jpg' },
    { id: 19, name: 'Maitri Haveri', image: '/images/Maitri Haveri.jpeg' },
    { id: 20, name: 'Mr. Vijayakumar ', image: '/images/Mr. Vijayakumar .jpeg' },
    { id: 21, name: 'Ms. Nethravathi. B. M', image: '/images/Ms. Nethravathi. B. M.jpeg' },
    { id: 22, name: 'Ms. Lavanya A J ', image: '/images/Ms. Lavanya A J .jpeg' },
    { id: 23, name: 'Aishwaryalakshmi P A', image: '/images/Aishwaryalakshmi P A.JPG' },
    { id: 24, name: 'Ms Divyarani G S', image: '/images/Ms Divyarani G S.jpg' },
    { id: 25, name: 'Lakshmi B M ', image: '/images/Lakshmi B M .jpeg' },
];

export const FacultyGrid = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedMembers = showAll ? facultyMembers : facultyMembers.slice(0, 8);

    return (
        <div>
            <div className={styles.grid}>
                {displayedMembers.map((member) => (
                    <Card key={member.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className={styles.facultyImage}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                            />
                        </div>
                        <CardContent className={styles.content}>
                            <h3 className={styles.name}>{member.name}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className={styles.buttonWrapper}>
                <Button
                    variant="outline"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'View All Faculty'}
                </Button>
            </div>
        </div>
    );
};
