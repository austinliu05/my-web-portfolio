import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">Austin Liu</div>
            <ul className="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experiences">Experiences</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
