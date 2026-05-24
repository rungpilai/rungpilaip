const Footer = () => {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText('rungpilai.p@gmail.com');
    };

    return (
        <footer className="mt-16 border-t border-(--color-border) pt-20 pb-4">
            <div className="flex flex-col items-center gap-4 text-center">

                <img src="/img/logo-navbar-footer.svg" alt="Rungpilai" width={83} height={45} className="mb-2" />

                <div className="flex items-center gap-1.5 text-base text-[#666870]!">
                    <span>rungpilai.p@gmail.com</span>
                    <button
                        onClick={handleCopyEmail}
                        className="flex items-center p-0 border-none bg-transparent cursor-pointer text-(--color-card-meta) transition-colors duration-200 hover:text-(--color-text)"
                        title="Copy email"
                        aria-label="Copy email"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    </button>
                </div>

                <nav className="flex items-center gap-6 mt-3">
                    {[
                        { label: 'LinkedIn', href: 'https://linkedin.com/in/rungpilaip' },
                        { label: 'Instagram', href: 'https://instagram.com/x01experiment.project/' },
                        { label: 'Behance', href: 'https://behance.net/rungpilaip' },
                    ].map(({ label, href }, index, array) => [
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#666870]! transition-opacity duration-200 hover:opacity-50"
                        >
                            {label}
                        </a>,
                        index !== array.length - 1 && (
                            <span key={`${label}-sep`} className="text-[#666870]! opacity-30">|</span>
                        )
                    ])}
                </nav>

                <p className="text-sm text-[#838590]! mt-7">
                    © Rungpilai Patpai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
