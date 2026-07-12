import Footer from '../components/Footer';
import ActionLink from '../components/ActionLink';
import PageTitle from '../components/PageTitle';
import CopyEmailButton from '../components/CopyEmailButton';

const About = () => {
    return (
        <>
            <main className='mt-16 pb-10'>
                <div className="container max-w-5xl mx-auto">
                    <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                        <PageTitle>
                            About <span className="text-(--color-primary-purple)">Rungpilai</span>
                        </PageTitle>
                        <ActionLink
                            href="/rungpilai_resume_2026.pdf"
                            download
                            className="mt-4"
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

                    <section className="mt-10 mb-8">
                        <p className="text-[20px] leading-normal mb-6">
                            Still exploring, shaped by what I create <br className="hidden sm:block" />
                            and what I choose to leave behind.
                        </p>
                        <p className="leading-relaxed text-(--color-text) mb-4">
                            <span className="float-left text-[3.5rem] leading-[0.75] mr-2.5 mt-1 text-(--color-text)">F</span>
                            ashion was one of the first forms of design I truly connected with. I became fascinated by the idea that even the most expressive pieces begin with structure, patterns, construction, and thoughtful decisions beneath the surface. That way of thinking continues to influence my work today. I approach design not only through visuals, but through systems, context, and the relationship between logic and feeling.
                        </p>
                        <p className="leading-relaxed text-(--color-text)">
                            Today, I see design as more than creating interfaces. For me, it’s about understanding behavior, experimenting with emerging technologies, and building experiences that connect people with technology in a more natural and meaningful way.
                        </p>
                    </section>

                    <section className="mb-10 rounded-2xl overflow-hidden">
                        <img
                            src="/img/about/self-pic.jpg"
                            alt="Rungpilai Patpai"
                            className="w-full object-cover object-top grayscale"
                        />
                    </section>

                    <section className="mb-20">
                        <p className="text-[20px] leading-relaxed mb-4">
                            My <span className="text-(--color-primary-purple)">workflow</span> is not a straight line.<br />
                            More like layers of thinking stacked over time.
                        </p>
                        <p className="text-muted-dark leading-[1.7] mb-10">
                            It doesn't always start clearly, sometimes just fragments, thoughts,<br className="hidden md:block" />
                            and questions. But over time, a process takes shape.
                        </p>
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

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center mb-16">
                        <div className="text-center md:text-right">
                            <p className="font-sans text-[1.5rem] md:text-[1.75rem] font-normal leading-[1.35]">
                                Create first. <br className="hidden md:block" />
                                Refine later. <br />
                                Become through <br className="hidden md:block" />
                                repetition.
                            </p>
                        </div>

                        <div className="relative mx-auto w-4/5 sm:w-2/3 md:w-full">
                            <img
                                src="/img/about/flower-cosmos.jpeg"
                                alt="Cosmos flower"
                                className="w-full aspect-3/4 object-cover rounded-2xl md:rounded-lg brightness-80"
                            />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/40 px-4 py-1 rounded-sm text-white/90 text-sm sm:text-base md:text-xl whitespace-nowrap flex items-center gap-2">
                                rungpilai.p@gmail.com
                                <CopyEmailButton className="text-white hover:text-white" size={14} strokeWidth={2} />
                            </span>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <p className="text-[1.1rem] md:text-[1.3rem] text-muted-dark text-center md:text-left leading-[1.7]">
                                If my perspective resonates with you, perhaps we can create experiences that people not only use, but genuinely connect with.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default About;
