import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./Header";
import PersonalInformation from "./PersonalInformation";
import PastWork from "./PastWork";
import Skills from "./Skills";
function App() {
  const [pastEmploymentState, setPastEmploymentState] = useState([
    { company: "", jobdescription: "", start: "", end: "" },
  ]);
  const [skillsState, setSkillsState] = useState([
    { skill: "HTML", level: "good" },
  ]);
  const [personalInformationState, setPersonalInformationState] = useState({
    first_name: "Test",
    last_name: "Test",
    birthday: "Test",
    mail: "Test",
  });

  const [editState, setEditState] = useState(true);
  return (
    <>
      <div className="app">
        <div className="leftColumn">
          <Header />
          <PersonalInformation
            personalInformationState={personalInformationState}
            setPersonalInformationState={setPersonalInformationState}
            editState={editState}
          />
          <PastWork
            pastEmploymentState={pastEmploymentState}
            setPastEmploymentState={setPastEmploymentState}
            editState={editState}
          />
          <Skills
            skillState={skillsState}
            setSkillState={setSkillsState}
            editState={editState}
          />
        </div>
        <div className="rightColumn">
          <img
            className="profilePic"
            src="https://picsum.photos/200"
            alt="profile"
          />
        </div>
      </div>
      <button onClick={() => setEditState(!editState)}>
        {editState ? "View" : "Edit"}
      </button>
    </>
  );
}

export default App;
