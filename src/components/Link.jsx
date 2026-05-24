import { Link as RouterLink } from 'react-router-dom';

const Link = ({ to, href, variant = 'default', children, className = '', ...rest }) => {
    const cls = `rp-link rp-link--${variant} ${className}`.trim();

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
                {children}
                {variant === 'arrow' && <span className="rp-link__arrow">›</span>}
            </a>
        );
    }

    return (
        <RouterLink to={to} className={cls} {...rest}>
            {children}
            {variant === 'arrow' && <span className="rp-link__arrow">›</span>}
        </RouterLink>
    );
};

export default Link;
