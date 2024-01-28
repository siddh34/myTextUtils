/* eslint-disable no-template-curly-in-string */
import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CSS/Nav.css';
import './TextForm.jsx';

export default function Navbar(props) {
    const changeTheme1 = () => {
        var el1 = document.getElementById('exampleFormControlTextarea1');
        var el2 = document.getElementById('jsContainer');
        if (props.mode === 'dark'){
            el1.style.backgroundColor = "green";
            el2.style.backgroundColor = "green";
        }
        else{
            el1.style.backgroundColor = "#FDF0D1";
            el2.style.backgroundColor = "#FDF0D1";
        }
    }

    const changeTheme2 = () => {
        var el1 = document.getElementById('exampleFormControlTextarea1');
        var el2 = document.getElementById('jsContainer');
        if (props.mode === 'dark'){
            el1.style.backgroundColor = "rgb(73, 51, 199)";
            el2.style.backgroundColor = "rgb(73, 51, 199)";
        }
        else{
            el1.style.backgroundColor = "#F3D7CA";
            el2.style.backgroundColor = "#F3D7CA";
        }
    }

    const changeTheme3 = () => {
        var el1 = document.getElementById('exampleFormControlTextarea1');
        var el2 = document.getElementById('jsContainer');
        if (props.mode === 'dark'){
            el1.style.backgroundColor = "rgb(0, 238, 255)";
            el2.style.backgroundColor = "rgb(0, 238, 255)";
        }
        else{
            el1.style.backgroundColor = "#E6A4B4";
            el2.style.backgroundColor = "#E6A4B4";
        }
    }

    const changeMode = () => {
        props.toggleMode();
        var el1 = document.getElementById('test1');
        var el2 = document.getElementById('test2');
        var el3 = document.getElementById('test3');
        var el4 = document.getElementById('flexSwitchCheckDefault');
        if(props.mode === "light"){
            el1.style.backgroundColor = "green";
            el2.style.backgroundColor = "rgb(73, 51, 199)";
            el3.style.backgroundColor = "rgb(0, 238, 255)";
            el4.checked = true;
        }
        else{
            el1.style.backgroundColor = "#F5EEE6";
            el2.style.backgroundColor = "#F3D7CA";
            el3.style.backgroundColor = "#E6A4B4";
            el4.checked = false;
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
                            <Link className="nav-link" to={"/About/mode"} state={{mode: props.mode}}>
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className='test1 rounded-circle' id='test1' onClick={changeTheme1}></div>
                    <div className='test2 rounded-circle' id='test2' onClick={changeTheme2}></div>
                    <div className='test3 rounded-circle' id='test3' onClick={changeTheme3}></div>
                    <div className={`form-check form-switch text-${(props.mode === 'light') ? 'dark' : 'light'} mx-2`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}


Navbar.prototype = { title: PropTypes.title, mode: PropTypes.mode, toggleMode: PropTypes.toggleMode }

Navbar.defaultProps = { title: 'Set Title Here', mode: 'light' };
