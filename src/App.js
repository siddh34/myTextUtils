import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [darkmode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState({
    msg: "Welcome to TextUtils",
    type: "primary",
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert("Welcome to TextUtils","primary");
    },3000)
  };

  const toggle = () => {
    if (darkmode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#1A1A1A";
      showAlert("Dark Mode Enabled","success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode Enabled","success");
    }
  };

  return (
    <>
      <Navbar title="Text Utility" mode={darkmode} toggleMode={toggle}></Navbar>
      <Alert title={`${(alert.msg)}`} type={`${(alert.type)}`}></Alert>
      <div className="container my-3">
        <TextForm
          title="Text Box"
          heading="Enter Text to analyse"
          mode={darkmode}
          showAlert={showAlert}
        ></TextForm>
      </div>
    </>
  );
}

export default App;
