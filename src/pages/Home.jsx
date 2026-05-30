import CardWork from '../components/CardWork';
import Footer from '../components/Footer';
import ActionLink from '../components/ActionLink';
import PageTitle from '../components/PageTitle';

const FEATURED_WORKS = [
    {
        year: '2025',
        tags: ['Branding & UX Design'],
        title: 'SourceCode Company Website Redesign: Before the AI Shift',
        description: 'Led the redesign of a company website to improve information structure, usability, and brand presence.',
        thumbnail: '/img/thumnails/sc-thum.jpg',
        slug: '/work/sc',
    },
    {
        year: '2025',
        tags: ['Idea Validation & Experimental Design'],
        title: 'Exploring AI Eye Tracking for Design Practice in Corporate Routine',
        description: 'From gut feeling to data-driven design, exploring if AI eye tracking reflects real user attention.',
        thumbnail: '/img/thumnails/et-thum.jpg',
        slug: '/work/et',
    },
    {
        year: '2024',
        tags: ['UX Design'],
        title: 'SCG Home UX Case Study for Home Renovators',
        description: 'Simplified renovation decisions through a gallery redesign grounded in user behavior.',
        thumbnail: '/img/thumnails/scg-thum.jpg',
        slug: '/work/scg',
    },
];

const Home = () => {
    return (
        <>
            <main className='mt-16'>
                <section className="container">
                    <PageTitle className="mb-10">
                        Creative Technologist<br />and Product Designer
                    </PageTitle>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12 mb-15">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm tracking-widest text-muted uppercase">BASED IN</span>
                            <span className="text-(--color-text)">Bangkok, TH</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm tracking-widest text-muted uppercase">UPDATED</span>
                            <span className="text-(--color-text)">2026</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm tracking-widest text-muted uppercase">CURRENTLY</span>
                            <span className="text-(--color-text)">
                                Exploring the human experience behind evolving technology.
                            </span>
                        </div>
                    </div>

                    <button
                        className="bg-transparent border-none cursor-pointer tracking-[0.08em] text-muted p-0 transition-opacity duration-200 hover:opacity-50"
                        onClick={() => document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' })}
                        aria-label="Scroll to work"
                    >
                        SCROLL ↓
                    </button>
                </section>

                <section className='container py-12!'>
                    <hr className="border-t border-(--color-border) mx-auto" />
                </section>

                <section id="selected-work" className="container pb-8 scroll-mt-26">
                    <h2 className="font-serif text-3xl font-normal mb-3">Selected Works</h2>
                    <p className="text-(--color-card-meta) leading-relaxed mb-10">
                        Each project quietly reshapes how I think and who I'm becoming as a designer, <br className="hidden sm:block" />
                        here are some of the ones I'm most proud of.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURED_WORKS.map((work) => (
                            <CardWork key={work.slug} {...work} />
                        ))}
                    </div>

                    <div className="flex justify-end mt-20">
                        <ActionLink to="/works" icon="›">ALL WORKS</ActionLink>
                    </div>
                </section>
            </main>

            <div className="container">
                <Footer />
            </div>
        </>
    );
};

export default Home;
