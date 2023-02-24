import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]) // * state to pull employees id info
  useEffect(() => {
    //everytime the employee list is rendered, it will check to see if the array info is changed
    // empty array is the most best option for now b/c we are only passing info change once

    fetch("https://vet-app-0obi.onrender.com/api/employees") // * fetch the employee info
      .then((response) => response.json())
      .then((apiData) => {
        setEmployees(apiData) //* set the setter to the fetched apidata
      })
  }, []);
  // * maps through employee id info to return the array of employee info dynamically
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {/* <Employee /> */}
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            employee={employee}
            {...employee} /> // * the {... array name} duplicates the array info instead of having each indiviual prop there 
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
