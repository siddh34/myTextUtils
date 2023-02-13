import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utility"></Navbar>
      <div className="container my-3">
        <TextForm title="Text Box" heading="Enter Text to analyse"></TextForm>
      </div>
    </>
  );
}

export default App;
