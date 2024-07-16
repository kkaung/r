import { type PropsWithChildren } from 'react';
import Script from 'next/script';

export default async function Layout({ children }: PropsWithChildren) {
    return (
        <div className="relative h-full flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
        </div>
    );
}
