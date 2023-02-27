import React,{useState,useEffect} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = () => {

const [employees,setEmployees] =useState([])

useEffect(()=>{
  fetch("https://vet-app-0obi.onrender.com/api/employees").then((res) => res.json()).then((empls)=> setEmployees(empls) )
},[])

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
       {employees.map((emp)=> <Employee  key={emp.id} employee={emp}/>)}
        
      </section>
    </main>
  );
};

export default EmployeeList;
