/* eslint-disable no-template-curly-in-string */
import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './CSS/Nav.css';
import './TextForm.js';

export default function Navbar(props) {

    const changeTheme1 = () => {
        if (props.mode === 'dark'){
            var el1 = document.getElementById('exampleFormControlTextarea1');
            var el2 = document.getElementById('jsContainer');
            el1.style.backgroundColor = "yellow";
            el2.style.backgroundColor = "yellow";
        }
    }

    const changeTheme2 = () => {
        if (props.mode === 'dark'){
            var el1 = document.getElementById('exampleFormControlTextarea1');
            var el2 = document.getElementById('jsContainer');
            el1.style.backgroundColor = "rgb(73, 51, 199)";
            el2.style.backgroundColor = "rgb(73, 51, 199)";
        }
    }

    const changeTheme3 = () => {
        if (props.mode === 'dark'){
            var el1 = document.getElementById('exampleFormControlTextarea1');
            var el2 = document.getElementById('jsContainer');
            el1.style.backgroundColor = "rgb(0, 238, 255)";
            el2.style.backgroundColor = "rgb(0, 238, 255)";
        }
    }

    return (
        <nav data-bs-theme={props.mode} className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                About
                            </Link>
                        </li>
                    </ul>
                    <ui className="nav-item">
                        <div className='test1 rounded-circle' onClick={changeTheme1}></div>
                    </ui>
                    <ui className="nav-item">
                        <div className='test2 rounded-circle' onClick={changeTheme2}></div>
                    </ui>
                    <ui className="nav-item">
                        <div className='test3 rounded-circle' onClick={changeTheme3}></div>
                    </ui>
                    <div className={`form-check form-switch text-${(props.mode === 'light') ? 'dark' : 'light'} mx-2`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}


Navbar.prototype = { title: PropTypes.title, mode: PropTypes.mode, toggleMode: PropTypes.toggleMode }

Navbar.defaultProps = { title: 'Set Title Here', mode: 'light' };
