const PageTitle = ({ children, className = '' }) => {
    return (
        <h1 className={`font-serif text-[clamp(2.5rem,6vw,3.5rem)] font-normal leading-[1.15] ${className}`}>
            {children}
        </h1>
    );
};

export default PageTitle;
