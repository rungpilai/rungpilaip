import FilterableWorks from '../components/FilterableWorks';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const Works = () => {
    return (
        <>
            <main className='mt-16'>
                <section className="container">
                    <PageTitle className="mb-2">All Works</PageTitle>
                    <p className=" text-(--color-text-secondary) mb-8">
                        A collection of projects from product design, branding, and design experiments.
                    </p>
                </section>

                <section className="container pb-12">
                    <FilterableWorks />

                    <p className="text-(--color-text-tertiary) text-center mt-35 mb-10">
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
