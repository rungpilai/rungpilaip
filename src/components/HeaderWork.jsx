const HeaderWork = ({ title, category, role, duration }) => {
    return (
        <header>
            <h1 className="text-3xl sm:text-4xl font-normal leading-[1.2] mb-3">
                {title}
            </h1>
            <p className="text-(--color-text-secondary) mb-7 tracking-[0.01em]">
                {category}
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-b border-(--color-border) py-6 mb-12">
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm tracking-widest text-(--color-text-secondary) uppercase">
                        ROLE
                    </span>
                    <span className="text-(--color-text-primary)">{role}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm tracking-widest text-(--color-text-secondary) uppercase">
                        DURATION
                    </span>
                    <span className="text-(--color-text-primary)">{duration}</span>
                </div>
            </div>
        </header>
    );
};

export default HeaderWork;
