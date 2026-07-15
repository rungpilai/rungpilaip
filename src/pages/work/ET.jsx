import HeaderWork from '../../components/HeaderWork';

const S = {
    section: 'mb-12',
    sectionFull: 'mb-12',
    label: 'text-(--color-text-subtitle) text-sm tracking-[0.08em] font-sans! uppercase mb-3',
    subHeading: 'text-(--color-text-primary) mb-3',
    body: 'text-(--color-text-primary) mb-4',
    list: 'text-(--color-text-primary) list-disc pl-5 mt-1 ml-3',
    imgFull: 'w-full max-w-[680px] h-auto rounded mt-6 ',
    twoCol: 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-6',
    colLabel: 'text-sm text-center tracking-widest text-(--color-text-subtitle) uppercase mb-2',
    caption: 'text-(--color-text-subtitle) text-sm italic mt-2',
};

const ET = () => {
    return (
        <>
            <main className="container-workmx-auto mt-16">
                <HeaderWork
                    title={<><span className="text-(--color-primary)">AI Eye Tracking</span>{' '}for Design Practice in Corporate Routine</>}
                    tags={['Experimental Design']}
                    role="UX Researcher"
                    duration="Mar - May 2025"
                />

                <div className={S.section}>
                    <p className={S.label}>OVERVIEW</p>
                    <p className={S.body}>
                        This project explored whether AI-based eye gaze estimation tools could support marketers and designers in predicting customer attention on advertisement visuals. By comparing human assumptions with AI-generated predictions using recall and precision metrics, the study found that human judgment still outperformed current AI models in identifying key visual focus areas. The research highlights both the limitations and future potential of AI-assisted advertising evaluation.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>GOAL</p>
                    <p className={S.body}>
                        To determine if AI tools can effectively replace or supplement human judgment in predicting where customers look on advertisement visuals.
                    </p>
                </div>

                <div className={S.sectionFull}>
                    <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr] gap-8 mt-6 items-center">
                        <div>
                            <img src="/img/work/et/process.png" alt="Double diamond process" className="w-full h-auto rounded" />
                        </div>
                        <div>
                            <img src="/img/work/et/whiteboard.png" alt="Research whiteboard" className="w-full h-auto rounded" />
                        </div>
                    </div>
                    <p className={S.caption}>Planning the research using the Double Diamond approach</p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>EMPATHIZE</p>
                    <p className={S.body}>
                        Marketing teams often have limited budgets for A/B testing, leading them to rely on "gut feeling" or assumptions about what captures a customer's attention.
                    </p>
                    <p className={S.body}>
                        Collected data from 8 SCG marketing staff, covering the workflow from ad creation, campaign setup, testing, to post-launch monitoring.
                    </p>
                </div>

                <div className={S.section}>
                    <div className="text-center py-8">
                        <img src="/img/work/et/vector.svg" alt="Problem identification" className="w-8 h-auto mx-auto mb-4" />
                        <p className={S.label}>PROBLEM IDENTIFICATION</p>
                        <blockquote className="text-[1.1rem] mx-auto leading-relaxed">
                            "Is it true that marketers' assumptions align with the actual customers' eye focus area?"
                        </blockquote>
                    </div>
                </div>

                <div className={S.section}>
                    <p className={S.label}>EXPERIMENTAL DESIGN (DOE)</p>
                    <p className={`${S.body}`}>Testing Similarity in Perception Using Recall &amp; Precision Metrics.</p>
                    <p className='text-(--color-text-subtitle) text-sm italic'>
                        Recall = Number of actual gaze points correctly predicted by marketers/designers or MGETs<br />
                        Precision = Number of predicted gaze points that correctly matched actual gaze points
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-[2.1fr_1fr] gap-6 mt-6 items-start">
                        <img src="/img/work/et/doe.png" alt="Experimental design" className="w-full h-auto rounded" />
                        <img src="/img/work/et/test-card.jpg" alt="Test Card" className="max-w-xs mx-auto w-full h-auto rounded" />
                    </div>
                    <p className={S.caption}>Setting up the comparison and test card defining the hypothesis, method, and success criteria for the experiment</p>
                </div>

                <div className={S.sectionFull}>
                    <div className={S.twoCol}>
                        <img src="/img/work/et/backstage1.jpg" alt="Backstage 1" className="w-full h-auto rounded" />
                        <img src="/img/work/et/backstage2.jpg" alt="Backstage 2" className="w-full h-auto rounded" />
                    </div>
                    <p className={S.caption}>Behind the scene: Collecting gaze data from participants and testing the setup myself before the session</p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>RESULTS &amp; TAKEAWAYS</p>
                    <p className={S.body}>
                        Hypothesis on test card was invalidated: MGETs were not yet effective in supporting ad testing for marketers and designers.
                    </p>
                    <img src="/img/work/et/result.png" alt="Results table" className={`${S.imgFull} mx-auto max-w-xl! mb-3`} />
                    <p className={S.caption}>Benchmark results of four AI eye-tracking tools, ranked by Average Recall and Precision</p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>INTERPRETATION</p>
                    <p className={S.body}>
                        Based on recall metrics, marketers/designers' assumptions outperformed MGETs in predicting eye gaze, while MGETs captured under 50% of key visuals and need further improvement.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>FUTURE WORK</p>
                    <p className={S.body}>
                        Enhancing MGETs can improve preliminary ad testing, while future work should explore how AI eye tracking helps senior marketers train juniors more effectively within limited time.
                    </p>
                </div>

                <div className={S.section}>
                    <p className={S.label}>ACKNOWLEDGEMENT</p>
                    <p className={S.body}>
                        BENTO Team (Business Experimentation and Technology), SCG Distribution
                    </p>
                </div>
            </main>
        </>
    );
};

export default ET;
