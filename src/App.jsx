import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import SC from './pages/work/SC';
import ET from './pages/work/ET';
import TSM from './pages/work/TSM';
import SCG from './pages/work/SCG';
import SMP from './pages/work/SMP';
import ReadingProgress from './components/ReadingProgress';
import ProjectNav from './components/ProjectNav';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const WorkProgress = () => {
    const { pathname } = useLocation();
    return pathname.startsWith('/work/') ? <ReadingProgress /> : null;
};

const WorkNav = () => {
    const { pathname } = useLocation();
    return pathname.startsWith('/work/') ? <ProjectNav currentSlug={pathname} /> : null;
};

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <WorkProgress />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/work/sc" element={<SC />} />
                <Route path="/work/et" element={<ET />} />
                <Route path="/work/tsm" element={<TSM />} />
                <Route path="/work/scg" element={<SCG />} />
                <Route path="/work/smp" element={<SMP />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <WorkNav />
        </BrowserRouter>
    );
};

export default App;
