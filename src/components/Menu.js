import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';

const Menu = (/* { location } */) => {

    const location = useLocation();
    console.log(location);

    return (
        <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === '/' ? " active": "")} aria-current="page" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === '/about' ? " active": "")} to="/about">
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === '/news' ? " active": "")} to="/news">
                    News
                </Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === '/contact' ? " active": "")} to="/contact">
                    Contact
                </Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link" + (location.pathname === '/hola' ? " active": "")} to="/hola">
                    Hola
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" rel="noreferrer" href="https://google.cl" target="_blank">
                    Google
                </a>
            </li>
        </ul>
    )
}

export default withRouter(Menu);