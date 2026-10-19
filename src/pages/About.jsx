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
                    </section>

                    <div className="flex flex-col justify-start items-start gap-5">
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-primary) font-medium">UX/UI Designer</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">Smile Education (Education)</span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2026 - Present</span>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-primary) font-medium">UX/UI Designer</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">SourceCode (Software Solutions) </span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2025 - 2026</span>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-primary) font-medium">UX Trainee and Researcher</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">SCG Home (Home Solutions)</span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2024 - 2025</span>
                        </div>
                        <div className="justify-start text-xl mt-12">Education</div>
                        <div className="self-stretch inline-flex justify-between items-start pt-5 border-t border-(--color-border)">
                            <div className="inline-flex flex-col justify-start items-start gap-1">
                                <span className="text-(--color-text-primary) font-medium">Bachelor of Arts, Language <br className="block sm:hidden" />and Information Technology</span>
                                <span className="text-sm md:text-base text-(--color-text-tertiary)">Chulalongkorn University</span>
                            </div>
                            <span className="text-sm md:text-base text-(--color-text-tertiary) whitespace-nowrap">2021 - 2025</span>
                        </div>
                    </div>

                    <div className="self-stretch flex flex-col justify-center items-start gap-5 desktop:gap-12 desktop:flex-row-reverse mt-16 mb-12 desktop:my-16">
                        <section className="flex flex-col gap-5 flex-[calc(409/1030*100%)]">
                            <p className="text-xl leading-normal">
                                Still exploring, shaped by what I create <br className="hidden sm:block" />
                                and what I choose to leave behind.
                            </p>
                            <p className="leading-relaxed text-(--color-text-primary) mb-4">
                                I first fell for design through fashion. Not the finished look, but everything behind it, how a piece was constructed and why one choice was made over another.
                                <br /><br />
                                I still work that way. As a designer, I’m interested in understanding why people make certain decisions, how businesses create value, and how research can uncover new opportunities for innovation.
                            </p>
                        </section>

                        <section className="rounded-2xl overflow-hidden flex-[calc(573/1030*100%)]">
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
                            <p className="text-(--color-text-primary) leading-[1.7] mb-10">
                                It doesn't always start clearly, sometimes just fragments, thoughts,{' '}
                                <br className="hidden md:block" />
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
                        <p className="text-(--color-text-primary)">
                            If my perspective resonates with you, perhaps we can create{' '}
                            <br className="hidden md:block" />
                            experiences that people not only use, but genuinely connect with.
                        </p>
                        <span className="text-(--color-text-tertiary) inline-flex gap-1 items-center">
                            {EMAIL_ADDRESS}
                            <CopyEmailButton />
                        </span>
                    </section>
                </div>
            </main>
        </>
    );
};

export default About;
