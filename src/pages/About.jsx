import ActionLink from '../components/ActionLink';
import PageTitle from '../components/PageTitle';
import CopyEmailButton from '../components/CopyEmailButton';
import { EMAIL_ADDRESS } from '../utils/email';

const About = () => {
    return (
        <>
            <main className='md:mt-12'>
                <div className="container-about">
                    <PageTitle className="text-[32px] mb-12 md:mb-16">
                        About <span className="text-(--color-primary)">Rungpilai</span>
                    </PageTitle>

                    <section className="flex flex-row items-center justify-between mb-6">
                        <div className="justify-start text-xl">Career Summary</div>
                        <ActionLink
                            href="/rungpilai_resume_2026.pdf"
                            download
                            icon={
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            }
                        >
                            DOWNLOAD CV
                        </ActionLink>
                    </section>

                    <div className="flex flex-col justify-start items-start gap-5">
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-secondary) font-medium">UX/UI Designer</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">Smile Education (Education)</span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2026 - Present</span>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-secondary) font-medium">UX/UI Designer</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">SourceCode (Software Solutions) </span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2025 - 2026</span>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-secondary) font-medium">UX Trainee and Researcher</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">SCG Home (Home Solutions)</span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2024 - 2025</span>
                        </div>
                        <div className="justify-start text-xl mt-12">Education</div>
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-secondary) font-medium">Bachelor of Arts, Language and Information Technology</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">Chulalongkorn University</span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2021 - 2025</span>
                        </div>
                    </div>

                    <div className="self-stretch flex flex-col justify-center items-start gap-5 md:gap-12 md:flex-row-reverse mt-16 mb-12 md:my-16">
                        <section className="flex flex-col gap-5">
                            <p className="text-xl leading-normal">
                                Still exploring, shaped by what I create <br className="hidden sm:block" />
                                and what I choose to leave behind.
                            </p>
                            <p className="leading-relaxed text-(--color-text-secondary) mb-4">
                                Fashion was one of the first forms of design I truly connected with. I became fascinated by the idea that even the most expressive pieces begin with structure, patterns, construction, and thoughtful decisions beneath the surface. That way of thinking continues to influence my work today. I approach design not only through visuals, but through systems, context, and the relationship between logic and feeling.
                            <br/><br/>
                                Today, I see design as more than creating interfaces. For me, it's about understanding behavior, experimenting with emerging technologies, and building experiences that connect people with technology in a more natural and meaningful way.
                            </p>
                        </section>

                        <section className="rounded-2xl overflow-hidden">
                            <img
                                src="/img/about/self-pic.jpg"
                                alt="Rungpilai Patpai"
                                className="aspect-square md:aspect-auto w-full object-cover object-top grayscale"
                            />
                        </section>
                    </div>

                    <section className="my-12 md:mb-20 flex flex-col gap-6 md:gap-12">
                        <div className="flex flex-col gap-6 md:gap-5">
                            <p className="text-xl leading-relaxed">
                                My <span className="text-(--color-primary)">workflow</span> is not a straight line.<br />
                                More like layers of thinking stacked over time.
                            </p>
                            <p className="text-(--color-text-secondary) leading-[1.7] mb-10">
                                It doesn't always start clearly, sometimes just fragments, thoughts,<br className="hidden md:block" />
                                and questions. But over time, a process takes shape.
                            </p>
                        </div>
                        <img
                            src="/img/about/process-desktop.jpg"
                            alt="Design process diagram"
                            className="hidden md:block w-full h-auto"
                        />
                        <img
                            src="/img/about/process-mobile.png"
                            alt="Design process diagram"
                            className="block md:hidden w-full"
                        />
                    </section>

                    <section className="mt-12 mb-16 md:my-20 flex flex-col gap-5">
                        <p className="text-xl">
                            Create first. <br />
                            Refine later. <br />
                            Become through repetition.
                        </p>
                        <p className="text-(--color-text-secondary)">
                            If my perspective resonates with you, perhaps we can create experiences that people not only use, but genuinely connect with.
                        </p>
                        <span className="text-(--color-text-tertiary) inline-flex gap-1 items-center">
                            {EMAIL_ADDRESS}
                            <CopyEmailButton size={14} strokeWidth={2} />
                        </span>
                    </section>
                </div>
            </main>
        </>
    );
};

export default About;
