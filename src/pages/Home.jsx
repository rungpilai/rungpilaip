import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import FilterableWorks from '../components/FilterableWorks';
import Modal from '../components/Modal';
import About from './About';
import ET from './work/ET';
import SC from './work/SC';
import SCG from './work/SCG';
import TSM from './work/TSM';
import { useState } from 'react';

const Home = () => {
    const [selectedModelPage, setSelectedModelPage] = useState('');

    const renderModalContent = (slug) => {
        switch (slug) {
            case '/about':
                return <About />;
            case '/work/et':
                return <ET />;
            case '/work/sc':
                return <SC />;
            case '/work/scg':
                return <SCG />;
            case '/work/tsm':
                return <TSM />;
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar onAboutClick={() => setSelectedModelPage('/about')} />
            <main className='mt-16'>
                <section className="container">
                    <PageTitle className="mb-10 text-(--color-text-primary)">
                        Design Technologist<br />and Product Designer
                    </PageTitle>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-12 mb-15">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm tracking-widest text-(--color-text-subtitle) uppercase">BASED IN</span>
                            <span className="text-(--color-text-secondary)">Bangkok, TH</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm tracking-widest text-(--color-text-subtitle) uppercase">UPDATED</span>
                            <span className="text-(--color-text-secondary)">2026</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm tracking-widest text-(--color-text-subtitle) uppercase">CURRENTLY</span>
                            <span className="text-(--color-text-secondary)">
                                Exploring physical computing, creative technology, and the future of interaction.
                            </span>
                        </div>
                    </div>

                    <button
                        className="bg-transparent border-none cursor-pointer tracking-[0.08em] p-0 transition-opacity duration-200 text-(--color-text-subtitle) hover:text-(--color-text-secondary)"
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
                    <h2 className="text-3xl font-normal mb-3 text-(--color-text-primary)">Curated Works</h2>
                    <p className="text-(--color-text-secondary) leading-relaxed mb-10">
                        Each project quietly reshapes how I think and who I'm becoming as a designer, <br className="hidden sm:block" />
                        here are some of the ones I'm most proud of.
                    </p>

                    <FilterableWorks onWorkClick={(slug) => setSelectedModelPage(slug)} />
                </section>
            </main>
            <div className="px-2.5 py-28 flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-(--color-text-subtitle)">More experiments in progress ...</div>
            </div>
            <div className="container">
                <Footer />
            </div>

            {
                selectedModelPage.length != 0 ?
                    <Modal
                    isOpen={selectedModelPage.length != 0}
                    onClose={() => setSelectedModelPage('')}>
                        {renderModalContent(selectedModelPage)}
                    </Modal>
                : null
            }
        </>
    );
};

export default Home;
