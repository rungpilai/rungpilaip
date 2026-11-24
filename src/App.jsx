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
import StandaloneLayout from './components/StandaloneLayout';

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

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <WorkProgress />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/work/sc" element={<StandaloneLayout><SC /></StandaloneLayout>} />
                <Route path="/work/et" element={<StandaloneLayout><ET /></StandaloneLayout>} />
                <Route path="/work/tsm" element={<StandaloneLayout><TSM /></StandaloneLayout>} />
                <Route path="/work/scg" element={<StandaloneLayout><SCG /></StandaloneLayout>} />
                <Route path="/work/smp" element={<StandaloneLayout><SMP /></StandaloneLayout>} />
                <Route path="/about" element={<StandaloneLayout><About /></StandaloneLayout>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
