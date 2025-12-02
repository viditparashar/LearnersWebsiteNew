import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InfrastructureTabs } from '@/components/life/InfrastructureTabs';
import styles from '../page.module.scss'; // Reusing main page styles for basic layout

export default function MandatoryDisclosure() {
    return (
        <main className={styles.main}>
            <Header />
            <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '60vh' }} className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Mandatory Disclosure</h1>

                <InfrastructureTabs />
            </div>
            <Footer />
        </main>
    );
}
