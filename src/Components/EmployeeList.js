import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ useState, useEffect }) => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/employees")
      .then((res) => res.json())
      .then((apiData) => {
        setEmployees(apiData)
      })
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee, i) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
