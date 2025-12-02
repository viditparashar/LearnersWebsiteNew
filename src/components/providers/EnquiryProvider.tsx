'use client';

import React from 'react';
import { EnquiryProvider as ContextProvider } from '@/context/EnquiryContext';
import { EnquiryPopup } from '@/components/home/EnquiryPopup';

export const EnquiryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ContextProvider>
            {children}
            <EnquiryPopup />
        </ContextProvider>
    );
};
