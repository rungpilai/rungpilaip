import CardWork from '../components/CardWork';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const ALL_WORKS = [
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
        year: '2025',
        tags: ['Branding & UI Design'],
        title: 'ThangSaiMai Antique Shop Website: A Quiet Brand with a Story to Tell',
        description: "ThangSaiMai's first website, built into a distinctive antique brand.",
        thumbnail: '/img/thumnails/tsm-thum.jpg',
        slug: '/work/tsm',
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

const Works = () => {
    return (
        <>
            <main className='mt-16'>
                <section className="container">
                    <PageTitle className="mb-2">All Works</PageTitle>
                    <p className="text-card-meta mb-8">
                        A collection of projects from product design, branding, and design experiments.
                    </p>
                </section>

                <section className="container pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ALL_WORKS.map((work) => (
                            <CardWork key={work.slug} {...work} />
                        ))}
                    </div>

                    <p className="text-muted text-center mt-35 mb-10">
                        More experiments in progress ...
                    </p>
                </section>
            </main>

            <div className="container">
                <Footer />
            </div>
        </>
    );
};

export default Works;
