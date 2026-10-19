import HeaderWork from '../../components/HeaderWork';

const S = {
    section: 'mb-14 scroll-mt-24',
    label: 'text-(--color-text-subtitle) text-sm tracking-[0.08em] font-sans! uppercase mb-3',
    body: 'text-(--color-text-primary) mb-4',
    caption: 'text-(--color-text-subtitle) text-sm italic mt-2',
    subLabel: 'text-sm font-semibold text-(--color-text-primary)',
    small: 'text-sm text-(--color-text-primary)',
};

const Screen = ({ src, alt, caption, className = 'h-44 md:h-[220px]' }) => (
    <figure className="flex flex-col gap-1.5 shrink-0">
        <img src={src} alt={alt} loading="lazy" className={`${className} w-auto rounded-lg`} />
        {caption && <figcaption className="text-sm italic text-(--color-text-subtitle) max-w-[150px]">{caption}</figcaption>}
    </figure>
);

const Arrow = () => (
    <div className="hidden md:flex self-center justify-center text-(--color-text-tertiary)" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="M13 18l6-6" /><path d="M13 6l6 6" />
        </svg>
    </div>
);

const Example = ({ title, problem, problemScreens, solution, solutionContent, why }) => (
    <article className="rounded-2xl border border-(--color-border) p-5 md:p-7 flex flex-col gap-5">
        <h3 className="text-xl font-normal text-(--color-text-primary)">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,auto)_20px_minmax(0,1fr)] gap-4 md:gap-6 items-start">
            <div className="flex flex-col gap-2.5 md:pt-5 md:max-w-[290px]">
                <p className={S.subLabel}>Problem</p>
                <p className={S.small}>{problem}</p>
                <div className="flex flex-wrap gap-2 mt-1">{problemScreens}</div>
            </div>
            <Arrow />
            <div className="rounded-xl bg-greyscale-10/45 p-5 flex flex-col gap-2.5">
                <p className={S.subLabel}>Solution</p>
                <p className={S.small}>{solution}</p>
                <div className="mt-1">{solutionContent}</div>
            </div>
        </div>
        <div className="border-t border-(--color-border) pt-5 flex flex-col gap-2.5">
            <p className={S.subLabel}>Why this solution</p>
            <ul className="list-disc pl-5 text-sm text-(--color-text-primary) flex flex-col gap-1.5">
                {why.map((w) => <li key={w}>{w}</li>)}
            </ul>
        </div>
    </article>
);

const PRINCIPLES = [
    ['Communication Priority & Type', 'Define each message’s purpose and priority.'],
    ['Placement & Timing', 'Align messages with page context and user activity.'],
    ['Frequency & Display Rules', 'Control display frequency and prevent repetition.'],
    ['Dark Patterns', 'Prevent intrusive or misleading interactions.'],
];

const STATS = [
    ['3–4', 'spots showing the same promo'],
    ['3.7', 'pop-up dismissals per user'],
    ['51%', 'of orders use a coupon'],
];

