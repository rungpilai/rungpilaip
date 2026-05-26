import HeaderWork from '../../components/HeaderWork';
import Footer from '../../components/Footer';
import ActionLink from '../../components/ActionLink';

const S = {
    section: 'mb-12',
    sectionFull: 'mb-12',
    label: 'text-muted text-sm tracking-[0.08em] font-sans! uppercase mb-3',
    subHeading: 'text-(--color-text) font-medium mb-3',
    body: 'text-(--color-text) mb-4',
    list: 'text-(--color-text) list-disc pl-5 mt-1 ml-3',
    imgFull: 'w-full max-w-[680px] h-auto rounded mt-6 ',
    twoCol: 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6',
    colLabel: 'text-sm tracking-widest text-card-meta uppercase mb-2',
    caption: 'text-text-secondary text-sm italic mt-2',
};

const SCG = () => {
    return (
        <>
            <main className="container max-w-4xl mx-auto mt-16">
                <HeaderWork
                    title={<><span className="text-(--color-primary-purple)">SCG Home</span> UX Case Study for Home Renovators</>}
                    category="UX Design"
                    role="UX Designer"
                    duration="Jun - Oct 2024"
                />

                <div className="mb-12 rounded-2xl overflow-hidden">
                    <img src="/img/thumnails/scg-thum.jpg" alt="SCG overview" className="w-full h-auto rounded" />
                </div>

                <div className={S.section}>
                    <p className={S.label}>OVERVIEW</p>
                    <p className={S.body}>
                        This UX case study explores how homeowners navigate the experience of home renovation from finding inspiration to selecting materials and planning their space. Based on user research and testing, the gallery experience was redesigned to help homeowners discover design inspiration more easily, reduce uncertainty during decision-making, and create a more intuitive connection between room ideas and products connected to purchasing decisions.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>GOAL</p>
                    <p className={S.body}>
                        To improve the home renovation experience by helping homeowners discover design inspiration more easily, reduce uncertainty during decision-making, and create a more intuitive connection between room ideas and purchasable products.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>TARGET USERS</p>
                    <ul className={S.list}>
                        <li>25–38 years old</li>
                        <li>Responsible for home maintenance and living conditions</li>
                        <li>Renovating their home for better living</li>
                        <li>Living in Bangkok or major cities</li>
                    </ul>
                </div>

                <div className={S.section}>
                    <p className={S.label}>DATA COLLECTION METHOD</p>
                    <p className={S.body}>
                        Conducted in-depth interviews with 8 individuals aged 23–58 who had previous home renovation experience.
                    </p>
                    <p>The interview questions were divided into 5 stages to better understand the renovation journey:</p>
                    <ul className={S.list}>
                        <li>Awareness Stage</li>
                        <li>Design Stage</li>
                        <li>Material Selection Stage</li>
                        <li>Construction Stage</li>
                        <li>Additional Questions</li>
                    </ul>
                </div>

                <div className={S.section}>
                    <p className={S.label}>KEY INSIGHTS</p>
                    <p>From user research, several key pain points were identified.</p>
                    <ul className={S.list}>
                        <li>Uncertainty about the renovation process</li>
                        <li>Confusion when selecting materials</li>
                        <li>Construction Stage</li>
                        <li>Concerns about budget and quality</li>
                        <li>Difficulty finding design inspiration that fits their space</li>
                    </ul>
                </div>

                <div className={S.section}>
                    <p className={S.label}>SYNTHESIS</p>
                    <p className={S.body}>
                        Research findings were organized through affinity mapping, personas, and customer journey mapping to better understand user behaviors, motivations, and decision-making patterns throughout the renovation process.
                    </p>
                </div>

                <div className={S.sectionFull}>
                    <div className={S.twoCol}>
                        <img src="/img/work/scg/affinity-mapping.png" alt="Affinity mapping" className="w-full h-auto rounded" />
                        <img src="/img/work/scg/journey.png" alt="Journey" className="w-full h-auto rounded" />
                    </div>
                    <p className={S.caption}>Affinity Mapping and Customer Journey: Mapping user behaviors, pain points, and opportunities across six key stages of the renovation journey</p>
                </div>

                <div className={S.sectionFull}>
                    <img src="/img/work/scg/persona.png" alt="User persona" className="w-full h-auto -auto rounded-xl" />
                    <p className={S.caption}>User persona: K. Patcharee, 30, seeking modern design inspiration for her home.</p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>SOLUTION</p>
                    <p>
                        The solution was to redesign the gallery idea.
                    </p>
                    <p>
                        Insights from customers showed that most don’t hire architects, care most about the home design style, and usually pick products based on the room type.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>NEW FEATURE</p>
                    <ul className={S.list}>
                        <li>Clickable room selection</li>
                        <li>Filter options</li>
                        <li>Image-based design</li>
                        <li>Clickable product images</li>
                        <li>Show images in the design and total price</li>
                        <li>Various design filters</li>
                    </ul>
                </div>

                <div className={S.sectionFull}>
                    <p className={S.label}>HOMEPAGE</p>
                    <div className={S.twoCol}>
                        <div>
                            <p className={S.colLabel}>BEFORE</p>
                            <img src="/img/work/scg/redesign/before_main.jpg" alt="Before main" className="w-full h-auto rounded" />
                        </div>
                        <div>
                            <p className={S.colLabel}>AFTER</p>
                            <img src="/img/work/scg/redesign/after_main.jpg" alt="After main" className="w-full h-auto rounded" />
                        </div>
                    </div>
                </div>

                <div className={S.sectionFull}>
                    <p className={S.label}>SINGLE PAGE</p>
                    <div className={S.twoCol}>
                        <div>
                            <p className={S.colLabel}>BEFORE</p>
                            <img src="/img/work/scg/redesign/before_sub.jpg" alt="Before sub" className="w-full h-auto rounded" />
                        </div>
                        <div>
                            <p className={S.colLabel}>AFTER</p>
                            <img src="/img/work/scg/redesign/after_sub.jpg" alt="After sub" className="w-full h-auto rounded" />
                        </div>
                    </div>
                </div>

                <div className={S.section}>
                    <p className={S.label}>PROTOTYPE TESTING</p>
                    <p>3 Test Activities</p>
                    <p>Task 1</p>
                    <ul className={S.list}>
                        <li className='text-card-meta'>Find a bedroom design you like.</li>
                        <li className='text-card-meta'>Rate how easy it was to find the design (1-5) (5 = Very easy)</li>
                    </ul>

                    <p>Task 2</p>
                    <ul className={S.list}>
                        <li className='text-card-meta'>View details of the selected room.</li>
                        <li className='text-card-meta'>Rate interest in purchasing products from the design (1-5) (5 = Very interested)</li>
                    </ul>

                    <p>Task 3</p>
                    <ul className={S.list}>
                        <li className='text-card-meta'>Review the overall design layout.</li>
                        <li className='text-card-meta'>Rate the visual appeal of the design (1-5) (5 = Very beautiful)</li>
                    </ul>

                    <img src="/img/work/scg/test-card.jpg" alt="Test card" className="w-full sm:max-w-sm mx-auto mt-8" />
                    <p className={S.caption}>Test Card for validating the Idea Gallery Page: hypothesis, test, metric, and success criteria in one frame</p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>Test Result</p>
                    <p>
                        3 out of 4 users rated the new UI higher than the existing UI.
                    </p>
                    <p>
                        Overall,  the new UI scored 20% higher in aesthetics and purchase interest.
                    </p>

                    <img src="/img/work/scg/test-result.jpg" alt="Test result" className="w-full sm:max-w-xl mx-auto mt-8" />
                    <p className={S.caption}>Test results comparing the existing and new UI across 4 users. Every participant rated the new UI higher, with improvements ranging from 13% to 20%</p>
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

export default SCG;
