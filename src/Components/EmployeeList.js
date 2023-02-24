import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      fetchEmployeeData(setEmployees).catch(console.error);
    }

    return () => (ignore = true);
  }, []);

  const handleClick = (index) => () => {
    const getNewIndex = () => (expandedIndex === index ? null : index);
    setExpandedIndex(getNewIndex());
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

async function fetchEmployeeData(setEmployees) {
  const FETCH_URL = "https://vet-app-0obi.onrender.com";
  const EMPLOYEE_ENDPOINT = "/api/employees";
  const employeeDataRaw = await fetch(FETCH_URL + EMPLOYEE_ENDPOINT);
  const employeeData = await employeeDataRaw.json();

  setEmployees(employeeData);
}

export default EmployeeList;
