import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    birthday: "",
    mail: "",
    pastwork: [],
    skills: [],
  });

  return (
    <>
      <div className="personalInformation"></div>
      <div className="pastWork"></div>
      <div className="skills"></div>
    </>
  );
}

export default App;
