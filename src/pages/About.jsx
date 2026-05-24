import Footer from '../components/Footer';
import ActionLink from '../components/ActionLink';

const About = () => {
    return (
        <>
            <main className='mt-16 pb-10'>
                <div className="max-w-5xl mx-auto">
                    <section className="flex items-center justify-between">
                        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal">
                            About <span className="text-[#8c9ab5]">Rungpilai</span>
                        </h1>
                        <ActionLink 
                            href="/img/resume.png" 
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
                        <p className="font-medium leading-normal mb-6">
                            Still exploring, shaped by what I create<br />
                            and what I choose to leave behind.
                        </p>
                        <p className="leading-relaxed text-(--color-text) mb-4">
                            <span className="font-serif float-left text-[3.5rem] leading-[0.75] mr-2.5 mt-1 text-(--color-text)">F</span>
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
                        <p className="text-[20px] font-medium leading-relaxed mb-4">
                            My <span className="text-[#8c9ab5]">workflow</span> is not a straight line.<br />
                            More like layers of thinking stacked over time.
                        </p>
                        <p className="text-[#494A50]! leading-[1.7] mb-10">
                            It doesn't always start clearly, sometimes just fragments, thoughts,<br />
                            and questions. But over time, a process takes shape.
                        </p>
                        <img
                            src="/img/about/process-desktop.jpg"
                            alt="Design process diagram"
                            className="w-full max-w-175 h-auto"
                        />
                    </section>

                    <section className="grid grid-cols-3 gap-4 items-center mb-16">
                        <div className="text-right">
                            <p className="font-sans text-[1.75rem] font-normal leading-[1.35]">
                                Create first.<br />
                                Refine later.<br />
                                Become through<br />
                                repetition.
                            </p>
                        </div>

                        <div className="relative mx-auto">
                            <img
                                src="/img/about/flower-cosmos.jpeg"
                                alt="Cosmos flower"
                                className="w-full aspect-3/4 object-cover rounded-lg"
                            />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 text-xl whitespace-nowrap flex items-center gap-1.5">
                                rungpilai.p@gmail.com
                                <button
                                    onClick={() => navigator.clipboard.writeText('rungpilai.p@gmail.com')}
                                    aria-label="Copy email"
                                    className="bg-transparent border-none cursor-pointer text-white flex items-center p-0 transition-colors duration-200 hover:text-white"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" />
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                    </svg>
                                </button>
                            </span>
                        </div>

                        <div>
                            <p className="text-[1.3rem] text-[#494A50]! max-w-sm leading-[1.7]">
                                If my perspective resonates with you, perhaps we can create experiences that people not only use, but genuinely connect with.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <div className="container">
                <Footer />
            </div>
        </>
    );
};

export default About;
