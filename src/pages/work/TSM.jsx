import HeaderWork from '../../components/HeaderWork';

const S = {
    section: 'mb-12',
    sectionFull: 'mb-12',
    label: 'text-muted text-sm tracking-[0.08em] font-sans! uppercase mb-3',
    subHeading: 'text-(--color-text) mb-3',
    body: 'text-(--color-text) mb-4',
    list: 'text-(--color-text) list-disc pl-5 mt-1 ml-3',
    imgFull: 'w-full max-w-[680px] h-auto rounded mt-6 ',
    twoCol: 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6',
    colLabel: 'text-sm tracking-widest text-card-meta uppercase mb-2',
    caption: 'text-text-secondary text-sm italic mt-2',
};

const TSM = () => {
    return (
        <>
            <main className="container max-w-4xl mx-auto mt-16">
                <HeaderWork
                    title={<><span className="text-(--color-primary-purple)">ThangSaiMai</span> Antique Shop Website Design</>}
                    category="UI Design"
                    role="UI Designer"
                    duration="May - Jun 2025"
                />

                <div className={S.section}>
                    <p className={S.label}>OVERVIEW</p>
                    <p className={S.body}>
                        Designed a website for ThangSaiMai Antique Shop to elevate its image from a local antique store into a distinctive and trustworthy brand, while appealing to a younger audience interested in vintage and collectible items.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>CONCEPT & DIRECTION</p>
                    <p>Reinterpreted “antique” in a more contemporary way.</p>
                    <ul className={S.list}>
                        <li>Earthy and muted color tones</li>
                        <li>Classic-inspired yet readable typography</li>
                        <li>Minimal layouts with a subtle rhythm, inspired by the experience of browsing through a physical shop</li>
                    </ul>
                    <div className='max-w-xl mx-auto'>
                        <img src="/img/work/tsm/logo.jpg" alt="ThangSaiMai logo" className={`${S.imgFull} mx-auto`} />
                        <img src="/img/work/tsm/font.jpg" alt="Typography system" className={`${S.imgFull} mx-auto`} />
                    </div>
                    <p className={S.caption}>Brand identity for Thangsaimai: logo, typography, and color palette</p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>KEY FEATURES</p>
                    <ul className={S.list}>
                        <li>Categorized antique collections (Furniture, Decor, Rare Items)</li>
                        <li>Featured items with storytelling to highlight the uniqueness of each piece</li>
                        <li>Clean product detail pages focusing on imagery and textures</li>
                        <li>Simple contact and inquiry flow for potential buyers</li>
                    </ul>
                </div>

                <div className={S.sectionFull}>
                    <div className="grid grid-cols-[3.6fr_1fr] gap-6 mt-6 items-start">
                        <div>
                            <img src="/img/work/tsm/design-desktop.jpg" alt="Desktop design" className="w-full h-auto rounded" />
                        </div>
                        <div>
                            <img src="/img/work/tsm/design-mobile.jpg" alt="Mobile design" className="w-full h-auto rounded" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default TSM;
