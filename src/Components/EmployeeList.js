import React, { useState , useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const API_BASE = "https://vet-app-0obi.onrender.com/api/";
  useEffect(() => {
    fetch(`${API_BASE}/employees`)
    .then((res) => res.json())
    .then((apiData) => {
    setEmployees(apiData)
    });
  }, []);
    

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => <Employee key={employee.id} employee={employee} {...employee} API_BASE={API_BASE} />)}
      </section>
    </main>
  );
};

export default EmployeeList;
