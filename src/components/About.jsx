import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { useLocation } from "react-router-dom";

export default function About(props) {
    const loc = useLocation();
    var mode = loc.state.mode;

    const [darkmode, setDarkMode] = useState(mode);

    const [myStyle, setMyStyle] = useState(
        mode === "light"
            ? {
                color: "black",
                backgroundColor: "white",
            }
            : {
                color: "white",
                backgroundColor: "black",
            }
    );

    const toggleState = () => {
        // var el4 = document.getElementById('flexSwitchCheckDefault');
        if (darkmode === "light") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
            });
            document.body.style.backgroundColor = "#1A1A1A";
            setDarkMode("dark");
            // el4.checked = !el4.checked;
        } else {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            });
            setDarkMode("light");
            document.body.style.backgroundColor = "white";
            // el4.checked = !el4.checked;
        }
    };

    return (
        <>
            <Navbar
                title="Text Utility"
                mode={darkmode}
                toggleMode={toggleState}
            ></Navbar>
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
                                <strong>This is my first React App.</strong> It is a textutility
                                which can do basic text editing for the user in feature I do
                                intend to add more to this textutility.
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Contact form</h1>
                <form id="contact-form" method="post">
                    <div className="controls">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_name">Firstname *</label>
                                    <input
                                        id="form_name"
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        placeholder="Please enter your firstname *"
                                        required="required"
                                        data-error="Firstname is required."
                                    />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_lastname">Lastname *</label>
                                    <input
                                        id="form_lastname"
                                        type="text"
                                        name="surname"
                                        class="form-control"
                                        placeholder="Please enter your lastname *"
                                        required="required"
                                        data-error="Lastname is required."
                                    />
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_need">Please specify your need *</label>
                                <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                    <option value=""></option>
                                    <option value="Request quotation">Request quotation</option>
                                    <option value="Request order status">Request order status</option>
                                    <option value="Request copy of an invoice">Request copy of an invoice</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="form_message">Message *</label>
                                <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <input type="submit" class="btn btn-success btn-send" value="Send message" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
