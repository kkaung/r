'use client';

import FacebookLinkButton from '@/components/facebook-link-button';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

export default function Hero() {
    const searchParams = useSearchParams();

    const url = searchParams.get('url');

    if (!url) return <div>Hello</div>;

    return (
        <Suspense>
            <FacebookLinkButton
                pageId="100085242631772"
                buttonText="Su Yu Mal"
            />
        </Suspense>
    );
}
