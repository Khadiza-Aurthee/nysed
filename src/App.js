import React from "react";
import Navbar from "./components/Navbar.js";
// Be sure to uncomment these components and the data before you use them!
import SchoolCard from "./components/SchoolCard.js";
import data from "./nycSchoolEnrollmentData.js";
import "./App.css";
console.log();
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
          <SchoolCard school={data[0]} />
        </div>
      </div>
    </div>
  );
}

export default App;
