import Tag from "./Tag";

const HeaderWork = ({ title, tags, role, duration }) => {
    return (
        <header>
            <h1 className="text-[28px] sm:text-4xl font-normal leading-[1.2] mb-3">
                {title}
            </h1>
            <div className="mb-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8 border-t border-b border-(--color-border) py-6 mb-12">
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm tracking-widest text-(--color-text-tertiary) uppercase">
                        ROLE
                    </span>
                    <span className="text-(--color-text-primary)">{role}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                    <span className="text-sm tracking-widest text-(--color-text-tertiary) uppercase">
                        DURATION
                    </span>
                    <span className="text-(--color-text-primary)">{duration}</span>
                </div>
            </div>
        </header>
    );
};

export default HeaderWork;
