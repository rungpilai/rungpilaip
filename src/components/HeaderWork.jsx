const HeaderWork = ({ title, category, role, duration }) => {
    return (
        <header>
            <h1 className="font-serif text-[32px] sm:text-[40px] font-normal leading-[1.2] text-(--color-text) mb-3">
                {title}
            </h1>
            <p className="text-muted mb-7 tracking-[0.01em]">
                {category}
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-b border-(--color-border) py-6 mb-12">
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm tracking-widest text-muted uppercase">
                        ROLE
                    </span>
                    <span className="text-(--color-text)">{role}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm tracking-widest text-muted uppercase">
                        DURATION
                    </span>
                    <span className="text-(--color-text)">{duration}</span>
                </div>
            </div>
        </header>
    );
};

export default HeaderWork;
