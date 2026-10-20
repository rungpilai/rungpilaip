import { Link } from 'react-router-dom';
import { WORKS } from '../utils/works';

const BackIcon = () => (
    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M7 1L2 6L7 11" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const NextIcon = () => (
    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M2 1L7 6L2 11" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Footer for case studies: back to the works list, and a link to the next project.
// Pass onBack/onNext when shown inside the modal; otherwise it uses page links.
const ProjectNav = ({ currentSlug, onBack, onNext }) => {
    const index = WORKS.findIndex((w) => w.slug === currentSlug);
    if (index === -1) return null;
    const next = WORKS[(index + 1) % WORKS.length];

    const backClass = 'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-(--color-border) text-sm tracking-[0.08em] uppercase text-(--color-text-subtitle) hover:text-white hover:bg-(--color-primary) hover:border-transparent active:bg-(--color-primary-active) transition-colors duration-200 cursor-pointer';
    const nextClass = 'group flex flex-col items-end gap-1.5 text-right max-w-[420px] cursor-pointer';

    const backContent = <><BackIcon /><span>Back</span></>;
    const nextContent = (
        <>
            <span className="inline-flex items-center gap-1.5 text-sm tracking-[0.08em] uppercase text-(--color-text-subtitle) group-hover:text-(--color-primary) transition-colors duration-200">
                Next project <NextIcon />
            </span>
            <span className="text-base leading-[1.4] text-(--color-text-primary) group-hover:text-(--color-primary) transition-colors duration-200">
                {next.title}
            </span>
        </>
    );

    return (
        <nav className="container-work mt-4 mb-16" aria-label="Project navigation">
            <div className="pt-8 border-t border-(--color-border) flex flex-row justify-between items-start gap-6">
            {onBack
                ? <button type="button" onClick={onBack} className={backClass}>{backContent}</button>
                : <Link to="/" className={backClass}>{backContent}</Link>}
            {onNext
                ? <button type="button" onClick={() => onNext(next.slug)} className={nextClass}>{nextContent}</button>
                : <Link to={next.slug} className={nextClass}>{nextContent}</Link>}
            </div>
        </nav>
    );
};

export default ProjectNav;
