import { Link } from 'react-router-dom';

const Navbar = ({ onAboutClick }) => {
    return (
        <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-[20px] py-3">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img src="/img/logo-navbar-footer.svg" alt="Rungpilai" width={83} height={45} />
                </Link>
                <div className="flex gap-5">
                    <button
                        onClick={onAboutClick}
                        className="text-sm p-2 font-normal! tracking-wider transition-colors duration-200 cursor-pointer text-(--color-text-tertiary) hover:text-(--color-text-primary)"
                    >
                        ABOUT
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
