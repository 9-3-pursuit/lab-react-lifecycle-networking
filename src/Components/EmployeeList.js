import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";


const BASE_URL = 'https://vet-app-0obi.onrender.com/api/employees/'



const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`${ BASE_URL }`)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        console.log('data',data)
      });
  }, []);


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return <Employee key={employee.id} employee={employee} {...employee} />
        })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
