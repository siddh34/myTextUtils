import React, {useState} from "react";
import PropTypes from 'prop-types'


export default function TextForm(props) {

    let [text, setText] = useState('Enter text');

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
                <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert To UpperCase</button>
                <button className="btn btn-primary" onClick={handleLowerCaseClick}>Convert To LowerCase</button>
            </div>
        </>
    );
}

TextForm.prototype = {heading: PropTypes.heading};

TextForm.defaultProps = {
    heading: "Text Box"
};