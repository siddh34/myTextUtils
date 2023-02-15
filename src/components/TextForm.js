import React, {useState} from "react";
import PropTypes from 'prop-types';


export default function TextForm(props) {

    let [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();

        setText(newText);
    };

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handelClearText = () => {
        let newText = "";
        setText(newText);
    };

    const speak = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
    };

    // const FindReplace = () => {

    // }

    const captilizeSent = () => {
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <textarea
                    className="form-control"
                    value={text}
                    id="exampleFormControlTextarea1"
                    rows="8"
                    onChange={handleChange}
                    ></textarea>
            </div>
            <div class="btn-group btn-group-justified">
                <button className="btn btn-primary" onClick={handleUpperCaseClick}>UpperCase</button>
                <button className="btn btn-primary" onClick={handleLowerCaseClick}>LowerCase</button>
                <button className="btn btn-primary" onClick={handelClearText}>Clear Text</button>
                <button className="btn btn-primary" onClick={speak}>Speak</button>
                <button className="btn btn-primary" onClick={captilizeSent}>Captalized Sent</button>
            </div>
            <div className="container my-3">
                <h1>
                    Text Summary
                </h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} miniutes read</p>
                <h2>
                    Preview
                </h2>
                <p>{text}</p>
            </div>
        </>
    );
}

TextForm.prototype = {heading: PropTypes.heading};

TextForm.defaultProps = {
    heading: "Text Box"
};
