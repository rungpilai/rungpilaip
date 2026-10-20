const Tag = ({ children, className = '' }) => {
    return (
        <span className={`text-sm text-(--color-text-subtitle) border border-(--color-border) rounded-full px-4 py-2 whitespace-nowrap ${className}`}>
            {children}
        </span>
    );
};

export default Tag;
