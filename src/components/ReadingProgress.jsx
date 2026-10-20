import { useEffect, useState } from 'react';

// Thin bar fixed to the top of the screen that fills as the reader scrolls.
// Pass a ref to a scrolling element (e.g. the modal), or omit it to track the window.
const ReadingProgress = ({ targetRef }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const el = targetRef?.current;
        const source = el || window;

        const update = () => {
            const top = el ? el.scrollTop : window.scrollY;
            const max = el
                ? el.scrollHeight - el.clientHeight
                : document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(1, Math.max(0, top / max)) : 0);
        };

        update();
        source.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            source.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [targetRef]);

    return (
        <div
            className="fixed top-0 inset-x-0 z-50 h-1 bg-primitive-10"
            role="progressbar"
            aria-label="Reading progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
        >
            <div
                className="h-full bg-(--color-primary) origin-left"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
};

export default ReadingProgress;
