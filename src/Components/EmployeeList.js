import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState([])
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    fetch("https://vet-app-0obi.onrender.com/api/employees")
    .then((res) => res.json())
    .then((data) => setEmployeeData(data))
  },[])
  console.log(employeeData)
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
       {employeeData.map((employee) => <Employee employee={employee} />) }
      </section>
    </main>
  );
};

export default EmployeeList;
