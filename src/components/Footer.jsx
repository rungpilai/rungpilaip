import CopyEmailButton from './CopyEmailButton';

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-(--color-border) pt-20 pb-4">
            <div className="flex flex-col items-center gap-4 text-center">

                <img src="/img/logo-navbar-footer.svg" alt="Rungpilai" width={83} height={45} className="mb-2" />

                <div className="flex items-center gap-1.5 text-base text-card-meta">
                    <span>rungpilai.p@gmail.com</span>
                    <CopyEmailButton className="text-card-meta hover:text-(--color-link-hover)" />
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
                            className="text-sm text-card-meta transition-opacity duration-200 hover:text-(--color-link-hover)"
                        >
                            {label}
                        </a>,
                        index !== array.length - 1 && (
                            <span key={`${label}-sep`} className="text-card-meta opacity-30">|</span>
                        )
                    ])}
                </nav>

                <p className="text-sm text-muted mt-7">
                    © Rungpilai Patpai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
