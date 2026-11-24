import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Wraps pages opened directly by URL (e.g. a shared /work/smp link),
// so visitors can still find their way to the rest of the portfolio.
const StandaloneLayout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar onAboutClick={() => navigate('/about')} />
            {children}
            <div className="container-work mt-4 mb-24 md:mb-32">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-(--color-text-subtitle) transition-colors duration-200 hover:text-(--color-primary)"
                >
                    ← See all works
                </Link>
            </div>
            <div className="container">
                <Footer />
            </div>
        </>
    );
};

export default StandaloneLayout;
