import React, { useState } from "react";
import Navbar from './Navbar.jsx';
import { useLocation } from "react-router-dom";

export default function About(props) {

    const loc = useLocation();
    var mode = loc.state.mode;


    const [darkmode, setDarkMode] = useState(mode);

    const [myStyle, setMyStyle] = useState(mode === 'light' ? {
        color: 'black',
        backgroundColor: 'white'
    } : {
        color: 'white',
        backgroundColor: 'black'
    });

    const toggleState = () => {
        // var el4 = document.getElementById('flexSwitchCheckDefault');
        if (darkmode === 'light') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            document.body.style.backgroundColor = "#1A1A1A";
            setDarkMode("dark");
            // el4.checked = !el4.checked;
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setDarkMode("light");
            document.body.style.backgroundColor = "white";
            // el4.checked = !el4.checked;
        }
    };

    return (
        <>
            <Navbar title="Text Utility" mode={darkmode} toggleMode={toggleState}></Navbar>
            <div className="mx-3 my-3" style={myStyle}>
                <h1>About us!</h1>
                <div className="accordion" style={myStyle} id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={myStyle}
                            >
                                What is textutils?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is my first React App.</strong> It is
                                a textutility which can do basic text editing for the user in feature I do intend to add more to this textutility.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

