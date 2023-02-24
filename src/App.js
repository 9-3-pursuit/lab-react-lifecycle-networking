import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { useState, useEffect } from "react";

function App () {
  const [employees, setEmployees] = useState([])
  //const [pets, setPets] = useState({ name: "", kind: "" })
  
  

  function getEmployeesData () {
    const employees = "https://vet-app-0obi.onrender.com/api/employees"
    fetch(employees)
    .then((results) => results.json())
    .then((employeesData) => {
      setEmployees(employeesData);
      // console.log(employeesData)
      // console.log(employees)
    })
    .catch((error) => console.log(error))
  }

  // function getPetsData () {
  //   const pets = "https://vet-app-0obi.onrender.com/api/pets"
  //   fetch(pets)
  //   .then((results) => results.json())
  //   .then((petsData) => {
  //     console.log("we also here");
  //     setPets(petsData);
  //   })
  //   .catch((error) => console.log(error))
  // }

  useEffect(() => {
    //getEmployeesData();
    //getPetsData();
  }, [])


  return (
    <>
      <NavBar />
      <EmployeeList employees={employees} />
    </>
  );
};

export default App;
