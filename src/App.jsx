import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
                <Route path="/work/sourcecode-website" element={<StandaloneLayout><SC /></StandaloneLayout>} />
                {/* Old short link, kept so links already shared still work */}
                <Route path="/work/sc" element={<Navigate to="/work/sourcecode-website" replace />} />
                <Route path="/work/ai-eye-tracking" element={<StandaloneLayout><ET /></StandaloneLayout>} />
                {/* Old short link, kept so links already shared still work */}
                <Route path="/work/et" element={<Navigate to="/work/ai-eye-tracking" replace />} />
                <Route path="/work/thangsaimai-website" element={<StandaloneLayout><TSM /></StandaloneLayout>} />
                {/* Old short link, kept so links already shared still work */}
                <Route path="/work/tsm" element={<Navigate to="/work/thangsaimai-website" replace />} />
                <Route path="/work/scg-home" element={<StandaloneLayout><SCG /></StandaloneLayout>} />
                {/* Old short link, kept so links already shared still work */}
                <Route path="/work/scg" element={<Navigate to="/work/scg-home" replace />} />
                <Route path="/work/popup-audit" element={<StandaloneLayout><SMP /></StandaloneLayout>} />
                {/* Old short link, kept so links already shared still work */}
                <Route path="/work/smp" element={<Navigate to="/work/popup-audit" replace />} />
                <Route path="/about" element={<StandaloneLayout><About /></StandaloneLayout>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
