const PageTitle = ({ children, className = '' }) => {
    return (
        <h1 className={`text-3xl sm:text-5xl font-normal leading-[1.15] text-(--color-text-primary) ${className}`}>
            {children}
        </h1>
    );
};

export default PageTitle;
