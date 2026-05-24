import { useNavigate } from 'react-router-dom';

const CardWork = ({ year, tags = [], title, description, thumbnail, slug }) => {
    const navigate = useNavigate();

    return (
        <article
            className="cursor-pointer group transition-opacity duration-250 hover:opacity-60 outline-none"
            onClick={() => navigate(slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate(slug)}
        >
            <div className="w-full aspect-4/3 overflow-hidden rounded-xl bg-[#f5f5f5]">
                <img
                    src={thumbnail}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-103"
                />
            </div>

            <div className="mt-3 flex flex-col gap-1.5">
                <span className="text-sm text-(--color-card-meta)">{year}</span>
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-sm text-(--color-card-meta) border border-(--color-border) rounded-full px-3 py-0.5 whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <h3 className="font-sans text-[20px] font-normal leading-[1.35] mt-2 text-(--color-card-title)">
                {title}
            </h3>

            {description && (
                <p className="text-(--color-card-desc) mt-1.5 leading-normal">
                    {description}
                </p>
            )}
        </article>
    );
};

export default CardWork;
