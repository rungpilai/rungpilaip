import HeaderWork from '../../components/HeaderWork';

const S = {
    section: 'mb-12',
    sectionFull: 'mb-12',
    label: 'text-(--color-text-subtitle) text-sm tracking-[0.08em] font-sans! uppercase mb-3',
    body: 'text-(--color-text) mb-4',
    list: 'text-(--color-text) list-disc pl-5 mt-1 ml-3',
    imgFull: 'w-full max-w-[680px] h-auto rounded mt-6 ',
    twoCol: 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6',
    colLabel: 'text-sm text-center tracking-widest text-(--color-text-subtitle) uppercase mb-2',
};

const SC = () => {
    return (
        <>
            <main className="container-work mx-auto md:mt-16">
                <HeaderWork
                    title={<>SourceCode Website Redesign: Rebuilding Brand Trust <span className="text-(--color-primary)">Through UX</span></>}
                    tags={['UX/UI Design', 'Branding']}
                    role="UX Designer"
                    duration="Jun - Oct 2025"
                />

                <div className="mb-12 rounded-2xl overflow-hidden">
                    <img src="/img/thumnails/sc-thum.jpg" alt="SourceCode overview" className="w-full h-auto rounded" />
                </div>

                <div className={S.section}>
                    <p className={S.label}>OVERVIEW</p>
                    <p className={S.body}>
                        SourceCode's website made it difficult for visitors to understand what the company offered. Through stakeholder research, information architecture, branding, and interface design, this project restructured the experience into one that is clearer, more consistent, and easier to navigate.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>PROBLEM</p>
                    <p className={S.body}>
                        Visitors landed on the homepage without a clear understanding of what SourceCode offered. Overlapping product categories created confusion, while partnership inquiries declined despite consistent website traffic.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>PROCESS</p>
                    <p className={S.body}>
                        Before moving into solutions, I identified key issues in structure, navigation, and brand clarity through research and stakeholder insights.
                    </p>
                    <img src="/img/work/sourcecoode/process.png" alt="Design process" className="w-full h-auto rounded mt-6 mx-auto sm:max-w-3xl" />
                </div>

                <div className={S.section}>
                    <p className={S.label}>BRANDING DIRECTION</p>
                    <p className={S.body}>
                        A clear brand direction was defined to align visual identity, tone, and interface design, ensuring a consistent and cohesive experience across all touchpoints.
                    </p>
                    <img src="/img/work/sourcecoode/sc-branding.jpg" alt="Brand direction whiteboard" className="w-full h-auto mt-6 mx-auto sm:max-w-lg rounded-xl" />
                    <p className='text-(--color-text-subtitle) text-sm italic mt-2'>Visual identity guidelines defining the brand's core elements: logo lockups, primary blue palette, type system (Poppins / Mitr), and personality keywords</p>
                </div>

                <div className={S.section}>
                    <p className={`${S.label} mt-10`}>Stakeholder Interview with the CEO</p>
                    <p className={S.body}>
                        To align the redesign with the company's direction, I started with research on both the business and audience side.
                    </p>
                    <ul className={S.list}>
                        <li>Target audiences the company wants to attract</li>
                        <li>Products to prioritize moving forward</li>
                        <li>How SourceCode should be perceived externally</li>
                        <li>Types of partnerships the company is aiming for</li>
                    </ul>
                </div>

                <div className={S.section}>
                    <p className={S.label}>Key Insights</p>
                    <p>
                        These requirements revealed that the existing website didn't clearly communicate the company's priorities:
                    </p>
                    <ul className={S.list}>
                        <li>The homepage must communicate core products clearly</li>
                        <li>Information architecture should reflect business priorities</li>
                        <li>The site needs stronger credibility to convert traffic into inquiries</li>
                    </ul>
                </div>

                <div className={S.sectionFull}>
                    <div className={S.twoCol}>
                        <div>
                            <p className={S.colLabel}>BEFORE REDESIGN</p>
                            <img src="/img/work/sourcecoode/before-redesign.jpg" alt="Before redesign" className="w-full h-auto rounded" />
                        </div>
                        <div>
                            <p className={S.colLabel}>AFTER REDESIGN</p>
                            <img src="/img/work/sourcecoode/after-redesign.jpg" alt="After redesign" className="w-full h-auto rounded" />
                        </div>
                    </div>
                </div>

                <div className={S.section}>
                    <p className={S.label}>IMPACT</p>
                    <p className={S.body}>
                        The redesigned website elevates brand credibility and clarifies offerings, helping support partnerships, client connections, and early-stage sales conversations. (Impact is qualitative, as no tracking or lead analytics are implemented yet.)
                    </p>
                </div>
            </main>
        </>
    );
};

export default SC;
