import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <span className="falling-text">Austin Liu</span>
            </div>
            <ul className="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experiences">Experiences</a></li>
                {/* <li><a href="#about-me">About Me</a></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
