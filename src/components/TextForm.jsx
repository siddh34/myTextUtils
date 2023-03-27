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
        props.showAlert("Text coverted to UpperCase","success");
    };
    
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text coverted to LowerCase","success");
    };
    
    const handelClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    };
    
    const speak = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
        props.showAlert("Using Voice Operation","success");
    };
    
    const handelCopy = () => {
        var text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");
    }
    
    const handelExtraSpaces = () => {
        let newText = text.replace(/\s+/g, " ");
        setText(newText);
        props.showAlert("handeled Extra Spaces","success");
    }
    
    const captilizeSent = () => {
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Sentence Capitalized","success");
    }

    return (
        <>
            <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
            <div className="mb-3">
                    <textarea
                    className="form-control"
                    value={text}
                    id="exampleFormControlTextarea1"
                    rows="8"
                    onChange={handleChange}
                    style={{backgroundColor: props.mode === 'dark' ? '#BB86FC' : 'white'}}
                    ></textarea>
            </div>
            <div className="btn-group btn-group-justified" style={{backgroundColor: props.mode === 'dark' ? '#BB86FC' : 'light'}}>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpperCaseClick}>UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleLowerCaseClick}>LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handelClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={speak}>Speak</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={captilizeSent}>Captalized Sent</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handelCopy}> Copy </button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handelExtraSpaces}> Remove Extra Spaces </button>
            </div>            
            <div className="container my-3" id="jsContainer" style={{backgroundColor: props.mode === 'dark' ? '#BB86FC' : 'white',borderRadius: 5}}>
                <h1>
                    Text Summary
                </h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} miniutes read</p>
                <h2>
                    Preview
                </h2>
                <p>{text.length>0?text:'Enter Text to preview'}</p>
            </div>
        </>
    );
}

TextForm.prototype = {heading: PropTypes.heading, mode: PropTypes.mode};

TextForm.defaultProps = {
    heading: "Text Box"
};
