import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";

function App () {
  const [employees, setEmployees] = useState([])

  
  

  function getEmployeesData () {
    const employees = "https://vet-app-0obi.onrender.com/api/employees"
    fetch(employees)
    .then((results) => results.json())
    .then((employeesData) => {
      setEmployees(employeesData);
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getEmployeesData();
  }, [])


  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} />
    </>
  );
};

export default App;