const SMP = () => {
    return (
        <main className="container-work md:mt-16">
            <div>
                <div>
                    <HeaderWork
                        title={<>Popup Audit &amp; Optimization: Designing a <span className="text-(--color-primary)">Communication System</span> for SmartMathPro</>}
                        tags={['UX/UI Design']}
                        role="UX Designer"
                        duration="Oct 2026 - Ongoing"
                    />

                    <section id="overview" className={S.section}>
                        <p className={S.label}>Overview</p>
                        <p className={S.body}>
                            Promotional messages on SmartMathPro Online competed for attention, creating unnecessary interruptions throughout the learning and purchasing journey. I conducted a UX audit using behavioral analytics and session recordings to identify friction points and develop the SMP Design Guideline, a unified framework for managing on-site communication.
                        </p>
                    </section>

                    <section id="research" className={S.section}>
                        <p className={S.label}>Research &amp; Insights</p>
                        <p className="font-semibold text-(--color-text-primary)">Insight 1: Repeated dismissals signal unnecessary interruptions.</p>
                        <p className="text-(--color-text-primary)">Users dismissed popups an average of 3.7 times per person, with 44% of dismissals occurring on classroom and cart pages.</p>
                        <p className={`${S.caption} mb-6`}>Source: Google Analytics 4 (SmartMathPro Online), 10 Sep – 7 Oct 2026</p>
                        <p className="font-semibold text-(--color-text-primary)">Insight 2: Promotional messages can disrupt the purchase journey.</p>
                        <p className="text-(--color-text-primary)">Session recordings revealed repeated navigation between coupon pages and checkout, triggered by overlapping promotional messages.</p>
                        <img src="/img/work/smp/journey.webp" alt="Recorded session: closing the announcement bar, looking for a way to close a pop-up, viewing coupons, proceeding to checkout, a pop-up appearing, then going back to use a coupon" loading="lazy" className="w-full h-auto rounded-lg mt-6" />
                        <p className={S.caption}>Source: Microsoft Clarity</p>
                    </section>

                    <section id="problem" className={S.section}>
                        <p className={S.label}>Problem</p>
                        <p className={`${S.body} mb-7`}>The audit revealed three key issues:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {STATS.map(([num, cap]) => (
                                <div key={num}>
                                    <p className="text-4xl text-(--color-text-primary)">{num}</p>
                                    <p className="text-sm text-(--color-text-tertiary) mt-1">{cap}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="solution" className={S.section}>
                        <p className={S.label}>Solution</p>
                        <p className={S.body}>I developed the SMP Design Guideline, establishing four principles for consistent on-site communication.</p>
                        <ol className="list-decimal pl-6 text-(--color-text-primary) flex flex-col gap-1.5 mb-6">
                            {PRINCIPLES.map(([name, desc]) => (
                                <li key={name}><span className="font-semibold block">{name}</span>{desc}</li>
                            ))}
                        </ol>
                        <p className={`${S.body} mb-8`}>Here are a few examples of how the guideline was applied across key pages.</p>

                        <div className="flex flex-col gap-8">
                            <Example
                                title="Example 1: Homepage"
                                problem="The same promo was repeated in several places on the first screen."
                                problemScreens={<Screen src="/img/work/smp/ex1-before.webp" alt="Homepage before: the same promotion in the announcement bar and two banners" />}
                                solution="Show the promo once, at the right moment. Two options were proposed:"
                                solutionContent={
                                    <div className="flex flex-wrap gap-3">
                                        <Screen src="/img/work/smp/ex1-option-a.webp" alt="Option A: promotion shown as a modal on the first visit only" caption="A · modal on first visit only" />
                                        <Screen src="/img/work/smp/ex1-option-b.webp" alt="Option B: promotion shown on the course page after adding to cart" caption="B · move to the cart page" />
                                    </div>
                                }
                                why={[
                                    'One promo, one place: repeating it added noise without reaching more people (frequency and display rules).',
                                    'Option A keeps the offer visible to new visitors, without repeating it on every visit.',
                                    'Option B shows the offer when it matters most, as users are about to buy (placement and timing).',
                                ]}
                            />
                            <Example
                                title="Example 2: Cart"
                                problem="The coupon pop-up appeared twice in the cart, right before payment."
                                problemScreens={<>
                                    <Screen src="/img/work/smp/ex2-before-1.webp" alt="Cart with the first coupon pop-up" className="h-40 md:h-[180px]" />
                                    <Screen src="/img/work/smp/ex2-before-2.webp" alt="Cart with a second pop-up about unused coupons" className="h-40 md:h-[180px]" />
                                </>}
                                solution="Apply the best available coupon automatically in the order summary."
                                solutionContent={
                                    <div className="flex flex-wrap gap-3">
                                        <Screen src="/img/work/smp/ex2-after-summary.webp" alt="Order summary with the best coupon already applied" caption="Best coupon auto-applied" className="h-44 md:h-[200px]" />
                                        <Screen src="/img/work/smp/ex2-after-coupons.webp" alt="Coupon list with the best coupon preselected" caption="Coupon list" className="h-44 md:h-[200px]" />
                                    </div>
                                }
                                why={[
                                    'Users no longer have to find and pick a coupon at the most sensitive step.',
                                    'Removes two interruptions right before payment (placement and timing).',
                                    '51% of orders use a coupon, so making it effortless has a direct effect on checkout.',
                                ]}
                            />
                            <Example
                                title="Example 3: Account"
                                problem="Pop-ups stacked on top of each other and had to be closed one by one."
                                problemScreens={<Screen src="/img/work/smp/ex3-before.webp" alt="Account page with several promotion pop-ups stacked on top of each other" className="w-full max-w-[290px] h-auto" />}
                                solution="Keep all 3 promotions, but give each its own place and moment."
                                solutionContent={
                                    <div className="rounded-lg border border-(--color-border) bg-white px-4 overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead>
                                                <tr className="text-(--color-text-tertiary) border-b border-(--color-border)">
                                                    <th className="font-normal py-2 pr-3">Promotion</th>
                                                    <th className="font-normal py-2 pr-3">Shown when</th>
                                                    <th className="font-normal py-2">Placement</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-(--color-text-primary)">
                                                {[['Birthday campaign', 'Entering the site', 'Homepage hero banner'], ['400–600 THB off', 'Comparing courses', 'Below the price'], ['100 THB new customer', 'At checkout', 'Auto-applied in summary']].map(([a, b, c], i, arr) => (
                                                    <tr key={a} className={i < arr.length - 1 ? 'border-b border-(--color-border)' : ''}>
                                                        <td className="py-2 pr-3 font-semibold">{a}</td>
                                                        <td className="py-2 pr-3">{b}</td>
                                                        <td className="py-2">{c}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                }
                                why={[
                                    'Each promotion appears when it is relevant, so they no longer compete for the same moment (communication priority and type).',
                                    'Users reach the page without closing several pop-ups first (frequency and display rules).',
                                ]}
                            />
                        </div>
                    </section>

                    <section id="measuring-success" className={S.section}>
                        <p className={S.label}>Measuring Success</p>
                        <p className={S.body}>Success is measured by comparing 28 days before the change (10 Sep – 7 Oct 2026) with the 28 days after, using GA4 and Microsoft Clarity.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-sm text-(--color-text-tertiary) border-b border-(--color-border)">
                                        <th className="font-normal py-2.5 pr-4">Metric</th>
                                        <th className="font-normal py-2.5 pr-4 w-32">Before</th>
                                        <th className="font-normal py-2.5 w-32">Target</th>
                                    </tr>
                                </thead>
                                <tbody className="text-(--color-text-primary)">
                                    <tr className="border-b border-(--color-border)">
                                        <td className="py-3.5 pr-4">Pop-up dismissals per user</td>
                                        <td className="py-3.5 pr-4 font-semibold">3.7</td>
                                        <td className="py-3.5 font-semibold">Lower</td>
                                    </tr>
                                    <tr className="border-b border-(--color-border)">
                                        <td className="py-3.5 pr-4">Add-to-cart to order completed</td>
                                        <td className="py-3.5 pr-4 font-semibold">17.2 min</td>
                                        <td className="py-3.5 font-semibold">10% faster</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="result" className={S.section}>
                        <p className={S.label}>Result</p>
                        <p className={S.body}>In measurement. The 28-day post-launch data is being collected; results will be added here once the measurement period ends.</p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default SMP;
