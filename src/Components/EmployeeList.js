import { React, useState, useEffect } from "react";
import Employee from "./Employee";
import "../styles/EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("https://vet-app-0obi.onrender.com/api/employees");
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return <Employee key={employee.id} employee={employee} />;
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
