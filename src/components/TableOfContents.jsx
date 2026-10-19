import { useEffect, useRef, useState } from 'react';

const WORDS_PER_MINUTE = 200;
const SECONDS_PER_IMAGE = 12;

const getScrollParent = (node) => {
    let el = node?.parentElement;
    while (el && el !== document.body) {
        const { overflowY } = getComputedStyle(el);
        if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight) return el;
        el = el.parentElement;
    }
    return window;
};

// Sticky "On this page" list with reading time and time left.
// `articleRef` is the element that holds the case study content;
// `sections` is a list of { id, label } matching ids on the page.
const TableOfContents = ({ articleRef, sections }) => {
    const [active, setActive] = useState(sections[0]?.id);
    const [progress, setProgress] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);
    const scrollerRef = useRef(null);

    useEffect(() => {
        const article = articleRef.current;
        if (!article) return;

        const words = article.innerText.split(/\s+/).filter(Boolean).length;
        const images = article.querySelectorAll('img').length;
        setTotalMinutes(Math.max(1, Math.round(words / WORDS_PER_MINUTE + (images * SECONDS_PER_IMAGE) / 60)));

        const scroller = getScrollParent(article);
        scrollerRef.current = scroller;

        const onScroll = () => {
            const viewTop = scroller === window ? 0 : scroller.getBoundingClientRect().top;
            const viewHeight = scroller === window ? window.innerHeight : scroller.clientHeight;
            const rect = article.getBoundingClientRect();
            const read = viewTop + viewHeight * 0.35 - rect.top;
            const atBottom = scroller === window
                ? window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
                : scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2;
            setProgress(atBottom ? 1 : Math.min(1, Math.max(0, read / rect.height)));

            let current = sections[0]?.id;
            for (const { id } of sections) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top - viewTop < viewHeight * 0.35) current = id;
            }
            setActive(current);
        };

        onScroll();
        scroller.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            scroller.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [articleRef, sections]);

    const minutesLeft = Math.ceil(totalMinutes * (1 - progress));

    const goTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav aria-label="On this page" className="flex flex-col gap-5 w-[150px]">
            <p className="text-sm text-(--color-text-tertiary)">{totalMinutes} min read</p>

            <div className="flex flex-col gap-3">
                <p className="text-sm uppercase text-(--color-text-subtitle)">On this page</p>
                <ul className="flex flex-col">
                    {sections.map(({ id, label }) => {
                        const isActive = id === active;
                        return (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={(e) => goTo(e, id)}
                                    aria-current={isActive ? 'location' : undefined}
                                    className={`block py-1.5 pl-3 text-sm transition-colors ${
                                        isActive
                                            ? 'border-l-2 border-(--color-text-primary) font-semibold text-(--color-text-primary)'
                                            : 'border-l border-(--color-border) text-(--color-text-tertiary) hover:text-(--color-text-primary)'
                                    }`}
                                >
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <div className="h-1 w-full rounded-sm bg-(--color-border) overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)} aria-label="Reading progress">
                    <div className="h-full bg-(--color-text-primary) transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
                </div>
                <p className="text-sm text-(--color-text-tertiary)">
                    {progress >= 0.98 ? 'Done reading' : `${minutesLeft} min left`}
                </p>
            </div>
        </nav>
    );
};

export default TableOfContents;
