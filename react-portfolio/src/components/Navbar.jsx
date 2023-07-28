import React from "react";
import MainPage from "./MainPage"

// export default function Navbar() {}
function Navbar({ currentPage, handlePageChange }) {
    return (
        <section className="container-fluid border bg-light mb-5">
            <header className="row">
                {/* <h1 className="col">Jenna Strom</h1> */}
                <ul className="nav nav-bar col d-flex justify-content-end">
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </header>
        </section>
    );
}

export default Navbar;