const Tag = ({ children, className = '' }) => {
    return (
        <span className={`text-sm text-(--color-card-meta) border border-(--color-border) rounded-full px-3 py-0.5 whitespace-nowrap ${className}`}>
            {children}
        </span>
    );
};

export default Tag;
