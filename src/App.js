// import About from "./components/About";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms"; // ✅ use this instead of Textbox
import React, { useState } from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils2"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact
              path="/"
              element={ */}
                <Textforms
                  showAlert={showAlert}
                  heading="Enter Text to analyze"
                  mode={mode}
                />
              {/* }
            />
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
