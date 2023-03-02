import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App() {
  return (
    <>
      <NavBar />
      <EmployeeList useState={useState} useEffect={useEffect} />
    </>
  );
};

export default App;
