import React, {useState, useEffect} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

// const API_BASE = "https://vet-app-0obi.onrender.com/api"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    
      const url = `https://vet-app-0obi.onrender.com/api/employees`;
      fetch(url)
          .then((res) => res.json())
          .then((data) => {
              
              setEmployees(data);
          });
    }, [])
   
 

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} {...employee}/>
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
