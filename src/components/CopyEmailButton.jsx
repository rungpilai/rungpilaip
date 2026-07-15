import { useState } from 'react';
import { EMAIL_ADDRESS } from '../utils/email';

const CopyEmailButton = ({ email = EMAIL_ADDRESS, className = '', size = 14, strokeWidth = 1.8 }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopyEmail}
            className={`flex items-center p-0 border-none bg-transparent cursor-pointer transition-colors duration-200 ${className}`}
            title="Copy email"
            aria-label="Copy email"
        >
            {copied ? (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            ) : (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className="text-(--color-text-tertiary) hover:text-(--color-primary-border)">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
            )}
        </button>
    );
};

export default CopyEmailButton;
