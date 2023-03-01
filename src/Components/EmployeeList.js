import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState } from "react";
import { useEffect } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    function fetchEmployees() {
      fetch(`https://vet-app-0obi.onrender.com/api/employees`)
        .then((res) => res.json())
        .then((apiData) => {
          setEmployees(apiData)
        })
    }
    fetchEmployees()
  }, [])
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) =>
          <Employee key={employee.id} employee={employee} />
        )}

      </section>
    </main>
  );
};

export default EmployeeList;
