import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      addEmployeeData(setEmployees).catch(console.error);
    }
    return () => (ignore = true);
  }, []);

  const handleClick = (index) => () => {
    const newIndex = expandedIndex === index ? null : index;
    setExpandedIndex(newIndex);
  };

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee, index) => {
          return (
            <Employee
              key={employee.id}
              employee={employee}
              isExpanded={expandedIndex === index}
              handleClick={handleClick(index)}
            />
          );
        })}
      </section>
    </main>
  );
};

async function addEmployeeData(setEmployees) {
  const employeeData = await fetchData("employees");
  const petData = await fetchData("pets");
  const employeeDataWithPets = employeeData.map((employee) => {
    const matchedPets = petData.filter((pet) => pet.employeeId === employee.id);
    return { ...employee, pets: matchedPets };
  });
  setEmployees(employeeDataWithPets);
}

async function fetchData(endpoint) {
  const BASE_URL = "https://vet-app-0obi.onrender.com/api/";
  const employeeDataRaw = await fetch(BASE_URL + endpoint);
  const employeeData = await employeeDataRaw.json();

  return employeeData;
}

export default EmployeeList;
