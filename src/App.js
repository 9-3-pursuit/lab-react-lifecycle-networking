// importing React from "react" to gain access to features of React library
import React from "react";
// importing useState to add state to components
// importing useEffect to allow performance of side effects within components
import { useState, useEffect } from "react";
// importing NavBar from ./Components/NavBar to use in App.js
import NavBar from "./Components/NavBar";
// importing EmployeeList from ./Components/EmployeeList to use in App.js
import EmployeeList from "./Components/EmployeeList";


// creating a functional component called App
function App() {
  // returning JSX with two child components: Navbar and EmployeeList
  return (
    <>
      <NavBar />
      {/* passing useState and useEffect as props */}
      <EmployeeList useState={useState} useEffect={useEffect} />
    </>
  );
};

// exporting App function to use in index.js
export default App;
