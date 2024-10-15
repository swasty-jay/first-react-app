import React from "react";
import "./App.css";

function App() {
  // Student component defined inside App component
  const Student = (Props) => {
    return (
      <div className="student-card">
        <h2>Name: {Props.studentName}</h2>
        <p>
          <strong>Age:</strong> {Props.studentAge}
        </p>
        <p>
          <strong>Grade:</strong> {Props.studentGrade}
        </p>
      </div>
    );
  };

  // School component defined inside App component

  const School = (Props) => {
    return (
      <div className="school-card">
        <h2>School Name: {Props.schoolName}</h2>
        <p>
          <strong>Location:</strong> {Props.schoolLocation}
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Student Information</h1>

      {/* Display multiple students */}
      <div className="student-section">
        <Student studentName="Foden" studentAge={23} studentGrade="B" />
        <Student studentName="Rodri" studentAge={26} studentGrade="A" />
        <Student studentName="Savio" studentAge={21} studentGrade="B" />
      </div>

      <h1>School Information</h1>

      {/* Display multiple schools */}
      <div className="school-section">
        <School schoolName="Accra senior High" schoolLocation="Accra" />
        <School schoolName="Cape Coast High" schoolLocation="cape coast" />
      </div>
    </div>
  );
}

export default App;
