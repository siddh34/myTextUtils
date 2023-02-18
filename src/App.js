import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [darkmode , setDarkMode] = useState('light');

  const toggle = () => {
    if (darkmode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = "#1A1A1A";
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="Text Utility" mode={darkmode} toggleMode={toggle}></Navbar>
        <div className="container my-3">
          <TextForm title="Text Box" heading="Enter Text to analyse" mode={darkmode}></TextForm>
        </div>
    </>
  );
}

export default App;
