const PageTitle = ({ children, className = '' }) => {
    return (
        <h1 className={`font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.15] ${className}`}>
            {children}
        </h1>
    );
};

export default PageTitle;
