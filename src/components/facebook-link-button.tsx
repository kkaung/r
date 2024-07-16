import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface FacebookLinkButtonProps {
    pageId: string;
    buttonText: string;
}

const FacebookLinkButton: React.FC<FacebookLinkButtonProps> = ({
    pageId,
    buttonText,
}) => {
    const [isAndroid, setIsAndroid] = useState(false);
    const [isTikTokBrowser, setIsTikTokBrowser] = useState(false);

    useEffect(() => {
        setIsAndroid(/Android/i.test(navigator.userAgent));
    }, []);

    useEffect(() => {
        setIsTikTokBrowser(
            /TikTok/i.test(navigator.userAgent) ||
                /Musical_ly/i.test(navigator.userAgent)
        );
    }, []);

    const handleClick = () => {
        const mobileUrl = `fb://page/${pageId}`;
        const webUrl = `https://www.facebook.com/${pageId}`;
        const intentUrl = `intent://page/${pageId}#Intent;package=com.facebook.katana;scheme=fb;end`;

        const isIOS = //@ts-ignore
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (isTikTokBrowser) {
            window.open(webUrl, '_blank');
        } else if (isIOS) {
            setTimeout(() => {
                window.location.href = webUrl;
            }, 25);
            window.location.href = mobileUrl;
        } else if (isAndroid) {
            window.location.href = intentUrl;

            setTimeout(() => {
                window.location.href = webUrl;
            }, 2000);
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
