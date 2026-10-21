import HeaderWork from '../../components/HeaderWork';

const S = {
    section: 'mb-12 scroll-mt-24',
    label: 'text-(--color-text-subtitle) text-sm tracking-[0.08em] font-sans! uppercase mb-3',
    body: 'text-(--color-text-primary) mb-4',
    caption: 'text-(--color-text-subtitle) text-sm italic mt-2',
    subLabel: 'text-sm font-medium text-(--color-text-primary)',
    small: 'text-sm text-(--color-text-primary)',
};

const Screen = ({ src, alt, caption, className = 'h-44 md:h-[220px]' }) => (
    <figure className="table shrink-0">
        <img src={src} alt={alt} loading="lazy" className={`${className} block w-auto rounded-lg`} />
        {caption && <figcaption className="table-caption caption-bottom pt-1.5 text-sm italic text-(--color-text-subtitle)">{caption}</figcaption>}
    </figure>
);

const Arrow = () => (
    <div className="hidden md:flex self-center justify-center text-(--color-text-subtitle)" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="M13 18l6-6" /><path d="M13 6l6 6" />
        </svg>
    </div>
);

const Example = ({ title, problem, problemScreens, solution, solutionContent, why }) => (
    <article className="rounded-2xl border border-(--color-border) p-5 md:p-6 flex flex-col gap-4">
        <h3 className="text-lg font-normal text-(--color-text-primary)">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,auto)_20px_minmax(0,1fr)] gap-3 md:gap-4 items-start">
            <div className="flex flex-col gap-1.5 md:max-w-[290px]">
                <p className={S.subLabel}>Problem</p>
                <p className={S.small}>{problem}</p>
                <div className="flex flex-wrap gap-2 mt-1">{problemScreens}</div>
            </div>
            <Arrow />
            <div className="flex flex-col gap-1.5">
                <p className={S.subLabel}>Solution</p>
                <p className={S.small}>{solution}</p>
                {solutionContent && <div className="mt-1">{solutionContent}</div>}
            </div>
        </div>
        {why && (
            <div className="border-t border-(--color-border) pt-4 flex flex-col gap-1.5">
                <p className={S.subLabel}>Why this solution</p>
                <ul className="list-disc pl-5 text-sm text-(--color-text-primary) flex flex-col gap-1">
                    {why.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
            </div>
        )}
    </article>
);

const PRINCIPLES = [
    ['Priority & Type', 'Define each message’s purpose and priority.'],
    ['Placement & Timing', 'Match messages to page context and user activity.'],
    ['Frequency & Display Rules', 'Prevent excessive repetition.'],
    ['Dark Patterns', 'Avoid intrusive or misleading interactions.'],
];

const PLACEMENTS = [
    ['Up to THB 500 off', 'Homepage banner and course detail page'],
    ['New customer offer', 'First-visit modal'],
    ['Birthday campaign', 'Campaign banner'],
];

