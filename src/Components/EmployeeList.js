import React, {useState, useEffect} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
   const [employees, setEmployees] = useState([]);
   useEffect(() => {
     fetch('https://vet-app-0obi.onrender.com/api/employees')
       .then((res) => res.json())
       .then((apiData) => {
         console.log(apiData);
         setEmployees(apiData);
       });
   }, []);
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee, i) => (
          <Employee key={employee.id} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
