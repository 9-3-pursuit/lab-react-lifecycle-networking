import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`https://vet-app-0obi.onrender.com/api/employees`)
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee key={employee.id} {...employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
