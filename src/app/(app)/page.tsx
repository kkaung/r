'use client';

import FacebookLinkButton from '@/components/facebook-link-button';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface PageProps {}

export default function Home() {
    const searchParams = useSearchParams();

    const url = searchParams.get('url');

    if (!url) return <div>Hello</div>;

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <FacebookLinkButton pageId="100085242631772" buttonText="Su Yu Mal" />
        </div>
    );
}
