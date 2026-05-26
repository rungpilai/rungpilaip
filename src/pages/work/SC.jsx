import HeaderWork from '../../components/HeaderWork';
import Footer from '../../components/Footer';
import ActionLink from '../../components/ActionLink';

const S = {
    section: 'mb-12',
    sectionFull: 'mb-12',
    label: 'text-muted text-sm tracking-[0.08em] font-sans! uppercase mb-3',
    body: 'text-(--color-text) mb-4',
    list: 'text-(--color-text) list-disc pl-5 mt-1 ml-3',
    imgFull: 'w-full max-w-[680px] h-auto rounded mt-6 ',
    twoCol: 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6',
    colLabel: 'text-sm text-center tracking-widest text-muted uppercase mb-2',
};

const SC = () => {
    return (
        <>
            <main className="container max-w-4xl mx-auto mt-16">
                <HeaderWork
                    title={<>SourceCode Company Website Redesign:<br />Before the <span className="text-(--color-primary-purple)">AI Shift</span></>}
                    category="Branding & UI Design"
                    role="UX Designer"
                    duration="Jun - Oct 2025"
                />

                <div className="mb-12 rounded-2xl overflow-hidden">
                    <img src="/img/thumnails/sc-thum.jpg" alt="SourceCode overview" className="w-full h-auto rounded" />
                </div>

                <div className={S.section}>
                    <p className={S.label}>OVERVIEW</p>
                    <p className={S.body}>
                        The last website redesign before AI took over content creation at SourceCode. This case study captures a human-led design approach at a turning point when designers still owned every word, image, and structural decision.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>PROBLEM</p>
                    <p className={S.body}>
                        Visitors landed on the homepage without a clear understanding of what SourceCode offered. Overlapping product categories created confusion, while partnership inquiries declined despite consistent website traffic.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>SOLUTION</p>
                    <p>Enhancing User Experience &amp; Strengthening Brand Presence</p>
                    <ul className={S.list}>
                        <li>Improve usability with clear navigation and structure</li>
                        <li>Simplify and organize product information</li>
                        <li>Modernise the overall visual design</li>
                        <li>Establish consistent brand identity (typography, tone)</li>
                        <li>Introduced a blog to support SEO and visibility</li>
                        <li>Added detailed company information and real company imagery to build credibility and increase trust</li>
                    </ul>
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
                    <p className='text-text-secondary text-sm italic mt-2'>Visual identity guidelines defining the brand's core elements: logo lockups, primary blue palette, type system (Poppins / Mitr), and personality keywords</p>
                </div>

                <div className={S.section}>
                    <p className={S.body}>
                        To align the redesign with the company's direction, I started with research on both the business and audience side.
                    </p>
                    <p className={`${S.label} mt-10`}>Stakeholder Interview with the CEO</p>
                    <p>I spoke with the CEO to understand the company's vision and product direction, focusing on:</p>
                    <ul className={S.list}>
                        <li>Target audiences the company wants to attract</li>
                        <li>Products to prioritize moving forward</li>
                        <li>How SourceCode should be perceived externally</li>
                        <li>Types of partnerships the company is aiming for</li>
                    </ul>
                    <p>
                        The conversation revealed that the existing website didn't reflect the CEO's vision, and the product structure wasn't organized around business priorities.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>Key Insights</p>
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

                <div className={S.section}>
                    <p className={S.label}>REFLECTION IN THE AGE OF AI</p>
                    <p className={S.body}>
                        This project was created through a fully human-led design process. With the company’s transition to AI-generated design, production became faster and more automated. However, this shift also highlights the importance of human thinking in shaping user experience, defining structure, and building meaningful brand narratives. Rather than replacing design, AI changes the role of the designer, from creating interfaces to directing systems.
                    </p>
                </div>

                <div className="mt-16">
                    <ActionLink to="/works" icon="‹" iconPosition="left">BACK TO ALL WORKS</ActionLink>
                </div>
            </main>

            <div className="container">
                <Footer />
            </div>
        </>
    );
};

export default SC;
