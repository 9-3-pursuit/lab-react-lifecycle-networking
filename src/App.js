import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App() {
  const [allPets, setAllPets] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [petsLoaded, setPetsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/pets")
      .then((response) => response.json())
      .then((results) => {
        setAllPets(results);
        setPetsLoaded(true);
      });
  }, []);
  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      .then((response) => response.json())
      .then((results) => {
        results.map((employee) => {
          if (employee.postfix) {
            employee.fullId = `${employee.prefix} ${employee.firstName} ${employee.lastName}, ${employee.postfix}`;
          } else {
            employee.fullId = `${employee.prefix} ${employee.firstName} ${employee.lastName}`;
          }
          employee.pets = allPets.filter(
            (pet) => pet.employeeId == employee.id
          );
        });
        setAllEmployees(results);
      });
  }, [allPets]);
  return (
    <>
      <NavBar />
      <EmployeeList employees={allEmployees} />
    </>
  );
}

export default App;
