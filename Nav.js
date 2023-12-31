import React from 'react';

const Nav = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className={'navbar ${menuOpen ? "open" : ""}'}>
            <a href="/" className="logo">
                <img src={logo} alt="logo"/>
            </a>
            <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order online</a>
                </li>
                <li>
                    <a href="/">Log in</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;