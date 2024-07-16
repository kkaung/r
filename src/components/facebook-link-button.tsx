import React from 'react';
import { Button } from './ui/button';

interface FacebookLinkButtonProps {
    pageId: string;
    buttonText: string;
}

const FacebookLinkButton: React.FC<FacebookLinkButtonProps> = ({
    pageId,
    buttonText,
}) => {
    const handleClick = () => {
        const mobileUrl = `fb://page/${pageId}`;
        const webUrl = `https://www.facebook.com/${pageId}`;

        const isIOS = //@ts-ignore
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (isIOS) {
            setTimeout(() => {
                window.location.href = webUrl;
            }, 25);
            window.location.href = mobileUrl;
        } else {
            window.location.href = mobileUrl;
            setTimeout(() => {
                if (document.hidden) {
                    return;
                }
                window.location.href = webUrl;
            }, 1000);
        }
    };

    return (
        <Button
            className="rounded-full inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={handleClick}
        >
            {buttonText}
        </Button>
    );
};

export default FacebookLinkButton;
