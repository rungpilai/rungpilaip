const PageTitle = ({ children, className = '' }) => {
    return (
        <h1 className={`text-5xl sm:text-3xl font-normal leading-[1.15] text-(--color-text-primary) ${className}`}>
            {children}
        </h1>
    );
};

export default PageTitle;
