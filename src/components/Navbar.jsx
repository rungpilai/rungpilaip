import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-100 bg-white py-3">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img src="/img/logo-navbar-footer.svg" alt="Rungpilai" width={83} height={45} />
                </Link>
                <div className="flex gap-5">
                    <Link
                        to="/"
                        className="text-sm p-2 font-semibold tracking-widest text-(--color-link) transition-colors duration-200 hover:text-(--color-link-hover)!"
                    >
                        HOME
                    </Link>
                    <Link
                        to="/work"
                        className="text-sm p-2 font-semibold tracking-widest text-(--color-link) transition-colors duration-200 hover:text-(--color-link-hover)!"
                    >
                        WORK
                    </Link>
                    <Link
                        to="/about"
                        className="text-sm p-2 font-semibold tracking-widest text-(--color-link) transition-colors duration-200 hover:text-(--color-link-hover)!"
                    >
                        ABOUT
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
