import { EMAIL_ADDRESS } from '../utils/email';
import CopyEmailButton from './CopyEmailButton';

const Footer = () => {
    return (
        <footer className="border-t border-(--color-border) pt-20 pb-4">
            <div className="flex flex-col items-center gap-4 text-center">

                <img src="/img/logo-navbar-footer.svg" alt="Rungpilai" width={83} height={45} className="mb-2" />

                <div className="flex items-center gap-1.5 text-base text-(--color-text-subtitle)">
                    <span>{EMAIL_ADDRESS}</span>
                    <CopyEmailButton />
                </div>

                <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-3">
                    {[
                        { label: 'LinkedIn', href: 'https://linkedin.com/in/rungpilaip' },
                        { label: 'Github', href: 'https://github.com/rungpilai' },
                        { label: 'Instagram', href: 'https://instagram.com/x01experiment.project/' },
                    ].map(({ label, href }, index, array) => [
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-(--color-text-subtitle) transition-colors duration-200 hover:text-(--color-primary)"
                        >
                            {label}
                        </a>,
                        index !== array.length - 1 && (
                            <span key={`${label}-sep`} className="text-(--color-text-subtitle) opacity-30">|</span>
                        )
                    ])}
                </nav>

                <p className="text-sm text-(--color-text-subtitle) mt-7">
                    © Rungpilai Patpai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
