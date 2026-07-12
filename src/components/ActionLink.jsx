import { Link } from 'react-router-dom';

const ActionLink = ({
    to,
    href,
    download,
    onClick,
    children,
    icon,
    iconPosition = 'right',
    className = ''
}) => {
    const baseClass = `bg-transparent border-none cursor-pointer text-sm tracking-[0.08em] text-(--color-text) hover:text-(--color-link-hover) inline-flex items-center gap-1.5 transition-opacity duration-200 w-fit ${className}`;

    const content = (
        <>
            {iconPosition === 'left' && icon && (
                <span className="text-base leading-none relative -top-px flex items-center">{icon}</span>
            )}
            <span>{children}</span>
            {iconPosition === 'right' && icon && (
                <span className="text-base leading-none relative -top-px flex items-center">{icon}</span>
            )}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={baseClass} onClick={onClick}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} download={download} className={baseClass} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <button className={baseClass} onClick={onClick}>
            {content}
        </button>
    );
};

export default ActionLink;
