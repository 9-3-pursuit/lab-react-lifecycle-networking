import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect  } from "react";

export const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);
  const [pets, setPets] = useState([]);

  
  
  function getEmployees(){
    fetch(`https://vet-app-0obi.onrender.com/api/employees`)
    .then((response)=> response.json())
    .then((employees) => {
      setEmployees(employees)
    })
  }
  useEffect(() =>{
    getEmployees();
  },[])

  
    function getPets () {
      fetch(`https://vet-app-0obi.onrender.com/api//pets`)
      .then((response) => response.json())
      .then((pets) => {
        setPets(pets);
      })
    }
    useEffect(() => {
      getPets();
  }, [])


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => {
          return (
          <Employee key={employee.id} employee={employee} pets={pets}/>
          )
        })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