const SMP = () => {
    return (
        <main className="container-work md:mt-16">
            <HeaderWork
                title={<>Popup Audit &amp; Optimization: Designing a <span className="text-(--color-primary)">Communication System</span> for SmartMathPro</>}
                tags={['UX/UI Design']}
                role="UX Designer"
                duration="Oct 2026 – Ongoing"
            />

            <section id="overview" className={S.section}>
                <p className={S.label}>Overview</p>
                <p className={S.body}>
                    Promotional messages across SmartMathPro Online repeatedly interrupted the learning and purchasing journey. I audited user behavior through analytics and session recordings, then developed the SMP Design Guideline to establish consistent rules for message priority, placement, and frequency.
                </p>
            </section>

            <section id="research" className={S.section}>
                <p className={S.label}>Research &amp; Insights</p>
                <p className="font-medium text-(--color-text-primary)">Insight 1: Repeated interruptions</p>
                <p className="text-(--color-text-primary)">Users dismissed popups an average of <span className="font-medium">3.7 times</span>, with 44% of dismissals occurring on classroom and cart pages.</p>
                <p className={`${S.caption} mb-6`}>Source: Google Analytics 4 · 10 Sep – 7 Oct 2026</p>
                <p className="font-medium text-(--color-text-primary)">Insight 2: Friction during checkout</p>
                <p className="text-(--color-text-primary)">Session recordings showed users navigating between coupons and checkout while encountering promotional messages. The average purchase journey took <span className="font-medium">17.2 minutes</span> from adding an item to completing an order.</p>
                <img src="/img/work/smp/journey.webp" alt="Recorded session: closing the announcement bar, looking for a way to close a popup, viewing coupons, proceeding to checkout, a popup appearing, then going back to use a coupon" loading="lazy" className="w-full h-auto rounded-lg mt-6" />
                <p className={S.caption}>Source: Microsoft Clarity</p>
            </section>

            <section id="problem" className={S.section}>
                <p className={S.label}>Key Issues</p>
                <ul className="list-disc pl-5 ml-3 text-(--color-text-primary) flex flex-col gap-1">
                    <li>The same promotion appeared in 3–4 places on a page.</li>
                    <li>Repeated popups interrupted users throughout the journey.</li>
                    <li>51% of orders used a coupon, making coupon accessibility important.</li>
                </ul>
            </section>

            <section id="solution" className={S.section}>
                <p className={S.label}>Solution: SMP Design Guideline</p>
                <p className={S.body}>I established four principles for consistent on-site communication:</p>
                <ol className="list-decimal pl-5 ml-3 text-(--color-text-primary) flex flex-col gap-2 mb-6">
                    {PRINCIPLES.map(([name, desc]) => (
                        <li key={name} className="pl-1"><span className="font-medium">{name}:</span> {desc}</li>
                    ))}
                </ol>
                <p className={`${S.body} mb-5`}>The following examples show how the guideline informed design decisions across key pages.</p>

                <div className="flex flex-col gap-6">
                    <Example
                        title="Example 1: Homepage"
                        problem="The same promotion appeared in the announcement bar and two homepage banners."
                        problemScreens={<Screen src="/img/work/smp/ex1-before.webp" alt="Homepage before: the same promotion in the announcement bar and two banners" />}
                        solution="Three options were proposed:"
                        solutionContent={
                            <div className="flex flex-wrap gap-3">
                                <Screen src="/img/work/smp/ex1-option-a.webp" alt="Option A: the offer shown as a modal on the first visit only" caption="A. First-visit modal" className="h-40 md:h-[180px]" />
                                <Screen src="/img/work/smp/ex1-option-b.webp" alt="Option B: the offer shown on the course detail page" caption="B. Course detail page" className="h-40 md:h-[180px]" />
                                <Screen src="/img/work/smp/ex1-option-c.webp" alt="Option C: the offer shown in the cart at checkout" caption="C. Checkout" className="h-40 md:h-[180px]" />
                            </div>
                        }
                        why={[
                            <><span className="font-medium">A. First-visit modal:</span> Introduce the offer without repeating it on every visit.</>,
                            <><span className="font-medium">B. Course detail page:</span> Show the offer when users are closer to making a purchase.</>,
                            <><span className="font-medium">C. Checkout:</span> Show the offer in the cart, where users can act on it right before paying.</>,
                        ]}
                    />
                    <Example
                        title="Example 2: Cart"
                        problem="Two coupon-related popups interrupted users before payment."
                        problemScreens={<>
                            <Screen src="/img/work/smp/ex2-before-1.webp" alt="Cart with the first coupon popup" />
                            <Screen src="/img/work/smp/ex2-before-2.webp" alt="Cart with a second popup about unused coupons" />
                        </>}
                        solution="Automatically apply the best eligible coupon in the order summary, while keeping the coupon list accessible."
                        solutionContent={
                            <div className="flex flex-wrap gap-3">
                                <Screen src="/img/work/smp/ex2-after-summary.webp" alt="Order summary with the best eligible coupon applied" caption="Order summary" />
                                <Screen src="/img/work/smp/ex2-after-coupons.webp" alt="Coupon list with the applied coupon highlighted" caption="Coupon list" className="h-[156px] md:h-[195px]" />
                            </div>
                        }
                        why={[
                            'Reduces manual effort during checkout.',
                            'Removes two promotional interruptions.',
                            'Makes coupon benefits easier to access.',
                        ]}
                    />
                    <Example
                        title="Example 3: Account"
                        problem="Multiple promotional popups stacked on top of each other."
                        problemScreens={<img src="/img/work/smp/ex3-before.webp" alt="Account page with several promotion popups stacked on top of each other" loading="lazy" className="w-full max-w-[290px] h-auto rounded-lg" />}
                        solution="Give each promotion a defined placement and trigger."
                        solutionContent={
                            <div className="rounded-lg border border-(--color-border) bg-white px-4 overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="text-(--color-text-subtitle) border-b border-(--color-border)">
                                            <th className="font-normal py-2 pr-3">Promotion</th>
                                            <th className="font-normal py-2">Placement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-(--color-text-primary)">
                                        {PLACEMENTS.map(([a, b], i, arr) => (
                                            <tr key={a} className={i < arr.length - 1 ? 'border-b border-(--color-border)' : ''}>
                                                <td className="py-2 pr-3 font-medium">{a}</td>
                                                <td className="py-2">{b}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        }
                        why={['Keeps promotions accessible without making users dismiss multiple popups.']}
                    />
                </div>
            </section>

            <section id="measuring-success" className={S.section}>
                <p className={S.label}>Measuring Success</p>
                <p className={S.body}>Compare a 28-day baseline with the 28 days after implementation.</p>
                <div className="rounded-2xl border border-(--color-border) px-5 md:px-7 py-3 md:py-4 mt-4 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-sm text-(--color-text-subtitle) border-b border-(--color-border)">
                                <th className="font-normal py-2.5 pr-4">Metric</th>
                                <th className="font-normal py-2.5 pr-4 w-32">Baseline</th>
                                <th className="font-normal py-2.5 w-32">Target</th>
                            </tr>
                        </thead>
                        <tbody className="text-(--color-text-primary)">
                            <tr className="border-b border-(--color-border)">
                                <td className="py-3.5 pr-4">Popup dismissals per user</td>
                                <td className="py-3.5 pr-4 font-medium">3.7</td>
                                <td className="py-3.5 font-medium">Decrease</td>
                            </tr>
                            <tr>
                                <td className="py-3.5 pr-4">Add-to-cart to order completion</td>
                                <td className="py-3.5 pr-4 font-medium">17.2 min</td>
                                <td className="py-3.5 font-medium">Reduce by 10%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="result" className={S.section}>
                <p className={S.label}>Result</p>
                <p className={S.body}>Post-launch measurement is ongoing. Results will be added after the 28-day evaluation period.</p>
            </section>
        </main>
    );
};

export default SMP;
