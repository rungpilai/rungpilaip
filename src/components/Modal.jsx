import { useEffect } from "react";
import { useState } from "react";
import ActionLink from "./ActionLink";

const Modal = ({ isOpen, onClose, children }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handle = () => {
            setIsMounted(true);
        };
        handle();
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
        setIsClosing(false);
        onClose();
        }, 500);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div
        className={`fixed inset-0 z-20 flex items-center justify-center backdrop-blur-sm transition-all duration-500 bg-white ${
            isMounted && !isClosing
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        >
            <div className="relative z-30 w-full max-h-screen overflow-scroll">
                <div className="mt-16 container-about flex flex-row justify-between">
                    <ActionLink
                        onClick={handleClose}
                        icon={
                            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L2 6L7 11" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        }
                        iconPosition="left"
                        className="!hidden md:!inline-flex">
                        BACK
                    </ActionLink>
                    <button
                        onClick={handleClose}
                        className={`fixed top-4 right-4 z-40 ${
                                "inline-flex md:hidden items-center justify-center"
                            } ${
                                "rounded-full size-12 border transition-colors"
                            } ${
                                "text-(--color-text-tertiary) bg-white border-(--color-border)"
                            } ${
                                "hover:text-white hover:bg-(--color-text-tertiary) hover:border-none"
                            }`
                        }
                    >
                        <span className="text-lg! font-semibold leading-none relative -top-px flex items-center">✕</span>
                    </button>
                </div>
                {children}
                <div className="mb-16 container-about">
                    <ActionLink
                        onClick={handleClose}
                        icon={
                            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L2 6L7 11" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        }
                        iconPosition="left"
                        className="!hidden md:!inline-flex">
                        BACK
                    </ActionLink>
                </div>
            </div>
        </div>
    );
};

export default Modal;
