import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";

const API_BASE =  "https://vet-app-0obi.onrender.com/api/"

function App () {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    function getEmployeeInfo(){
      const url = `${API_BASE}/employees`
      fetch(url)
      .then((results) => results.json())
      .then((data) => {
        console.log(data)
        setEmployees(data)
      })
      .catch((error) => console.log(error))
    }
    getEmployeeInfo()
  }, [])

  return (
    <>
      <NavBar />
      <EmployeeList employees = {employees}/>
    </>
  );
};

export default App;
