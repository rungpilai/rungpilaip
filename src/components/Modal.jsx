import { useEffect } from "react";
import { useState } from "react";
import ActionLink from "./ActionLink";

const Modal = ({ isOpen, onClose, children }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setIsMounted(true);
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
                <div className="mt-16 container max-w-5xl mx-auto flex flex-row justify-between">
                    <ActionLink onClick={handleClose} icon="‹" iconPosition="left" className="text-gray-500 !hidden md:!inline-flex">
                        BACK
                    </ActionLink>
                    <button
                    onClick={handleClose}
                    className="ml-auto inline-flex md:hidden rounded-full size-8 items-center justify-center border border-[#E9EAEC]  text-[#666870] hover:text-white hover:bg-[#666870] transition-colors"
                    >
                    ✕
                    </button>
                </div>
                {children}
                <div className="mb-16 container max-w-5xl mx-auto">
                    <ActionLink onClick={handleClose} icon="‹" iconPosition="left">BACK</ActionLink>
                </div>
            </div>
        </div>
    );
};

export default Modal;
