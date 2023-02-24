import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = ({ allStaff }) => {
 
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {allStaff.map((employee)=>{
          return (
            <Employee employee={employee}/>
          )
        })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
