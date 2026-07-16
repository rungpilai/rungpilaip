import { useState } from 'react';
import { EMAIL_ADDRESS } from '../utils/email';
import CopyIcon from './svg/CopyIcon';
import CheckIcon from './svg/CheckIcon';

const CopyEmailButton = ({ email = EMAIL_ADDRESS, className = '' }) => {
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
                <CheckIcon className="text-(--color-primary)" />
            ) : (
                <CopyIcon className="text-(--color-text-tertiary) hover:text-(--color-primary-border)" />
            )}
        </button>
    );
};

export default CopyEmailButton;
